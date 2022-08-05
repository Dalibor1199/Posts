
import React, { useEffect, useState } from 'react'

const Author = ({name, address}) => {
    
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