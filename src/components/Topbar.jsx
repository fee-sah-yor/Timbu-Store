import React from "react";
import { CiSettings } from "react-icons/ci";
import { PiQuestion } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Topbar = () => {
  return (
    <section>
      {/* ========LOGO IMAGE=========== */}
      <div className="flex items-center justify-center max-md:hidden">
        <img src="/images/TIMBU.svg" alt="store logo" />
      </div>

      {/* =====Search bar/avatar section========== */}
      {/* ======mobile screen menu============== */}
      <div className="flex items-center justify-center">

      <FiSearch className="text-2xl font-bold text-gray-700"/>
      <div className="flex items-center justify-center mx-[12]">
        <img src="/images/TIMBU.svg" alt="store logo" />
      </div>
      <img src="/images/Cart.svg" alt="" />
      <button>
      <RxHamburgerMenu className="ml-6 text-2xl font-bold text-gray-700"/>
      </button>

      </div>

{/* ==============large screen menu============== */}
      <div className="flex items-center justify-between max-md:hidden">
        {/* =======Search bar========== */}
        <div className="flex align-items justify-evenly ">
          <CiSettings />
          <PiQuestion />

          <div>
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-2 ps-10 text-sm text-gray-700 rounded-lg bg-gray-100 outline-none"
                  placeholder="Search for anything"
                  required
                />
              </div>
            </form>
          </div>

          <IoMdHeartEmpty />
          <PiShoppingCart />
        </div>
        {/* ==========avatar section============= */}
        <div class="flex items-center gap-4">
          <img class="w-10 h-10 rounded-full" src="/images/avatar.svg" alt="" />
          <div class="font-medium">
            <div>Olivia Rhye</div>
          </div>
        </div>
      </div>

      {/* =========badges============ */}
      <article>
        <div>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            All
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            Pots
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            Plates
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            Cups
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            Cutlery
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            Gadgets
          </span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-500">
            Sets
          </span>
        </div>
      </article>
    </section>
  );
};

export default Topbar;
