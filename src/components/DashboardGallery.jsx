import React from "react";
import { galleryData } from "../data/GalleryData";
import { useNavigate } from "react-router-dom";

const DashboardGallery = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/Product page");
  }
  return (
    <>
      <section className="px-20 mx-10 mt-16">
        {/* ========picture gallery============= */}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-24">
          {galleryData.map((info, index) => (
            <div key={index} className="text-black">
              <img
                class="h-[27vh] object-cover w-full max-w-full rounded-lg"
                src={info.image}
                alt=""
              />
              <div className="flex items-center justify-between font-medium">
                <div>
                  <h2 className="font-extrabold">{info.amount}</h2>
                  <p className="text-lg">{info.title}</p>
                </div>
                <div className="flex flex-col items-center justify-between gap-1 cursor-pointer" onClick={handleClick}>
                  <img src={info.icon} alt="add button" className="w-14 h-14"/>
                  <p className="text-cenetr">{info.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========pagination=========== */}
        <div className="flex items-center justify-center mt-5 space-x-6 text-lg bg-gray-100 join">
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">1</button>
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">2</button>
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">3</button>
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">...</button>
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">8</button>
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">9</button>
          <button className="text-lg text-gray-500 bg-gray-100 border-none join-item active:text-gray-800 btn">10</button>
        </div>
      </section>
    </>
  );
};

export default DashboardGallery;
