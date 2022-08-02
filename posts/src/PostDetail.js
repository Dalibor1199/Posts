import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "./Author";
import Comment from "./Comment";

export const PostDetail = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [currentPostId, setCurrentPostId] = useState(0);
  
  setCurrentPostId(id);
  const getPost = () => {
    
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((resp) => {
        setPost(resp.data);
      });
  };

  const getComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments?postId="+id)
        .then(resp => {
          console.log(resp);
          setComments(resp.data);
        })
  }

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  const previosPost = () => {
    id = id - 1;
  }

  const userId = post.userId;
  return (
    <div className="postDetail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr></hr>
      <button onClick={previosPost}>Previous</button>
      <button>Next</button>
      <h1>Author</h1>
      <h3>Comments</h3>
      {comments.map(el => {
        return <Comment key={el.id} {...el}/>
      })}
    </div>
  );
};
