import React, { useState } from "react";
import Heading from "../common/Heading";
import { CLIENTS } from "../../utils/helper";

const Swiper = () => {

  const [activeIndex, setActiveIndex] = useState(1);
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
              {CLIENTS[activeIndex].review}
            </p>
            <div className=" lg:mt-12 md:mt-10 mt-6">
              <Heading heading={CLIENTS[activeIndex].name} vari={"Denary"} />
              <p className="font-normal text-[16px] leading-[118%] mt-3 text-white">
                {CLIENTS[activeIndex].role}
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col flex-row gap-6 justify-center items-center max-lg:my-10 ">

            {CLIENTS.map((item, index) => (

              <div key={index} onClick={() => setActiveIndex(index)} className={` relative rounded-full cursor-pointer transition-all duration-500 ${activeIndex === index ? "border-4 p-1.5 border-orange" : ""}`}>
                <img src={item.image} alt={item.name} className={`rounded-full object-cover object-center transition-all duration-500 ${activeIndex === index ? "w-17.5 h-17.5 " : "w-12.5 h-12.5"}`} />
                {activeIndex !== index && (
                  <div className="absolute inset-0 rounded-full bg-black/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swiper;
