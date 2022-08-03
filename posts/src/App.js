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
  //const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState("");
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;


  const getPosts = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data;
    // const myPosts = resp.data.slice(indexOfFirstPage, indexOfLastPage);
    // setPostsToDisplay(myPosts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase())));
    
    //const allPosts = resp.data;
    // if (search) {
    //   setPosts(
    //     allPosts.filter((post) =>
    //       post.title.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    //   );
    // } else {
    //   setPosts(resp.data);
    // }
  };

  const allPosts = getPosts();

  const getPostsToDisplay = async () => {
     const allPosts = await getPosts();
     const myPosts = allPosts.slice(indexOfFirstPage, indexOfLastPage);
     setPostsToDisplay(myPosts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase())));
    console.log(postsToDisplay);
  }

  const getAuthors = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAuthors(resp.data)
  };

  const handleChangeAuthor = (id) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/?userId=" + id)
      .then((resp) => {
        setPostsToDisplay(resp.data);
      });
  };

  
  useEffect(() => {
    getPostsToDisplay();
    getAuthors();
    console.log("poziva se")
  }, [search, currentPage]);
  
  
  const handleChange = (value) => {
    setSearch(value);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  }



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
              totalPosts={allPosts.length}
              postsPerPage={postsPerPage}
              paginate={paginate}
            />
          }
        />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
