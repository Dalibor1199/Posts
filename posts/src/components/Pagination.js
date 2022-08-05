import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

  const totalPages = Math.ceil(totalPosts/postsPerPage);

  return (
    <div className="paginate">
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <a
              className="btn btn-light"
              onClick={() => paginate(currentPage - 1)}
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </a>
          </li>
        )}
        {currentPage > 2 && (
          <li className="page-item">
            <a
              className="btn btn-light"
              onClick={() => paginate(currentPage - 2)}
              href="#"
            >
              {currentPage - 2}{" "}
            </a>
          </li>
        )}
        {currentPage > 1 && (
          <li className="page-item">
            <a
              className="btn btn-light"
              onClick={() => paginate(currentPage - 1)}
              href="#"
            >
              {currentPage - 1}
            </a>
          </li>
        )}
        {currentPage<totalPages &&
        <li className="page-item">
          <a
            className="btn btn-light"
            onClick={() => paginate(currentPage)}
            href="#"
          >
            {currentPage}
          </a>
        </li>
        }
        {currentPage < (totalPages - 1) && (
          <li className="page-item">
            <a
              className="btn btn-light"
              onClick={() => paginate(currentPage + 1)}
              href="#"
            >
              {currentPage + 1}
            </a>
          </li>
        )}
        {currentPage < (totalPages - 2) && (
          <li className="page-item">
            <a
              className="btn btn-light"
              onClick={() => paginate(currentPage + 2)}
              href="#"
            >
              {currentPage + 2}
            </a>
          </li>
        )}
        {totalPages>1 &&
        <li className="page-item">
          <a className="btn btn-light">...</a>
        </li>
        }
        <li className="page-item">
          <a
            className="btn btn-light"
            onClick={() => paginate(totalPages)}
            href="#"
          >
            {totalPages}
          </a>
        </li>

        {currentPage < totalPages && (
          <li>
            <a
              className="btn btn-light"
              onClick={() => paginate(currentPage + 1)}
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>{" "}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
