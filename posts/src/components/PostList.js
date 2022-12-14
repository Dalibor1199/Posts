
import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export const PostList = ({posts, authors, handleChangeAuthor, search, totalPosts, postsPerPage, paginate, currentPage}) => {


 

  return (
    <div>
      <div className="start">
        <h1>Posts found: {posts.length}</h1>
      </div>
      <form className="form">
        <input
          type="text"
          name="postTitle"
          className="form-control"
          placeholder="Search"
          onChange={(e)=>{search(e.target.value)}}
        />
        <select
          placeholder="Filter by Author name"
          name="authorId"
          className="form-control"
          onChange={(e)=>{handleChangeAuthor(e.target.value)}}
        >
          <option disabled selected hidden>Filter by author name</option>
          {authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
        </select>
      </form>
      <section className="postList">
        {posts.map((post) => {
          return (
            
            <div  key={post.id} className="post link">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <Link to={`/post/${post.id}`}><button className="btn btn-light">Read more{" "}
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
              </button>
              </Link>
            </div>
            
          );
        })}
      </section>
      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
