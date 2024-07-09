import React from "react";

const DashboardGallery = () => {
  const galleryData = [
    {
      image: "/images/9.1.jpg",
      amount: "₤100.99",
      title: "Stainless Steel Frying Pan",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/10.1.jpg",
      amount: "₤220.50",
      title: "Gourmet Kiru Knife Set",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/4.1.webp",
      amount: "₤300.00",
      title: "Stand Mixer",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/11.1.jpg",
      amount: "₤70.00",
      title: "Rochell Highball Glasses",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/6.1.webp",
      amount: "₤10.00",
      title: "Clear Recycled Plastic Tumblr",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/7.2.webp",
      amount: "₤36.00",
      title: "Granite Non-Stick Griddle Pan",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/8.2.webp",
      amount: "₤40.00",
      title: "Granite Shallow Caserrole Dish & Lid",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/12.2.jpg",
      amount: "₤35",
      title: "Pasta Maker",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
    {
      image: "/images/9.2.jpg",
      amount: "₤100.99",
      title: "Pasta Maker",
      icon: "/images/Button.svg",
      text: "Quick add",
    },
  ];
  return (
    <>
      <section>
        {/* ========picture gallery============= */}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-7">
          {galleryData.map((info, index) => (
            <div key={index} className="text-black">
              <img
                class="h-auto max-w-full rounded-lg"
                src={info.image}
                alt="image"
              />
              <div className="flex items-center justify-between font-medium">
                <div>
                  <h2 className="font-extrabold">{info.amount}</h2>
                  <p className="text-lg">{info.title}</p>
                </div>
                <div className="flex flex-col items-center justify-between gap-1">
                  <img src={info.icon} alt="add button" className="w-14 h-14" />
                  <p className="text-cenetr">{info.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========pagination=========== */}
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">8</button>
          <button className="join-item btn">9</button>
          <button className="join-item btn">10</button>
        </div>
      </section>
    </>
  );
};

export default DashboardGallery;
