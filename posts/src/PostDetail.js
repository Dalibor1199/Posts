import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "./Author";
import Comment from "./Comment";

export const PostDetail = () => {
  let {id} = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState({});
  const [userId, setUserId] = useState(0);
  const [postId, setPostId] = useState(0);


  
  const getPost = () => {
    
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((resp) => {
        setPost(resp.data);
        setPostId(resp.data.id)
        setUserId(resp.data.userId);
        getAuthor(resp.data.userId);
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
  }, [postId]);
  
  const getAuthor = (id) => {
    axios.get("https://jsonplaceholder.typicode.com/users/"+id)
          .then(resp => {
            setAuthor(resp.data)
          })
  }

  const nextPost = () => {
    setPostId(postId+1);
    console.log(postId);

  }

  return (
    <div className="postDetail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr></hr>
      <button>Previous</button>
      <button onClick={nextPost}>Next</button>
      <Author {...author} />
      <h3>Comments</h3>
      {comments.map(el => {
        return <Comment key={el.id} {...el}/>
      })}
    </div>
  );
};
