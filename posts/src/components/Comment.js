
import React from 'react'

const Comment = ({name, body}) => {

  return (
    <div className='comment'>
        <h4>{name}</h4>
        <p>{body}</p>
    </div>
  )
}

export default Comment