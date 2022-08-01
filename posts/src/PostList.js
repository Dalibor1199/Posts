import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import React from "react";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [authors, setAuthors] = useState([]);


  const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      const newPosts = resp.data;
      if (search) {
        console.log(search);
        setPosts(
          newPosts.filter((post) =>
            post.title.toLowerCase().includes(search.toLocaleLowerCase())
          )
        );
      } else {
        setPosts(newPosts);
      }
    });
  };

  const getAuthors = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
        console.log(resp.status)
        setAuthors(resp.data)
    })
  }

  useEffect(() => {
    getPosts();
    getAuthors();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    const authorId = e.target.value;
    axios.get("https://jsonplaceholder.typicode.com/posts/?userId="+authorId).then((resp) => {
        setPosts(resp.data)
    })
  }

  return (
    <div>
      <form className="form">
        <input 
          type="text"
          name="postTitle"
          className="form-control"
          placeholder="Search"
          onChange={handleChange}
        />
        <select name="authorId" className="form-control" onChange={handleChangeAuthor}>
            {authors.map(author => {
                return <option value={author.id}>{author.name}</option>
            })}
        </select>
        
      </form>
      <section className="postList">
        {posts.map((post) => {
          return (
            <article key={post.id} className="post">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <p>
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </p>
            </article>
          );
        })}
      </section>
    </div>
  );
};
