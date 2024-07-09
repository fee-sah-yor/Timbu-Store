import React from 'react'

const Sorting = () => {
  return (
    <>
     {/* ============filter and sorting section================ */}
     <article className='flex items-center justify-center mt-5 gap-9'>
        {/* ================sort by============ */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="inline-flex items-center px-5 py-3 text-lg font-medium text-center text-gray-500 rounded-lg bg-gray-50 hover:bg-gray-300 focus:outline-none">
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
              Item 1
            </li>
            <li>
              Item 2
            </li>
          </ul>
        </div>
        {/* ==========filter================== */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="inline-flex items-center px-5 py-3 text-lg font-medium text-center text-gray-500 rounded-lg bg-gray-50 hover:bg-gray-300 focus:outline-none">
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
              Item 1
            </li>
            <li>
              Item 2
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

export default Sorting