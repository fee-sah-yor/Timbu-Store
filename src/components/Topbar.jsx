import React from "react";
import { CiSettings } from "react-icons/ci";
import { PiQuestion } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { category } from "../data/Categories";

const Topbar = () => {
  return (
    <section className="flex items-center justify-around">
      
      <div className="flex flex-col items-center justify-between gap-7">
        {/* ========LOGO IMAGE=========== */}
        <div className="max-[768px]:hidden flex items-center justify-center w-full">
          <img
            src="/images/TIMBU.svg"
            alt="store logo"
            className="w-[9%] h-full"
          />
        </div>

        {/* =====Search bar/avatar section========== */}

        {/* ======mobile screen menu===== */}
        <div className="flex items-center justify-center min-[766px]:hidden">
          <FiSearch className="text-2xl font-bold text-gray-700" />
          <div className="flex items-center justify-center mx-[12]">
            <img src="/images/TIMBU.svg" alt="store logo" />
          </div>
          <img src="/images/Cart.svg" alt="" />
          <button>
            <RxHamburgerMenu className="ml-6 text-2xl font-bold text-gray-700" />
          </button>
        </div>

        {/* ==============large screen menu============== */}
        <div className="flex items-center justify-around max-[768px]:hidden gap-4 ml-44">
          <CiSettings className="text-5xl text-gray-800" />
          <PiQuestion className="text-5xl text-gray-800" />

          <div className="w-[43rem] h-[4rem] border rounded-lg flex items-center bg-gray-100">
            <i className="pl-6 pr-7">
              <svg
                width={26}
                height={24}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19.5l-4.35-4.35M17 9.5a8 8 0 11-16 0 8 8 0 0116 0z"
                  stroke="#98A2B3"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>

            <input
              className="pr-4 text-xl font-medium bg-gray-100 border-none outline-none size-full"
              type="text"
              placeholder="Search for anything"
            />
          </div>

          <IoMdHeartEmpty className="text-5xl text-gray-800 " />
          <img
            src="/images/Cart.svg"
            alt=""
            className=" w-[4.25%] text-gray-800"
          />
          
          {/* ==========avatar section============= */}
      <div class="flex items-center justify-end gap-4 w-[21%]">
        <img class="w-14 h-14 rounded-full" src="/images/avatar.svg" alt="" />
        <div class="font-semibold text-xl text-gray-800">
          <div className="font-lg">Olivia Rhye</div>
        </div>
      </div>
        </div>

        {/* =========badges============ */}
        <article>
          <div>
            {category.map((values, index) => (
              <span
                key={index}
                class="active:bg-gray-600 active:text-white bg-gray-100 text-gray-500 text-xl font-normal me-2 px-7 py-2 mx-5 rounded-lg"
              >
                {values.name}
              </span>
            ))}
          </div>
        </article>
      </div>

    
    </section>
  );
};

export default Topbar;
