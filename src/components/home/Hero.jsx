import React from "react";
import Heading from "../common/Heading";

const Hero = () => {
  return (
    <section className="bg-white min-h-13 lg:pt-19.75 md:pt-15 sm:pt-12 pt-5 px-4 w-full md:h-132 sm:h-109 bg-[url('/assets/image/webp/hero-bg.webp')] bg-no-repeat bg-right bg-contain">
      <div className="max-w-285 mx-auto flex sm:flex-row flex-col max-sm:items-center justify-between relative">
        <div className="max-w-184.25 ">
          <div className="flex flex-row items-center gap-4">
            <div className="w-7.5 border-2 border-orange"></div>
            <Heading heading={"Our Success Stories"} vari={"Primary"} />
          </div>
          <p className="text-dark-black font-medium lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] leading-[145%] md:mt-6 sm:mt-5 mt-2  ">
            At Grondwerken Pieters, we take pride in the projects we have
            completed. Each project, big or small, reflects our commitment to
            quality & customer satisfaction. Below is a selection of our recent
            works
          </p>
        </div>
        <img
          className="lg:w-[301.84px] lg:h-112.25 md:w-70 max-lg:mt-17 md:h-100 sm:w-50 max-md:mt-17.25 sm:h-80 max-sm:mt-6 w-49 h-70"
          src="/assets/image/webp/success.webp"
          alt=""
        />
        <img
          className=" absolute lg:w-85 md:w-70 lg:h-110 md:h-90 sm:w-60 top-49 w-50 sm:h-80 h-70 max-sm:hidden "
          src="/assets/image/webp/hero-1.webp"
          alt=""
        />
        <img
          className=" absolute lg:w-85 md:w-70 lg:h-110 md:h-90 sm:w-60 lg:top-62 md:top-65 sm:top-70 w-50 sm:h-80 h-70 lg:left-[388.67px] md:left-85 sm:left-70 max-sm:hidden "
          src="/assets/image/webp/hero-2.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
