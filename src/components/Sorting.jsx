import React from 'react'

const Sorting = () => {
  return (
    <>
     {/* ============filter and sorting section================ */}
     <article>
        {/* ================sort by============ */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-black bg-gray-50 hover:bg-gray-300  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Sort By
            <svg
              class="w-3 h-3 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content text-gray-700 menu bg-gray-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* ==========filter================== */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-black bg-gray-50 hover:bg-gray-300  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Filter
            <svg
              class="w-3 h-3 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content text-gray-700 menu bg-gray-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default Sorting