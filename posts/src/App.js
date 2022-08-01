import axios from "axios";
import { useEffect, useState } from "react";
function App() {

const [posts, setPosts] = useState([]);

const getPosts = () => {
 axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
          setPosts(resp.data)
          console.log(posts)
        });
}

useEffect(() => {
  getPosts()
}, [])

  return (
    <section className="postList">
      {posts.map((post)=> {
        return <article key={post.id} className="post">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <p>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg></p>
        </article>
      })}
    </section>
  );
}

export default App;
