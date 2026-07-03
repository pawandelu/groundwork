import React from "react";
import Heading from "../common/Heading";

const Gallery = () => {
  return (
    <section className="px-4 lg:py-25 md:py-20 sm:py-15 py-10 relative">
      <div className=" absolute w-82 h-78 top-0 right-0 bg-orange -z-10 max-sm:hidden">

      </div>
      <div className="max-w-285 w-full overflow-hidden  mx-auto ">
        <div className="flex flex-row items-center gap-4 mb-8">
          <div className="w-7.5 border-2 border-orange"></div>
          <Heading heading={"Our Gallery"} vari={"Primary"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[290px_496px_290px] md:gap-8 sm:gap-4 gap-2">
          <div className="lg:row-span-2">
            <img
              src="/assets/image/webp/row1-1.webp"
              alt="Gallery 1"
              className="w-full h-80 object-cover "
            />
          </div>

          <div className="lg:row-span-3">
            <img
              src="/assets/image/webp/row1-2.webp"
              alt="Gallery 2"
              className="w-full h-101.75 object-cover "
            />
          </div>

          <div className="lg:row-span-2">
            <img
              src="/assets/image/webp/row1-3.webp"
              alt="Gallery 3"
              className="w-full h-62.5 object-cover "
            />
          </div>

          <div className="lg:row-span-4 lg:row-start-3">
            <img
              src="/assets/image/webp/row2-1.webp"
              alt="Gallery 4"
              className="w-full h-101.75 object-cover "
            />
          </div>

          <div className="lg:col-start-2 lg:row-span-3 lg:row-start-4">
            <img
              src="/assets/image/webp/row2-2.webp"
              alt="Gallery 5"
              className="w-full h-80 object-cover "
            />
          </div>

          <div className="lg:col-start-3 lg:row-span-4 lg:row-start-3">
            <img
              src="/assets/image/webp/row2-3.webp"
              alt="Gallery 6"
              className="w-full h-119.25 object-cover lg:-mt-17"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
