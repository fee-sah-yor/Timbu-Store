import React from "react";
import { reviewsData, suggestionData } from "../data/ProductData";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Checkout page");
  };
  
  return (
    <section className="flex flex-col items-center justify-center w-full space-y-10 px-28 mt-9">
      {/* =====product carousel==== */}
      <div className="w-[87%] carousel">
        <div className="carousel-item">
          <img
            src="/images/9.1.jpg"
            alt=""
            className="h-[47vh] w-full object-contain "
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/9.2.jpg"
            alt=""
            className="h-[47vh] w-full object-contain "
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/9.3.jpg"
            alt=""
            className="h-[47vh] w-full object-contain "
          />
        </div>
      </div>

      {/* =====product name/price===== */}
      <div className="w-full space-y-10 text-black">
        <h2 className="text-3xl font-bold">₤100.99</h2>
        <p className="text-2xl font-normal">Stainless Steel Frying Pan</p>
      </div>

      {/* ======attributes/add to cart========== */}
      <div className="flex items-center justify-between w-full gap-3">
        <div className="rating">
          <input
            type="radio"
            name="rating-1"
            className="bg-black mask mask-star"
          />
          <input
            type="radio"
            name="rating-1"
            className="bg-black mask mask-star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-1"
            className="bg-black mask mask-star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-1"
            className="bg-black border mask mask-star"
          />
          <input
            type="radio"
            name="rating-1"
            className="bg-black mask mask-star"
          />
        </div>

        <div className="ml-28 dropdown">
          <div
            tabIndex={0}
            role="button"
            className="inline-flex items-center px-5 py-3 text-lg font-medium text-center text-gray-500 rounded-lg bg-gray-50 hover:bg-gray-300 focus:outline-none"
          >
            Color
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
            <li>Gray</li>
            <li>Black</li>
            <li>Red</li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="inline-flex items-center px-5 py-3 text-lg font-medium text-center text-gray-500 rounded-lg bg-gray-50 hover:bg-gray-300 focus:outline-none"
          >
            Quantity
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
            <li>Big</li>
            <li>Large</li>
            <li>Small</li>
          </ul>
        </div>

        {/* =====add to cart======= */}
        <button
          type="button"
          class="text-white bg-purple-900 hover:bg-purple-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-28 py-2.5 text-center inline-flex items-center me-2"
          onClick={handleClick}
        >
          Add to cart
        </button>
      </div>

      {/* ======product description======= */}
      <div className="text-black space-y-9">
        <h2 className="text-xl font-bold">Product Details</h2>
        <p className="text-xl font-normal">
          Professional Stainless Steel Frying Pan <br /> <br />
          28cm <br /> <br />
          The ProCook Professional Stainless Steel 28cm frying pan is a perfect
          pan for all your frying tasks. Featuring our 5 Star Plus triple layer,
          PFAS-free non-stick ceramic coating, you can cook with little oil
          without the risk of sticking or burning.
        </p>
      </div>

      {/* ===========policy====== */}
      <div className="w-full space-y-8">
        <hr />
        <h2 className="text-xl font-bold text-black">Return Policy</h2>
        <hr />
      </div>

      {/* ======suggestions========== */}
      <div className="text-black">
        <h2 className="text-lg font-medium">More from TIMBU</h2>
        {/* =======cards======== */}
        <div className="flex w-[80vw] overflow-x-auto">
          {suggestionData.map((info, index) => (
            <div key={index} className="w-[100%] mx-1 bg-gray-200 card">
              <figure className="px-3 pt-6">
                <img src={info.image} alt="" className="w-[800px]" />
              </figure>
              <div className="px-6 pt-2 pb-6 items-left">
                <div className="w-full text-black">
                  <p className="text-xs font-bold">{info.amount}</p>
                  <p className="text-xs font-normal">{info.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =======reviews=========== */}
      <div class="w-full p-4 bg-white  rounded-lg  sm:p-8">
        {/* =====headings====== */}
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-lg font-bold leading-none text-black">
            Reviews 2.9/5 (3)
          </h5>
          <a
            href="#"
            class="text-sm font-medium text-black underline hover:underline"
          >
            View all
          </a>
        </div>
        {/* ========comments====== */}
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-300 text-black ">
            {reviewsData.map((info, index) => (
              <li key={index} class="py-3 sm:py-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="w-20 h-20 rounded-xl" src={info.image} alt="" />
                  </div>
                  <div class="flex-1 min-w-0 ms-4">
                    <p class="text-xl font-normal truncate ">{info.review}</p>
                    <p class="text-md font-normal truncate ">
                      {info.commentOne}
                    </p>
                    <p class="text-md font-normal truncate ">
                      {info.commentTwo}
                    </p>
                  </div>
                  <div class="inline-flex items-center text-md font-normal">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-1"
                        className="bg-red-600 mask mask-star"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="bg-red-600 mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="bg-red-600 mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="bg-gray-600 mask mask-star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="bg-gray-600 mask mask-star"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
