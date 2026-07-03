import React from "react";
import Heading from "../common/Heading";

const Swiper = () => {
  return (
    <section className="bg-dark-black w-full lg:pt-70.5 sm:pt-60  max-sm:pt-10 px-4">
      <div className="bg-[url('/assets/image/webp/swiper-bg.webp')] lg:pt-25  min-h-118 bg-no-repeat -ml-4 px-4  bg-left  bg-contain">
        <div className=" max-w-285  mx-auto flex lg:flex-row flex-col justify-between items-center ">
          <div className="max-w-200 ">
            <div className="flex flex-row items-center gap-4">
              <div className="w-7.5 border-2 border-orange"></div>
              <Heading heading={"What Our Clients Says"} vari={"Primary"} />
            </div>
            <p className="font-normal lg:text-[18px] md:text-[16px] sm:text-[14px] text-12px leading-[145%] lg:mt-12 md:mt-10 sm:mt-6 mt-3 text-white">
              I am very satisfied with the services. Their team is very
              professional and efficient in completing our project on time and
              at a very affordable cost. The quality of their work is very good
              and I highly recommend this company for any construction project.
            </p>
            <div className=" lg:mt-12 md:mt-10 mt-6">
              <Heading heading={"Tom DeLonge"} vari={"Denary"} />
              <p className="font-normal text-[16px] leading-[118%] mt-3 text-white">
                CEO, Lexmark
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center max-lg:my-10">
            <div>
              <img
                className="rounded-full w-12.5 h-12.5 object-cover object-center"
                src="/assets/image/webp/indian.webp"
                alt=""
              />
            </div>
            <div className="border-4 p-1.5 border-orange rounded-full">
              <img
                className="rounded-full w-17.5 h-17.5 object-cover object-center"
                src="/assets/image/webp/coriaman.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-full w-12.5 h-12.5 object-cover object-center"
                src="/assets/image/webp/blackman.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swiper;
