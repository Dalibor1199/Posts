import axios from "axios";

import React, { useEffect, useState } from 'react'

const Author = (props) => {

    
    const userId = props.userId;
    

    const [author, setAuthor] = useState({});

    const getAuthor = () => {
        
          axios
            .get("https://jsonplaceholder.typicode.com/users/5")
            .then((resp) => {
              setAuthor(resp.data);
              console.log(author);
            });
        
      };

      useEffect (() => {
        getAuthor();
        
      }, [])

    //const {city, zipcode, street} = author.address;
    //const city = author['address']['city'];
  return (
    <div>
        <label>Author name</label>
        <p>{author.name}</p>
        <label>Address</label>
      
    </div>
  )
}

export default Author