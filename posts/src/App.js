import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { PostDetail } from "./components/PostDetail";
import { PostList } from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [authorId, setAuthorId]=useState(0);
  
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;


  const getPosts = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(resp.data);
    return resp.data;
  };

  const getPostsToDisplay = async () => {
     
     if (authorId!==0) {
      const allPosts = await handleChangeAuthor(authorId);
      const myPosts = allPosts.slice(indexOfFirstPage, indexOfLastPage);
      setPostsToDisplay(myPosts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase())));

     }
     else {
      const allPosts = await getPosts();
      const myPosts = allPosts.slice(indexOfFirstPage, indexOfLastPage);
      setPostsToDisplay(myPosts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase())));
     }
  }

  const getAuthors = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAuthors(resp.data)
  };

  const handleChangeAuthor = async (id) => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts/?userId="+id);
    setAuthorId(id);
    setCurrentPage(1);
    return resp.data;
  };


  
  useEffect(() => {
    getPostsToDisplay();
    getAuthors();
  }, [search, currentPage, authorId]);
  
  
  const handleChange = (value) => {
    setSearch(value);    
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  
  let totalPosts = authorId===0 ? posts.length : postsToDisplay.length;

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PostList
              posts={postsToDisplay}
              authors={authors}
              handleChangeAuthor={handleChangeAuthor}
              search={handleChange}
              totalPosts={totalPosts}
              postsPerPage={postsPerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
