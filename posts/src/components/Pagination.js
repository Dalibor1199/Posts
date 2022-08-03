import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((num) => (
          <li>
            <a onClick={() => paginate(num)}  href="#">{num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
