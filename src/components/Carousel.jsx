import React from 'react'

const Carousel = () => {
  return (
    <>
    <section className='flex items-center justify-center mt-6'>
       {/* =============carousel banner==================== */}
       <div className="w-1/2 h-[47vh] object-top object-cover carousel">
  <div id="slide1" className="relative w-full carousel-item">
    <img
      src="/images/13.3.jpg"
      className="w-full "alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3"  className="text-xl font-light text-white bg-gray-500 border-none btn btn-circle">❮</a>
      <a href="#slide2"  className="text-xl font-light text-white bg-gray-500 border-none btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="relative w-full carousel-item">
    <img
      src="/images/13.2.jpg"
      className="w-full" alt='' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="text-xl font-light text-white bg-gray-500 border-none btn btn-circle">❮</a>
      <a href="#slide3"  className="text-xl font-light text-white bg-gray-500 border-none btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="relative w-full carousel-item">
    <img
      src="/images/13.1.jpg"
      className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2"  className="text-xl font-light text-white bg-gray-500 border-none btn btn-circle">❮</a>
      <a href="#slide1"  className="text-xl font-light text-white bg-gray-500 border-none btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </section>
    </>
  )
}

export default Carousel