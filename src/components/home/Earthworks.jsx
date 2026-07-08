import React from "react";
import Icon from "../common/Icon";

const Earthworks = () => {
  return (
    <section className="px-4 lg:pt-37 sm:pb-20 md:pt-25 sm:pt-20 py-10">
      <div className="max-w-285 mx-auto">
        <div className="lg:flex max-lg:hidden flex-row w-full">
          <div className="lg:bg-[url('/assets/image/webp/earthworking.webp')] overflow-hidden lg:[clip-path:polygon(0_0,100%_0,75%_100%,0_100%)] bg-no-repeat bg-center bg-cover w-full max-w-[635.1px] min-h-[627.1px]">
            <div className="bg-white/80 pl-12.5 hover:bg-black/50 flex items-end duration-300 pb-12.5 group w-full h-full">
              <div className="max-w-97.5 group-hover:opacity-100 opacity-0  z-20 pt-94 ">
                <h1 className="font-bold text-2xl leading-[117%]  text-white">
                  Grondwerken Pieters – Precision Earthworks & Excavations
                </h1>
                <p className=" text-[15px] font-normal leading-[147%] mt-3 text-white">
                  {" "}
                  Building Foundations, Moving Futures.
                </p>

                <button className="bg-orange text-white group hover:text-orange hover:bg-white   transition-all duration-300 mt-6 flex flex-row gap-3  rounded-md group  px-5 py-3 text-[18px] leading-[122%] font-semibold cursor-pointer">
                  Explore Groundwork
                  <Icon
                    icon={"toparrow"}
                    className={
                      "sm:w-4 sm:h-4 w-3 h-3 group-hover:text-current "
                    }
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[url('/assets/image/webp/earthwoork1.webp')] lg:-ml-33 w-full bg-no-repeat bg-center bg-cover overflow-hidden lg:[clip-path:polygon(24.29%_0,100%_0,100%_100%,0_100%)] max-w-[635.1px] min-h-[627.1px]">
            <div className="bg-white/80 hover:bg-black/50 pr-12.5 flex items-end  justify-end duration-300 pb-12.5 group w-full h-full">
              <div className="max-w-97.5 group-hover:opacity-100 opacity-0  z-20 pt-94 justify-items-end text-right">
                <h1 className="font-bold text-2xl leading-[117%]  text-white">
                  Grondwerken Pieters – Precision Earthworks & Excavations
                </h1>
                <p className=" text-[15px] font-normal leading-[147%] mt-3 text-white">
                  {" "}
                  Building Foundations, Moving Futures.
                </p>

                <button className="bg-orange text-white group hover:text-orange hover:bg-white transition-all duration-300 mt-6 flex flex-row gap-3  rounded-md group px-5 py-3 text-[18px] leading-[122%] font-semibold cursor-pointer">
                  Explore Groundwork
                  <Icon
                    icon={"toparrow"}
                    className={
                      "sm:w-4 sm:h-4 w-3 h-3 group-hover:text-current "
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col w-full gap-y-10 max-w-285">
          <div className="bg-[url('/assets/image/webp/truck.webp')] bg-no-repeat bg-center bg-cover max-w-285 w-full min-h-[427.1px] sm:min-h-[627.1px]">
            <div className="bg-white/80 sm:pl-12.5 pl-4 hover:bg-black/50 flex items-end duration-300 pb-12.5 group  w-full min-h-[427.1px] sm:min-h-[627.1px]">
              <div className="hidden group-hover:flex flex-col">
                <h2 className="text-2xl leading-7 text-white font-bold max-w-100">
                  Grondwerken Pieters – Precision Earthworks &amp; Excavations
                </h2>
                <p className="text-white text-15 leading-5.5 mt-3 font-normal">
                  Building Foundations, Moving Futures.
                </p>
                <button className="bg-orange text-white group hover:text-orange hover:bg-white transition-all duration-300  mt-6 flex flex-row gap-3 max-w-max  rounded-md group  px-5 py-3 text-[18px] leading-[100%] font-semibold cursor-pointer">
                  Explore Groundwork
                  <Icon
                    icon={"toparrow"}
                    className={
                      "sm:w-4 sm:h-4 w-3 h-3 group-hover:text-current"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="bg-[url('/assets/image/webp/jcb.webp')] w-full bg-no-repeat max-w-285 bg-center bg-cover min-h-[427.1px] sm:min-h-[627.1px]">
            <div class="bg-white/80 hover:bg-black/50 sm:pl-12.5 pl-4 flex items-end  duration-300 pb-12.5 group w-full min-h-[427.1px] sm:min-h-[627.1px] ">
              <div className="hidden group-hover:flex flex-col">
                <h2 className="text-2xl leading-7 text-white font-bold max-w-100">
                  Grondwerken Pieters – Precision Earthworks &amp; Excavations
                </h2>
                <p className="text-white text-15 leading-5.5 mt-3 font-normal">
                  Building Foundations, Moving Futures.
                </p>
                <button className="bg-orange text-white group hover:text-orange hover:bg-white transition-all duration-300  mt-6 flex flex-row gap-3 max-w-max  rounded-md group  px-5 py-3 text-[18px] leading-[100%] font-semibold cursor-pointer">
                  Explore Groundwork
                  <Icon
                    icon={"toparrow"}
                    className={
                      "sm:w-4 sm:h-4 w-3 h-3 group-hover:text-current"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earthworks;
