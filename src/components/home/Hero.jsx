import React from "react";
import Heading from "../common/Heading";
import Icon from "../common/Icon";

const Hero = () => {
  return (
    <section className="bg-white min-h-13 lg:pt-19.75 md:pt-15 sm:pt-12 pt-5 px-4 w-full md:h-132 sm:h-109 bg-[url('/assets/image/webp/hero-bg.webp')] bg-no-repeat bg-right bg-contain lg:mt-25 md:mt-20 sm:mt-15 mt-10 ">
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
        {/* img  */}
        <div className="group rounded-md lg:pt-50.75  pt-31 absolute bg-[url('/assets/image/webp/hero-1.webp')] p-8 bg-cover bg-center lg:w-85 md:w-70 lg:h-110 md:h-90 sm:w-60 top-49 w-50 sm:h-80 h-70 max-sm:hidden">
          <div className="opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <Heading
              heading={"Excavation for Residential Home"}
              vari={"Secondary"}
            />
            <p className="font-medium lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] leading-[119%] mt-3 text-white">
              For this project, we ensured a precise & safe excavation in a
              built-up area. Thanks to our efficient ...
            </p>
            <button className="group lg:px-5 md:py-2 md:px-4 rounded-md bg-orange hover:text-orange leading-[150%] hover:bg-white transition-all duration-300 mt-6 text-[18px] font-semibold text-white flex gap-2 items-center cursor-pointer">
              Explore
              <Icon icon={"toparrow"} />
            </button>
          </div>
        </div>

        {/* img2 */}
        <div className="group rounded-md lg:pt-50.75  pt-31 bg-[url('/assets/image/webp/hero-2.webp')] p-8 bg-cover bg-center absolute lg:w-85 md:w-70 lg:h-110 md:h-90 sm:w-60 lg:top-62 md:top-65 sm:top-70 w-50 sm:h-80 h-70 lg:left-[388.67px] md:left-85 sm:left-70 max-sm:hidden ">
          <div className="opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <Heading
              heading={"Excavation for Residential Home"}
              vari={"Secondary"}
            />
            <p className="font-medium lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] leading-[119%] mt-3 text-white">
              For this project, we ensured a precise & safe excavation in a
              built-up area. Thanks to our efficient ...
            </p>
            <button className="group lg:px-5 md:py-2 md:px-4 rounded-md bg-orange hover:text-orange leading-[150%] hover:bg-white transition-all duration-300 mt-6 text-[18px] font-semibold text-white flex gap-2 items-center cursor-pointer">
              Explore
              <Icon icon={"toparrow"} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
