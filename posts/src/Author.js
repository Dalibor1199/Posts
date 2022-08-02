import axios from "axios";

import React, { useEffect, useState } from 'react'

const Author = ({name, address}) => {

    
   // const author = props.author;

      useEffect (() => {
        
      }, [])

    //const {city, zipcode, street} = author.address;
    //const city = author['address']['city'];
    
  return (
    <div className="author">
       <label>Author name</label>
       <label>Address</label>
       <h6>{name}</h6>
       <h6>{address?.city}, {address?.zipcode}, {address?.street}</h6>
      
    </div>
  )
}

export default Author