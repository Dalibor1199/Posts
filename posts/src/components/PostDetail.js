import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "./Author";
import Comment from "./Comment";

export const PostDetail = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState({});
  const [userId, setUserId] = useState(0);
  const [postId, setPostId] = useState(0);

  const getPost = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          (postId == 0 ? id : postId)
      )
      .then((resp) => {
        setPost(resp.data);
        setPostId(resp.data.id);
        setUserId(resp.data.userId);
        getAuthor(resp.data.userId);
      });
  };

  const getComments = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          (postId == 0 ? id : postId)
      )
      .then((resp) => {
        console.log(resp);
        setComments(resp.data);
      });
  };

  useEffect(() => {
    getPost();
    getComments();
  }, [postId]);

  const getAuthor = (id) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((resp) => {
        setAuthor(resp.data);
      });
  };

  const nextPost = () => {
    const pomId = postId + 1;
    setPostId(pomId);
    console.log(postId);
  };

  const previousPost = () => {
    const pomId = postId - 1;
    setPostId(pomId);
    console.log(postId);
  };

  return (
    <div className="postDetail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr></hr>
      <button
        disabled={postId === 1}
        className="btn btn-light"
        onClick={previousPost}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        Previous article
      </button>
      <button
        disabled={postId === 100}
        className="nextButton btn btn-light"
        onClick={nextPost}
      >
        Next article{" "}
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
      <br />
      <br />
      <Author {...author} />
      <br />
      <br />
      <h3>Comments</h3>
      {comments.map((el) => {
        return <Comment key={el.id} {...el} />;
      })}
    </div>
  );
};
