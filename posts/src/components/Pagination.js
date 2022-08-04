import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="paginate">
      <ul className="pagination">
      {currentPage>1 &&
        <li>
          <a className="btn btn-light" onClick={() => paginate(currentPage-1)} href="#">
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
          </a>
        </li>
      }
        {pageNumbers.map((num) => (
          <li className="page-item">
            <a className="btn btn-light" onClick={() => paginate(num)} href="#">
              {num}
            </a>
          </li>
        ))}
        {currentPage<Math.ceil(totalPosts/postsPerPage) &&
        <li>
          <a className="btn btn-light" onClick={() => paginate(currentPage+1)} href="#" >
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
          </a>
        </li>
        }
      </ul>
    </div>
  );
};

export default Pagination;
