import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PostList } from "./PostList";


function App() {

  return (
    <div>
      <div className="start">
        <h1>Posts</h1>
      </div>
      <PostList/>
    </div>
  )

}

export default App;
