import React from "react";
import Navbar from "../common/Navbar";
import Icon from "../common/Icon";

const Head = () => {
  return (
    <section className="bg-[url('/assets/image/webp/head-bg.webp')] lg:min-h-187.5 md:h-170 h-120 bg-cover bg-center ">
      <Navbar />
      <div className="max-w-293 mx-auto px-4">
        <div className="max-w-151.75  lg:mt-55.5 md:mt-50 sm:mt-45  mt-30">
          <h1 className="font-bold lg:text-5xl md:text-4xl text-3xl text-white leading-[90%]">
            Grondwerken Pieters
          </h1>
          <p className="font-normal lg:text-[28px] md:text-2xl text-[18px]   text-white leading-[121%] mt-4">
            Your Trusted Partner in Earthworks and Excavations
          </p>
          <button className="md:px-6 group bg-orange text-white hover:bg-white hover:text-orange md:py-4 sm:px-4  sm:py-2 px-3 py-1 leading-[123%]  md:text-[18px] sm:text-[16px] text-[14px]  cursor-pointer duration-300 transition-all font-semibold  flex flex-row sm:gap-4 gap-1.5 items-center rounded-md mt-6 ">
            Explore Groundwerken
            <Icon
              icon={"brightarrow"}
              className={
                "sm:w-4 sm:h-4 w-3 h-3 group-hover:text-current"
              }
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Head;
