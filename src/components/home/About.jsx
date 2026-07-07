import React from "react";

const About = () => {
  return (
    <section className="bg-orange relative  h-auto lg:pt-24.75 md:pt-20 sm:pt-18 pt-10  w-full  bg-[url('/assets/image/png/about-bg.png')] bg-no-repeat bg-left bg-contain">
      <div className="max-w-291 mx-auto px-4 flex lg:flex-row justify-between max-lg:items-center flex-col">
        <div>
          <div className="max-w-135 ">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-7.5 border-2 h-0  border-black"></div>
              <h2 className="font-bold text-[32px] text-dark-black leading-[135%]">
                About Us
              </h2>
            </div>
            <h1 className="font-bold text-[40px] text-white mt-6 leading-[120%]">
              Over 10 Years of Experience in Earthworks
            </h1>
          </div>

          <img
            className="w-111.25  h-79 mt-6.75 object-center object-cover"
            src="/assets/image/webp/about1.webp"
            alt=""
          />
        </div>

        <div className=" flex flex-col max-lg:mt-10">
          <div className="max-w-135">
            <p className="text-white font-medium text-[18px] leading-[145%]">
              Grondwerken Pieters is a family-owned business, passionately run
              by the Pieters family. We strive to deliver the best results for
              our clients, with a strong focus on quality and a personal
              approach. Our modern fleet of trucks and machines allows us to
              carry out every job, big or small, efficiently & professionally.
              Our dedicated team of skilled workers is always ready to complete
              your project with care and precision, with your satisfaction being
              our top priority.
            </p>
          </div>
          <img
            className="xl:w-172.5 w-140  object-center object-cover h-66.5 mt-8 lg:absolute lg:right-0 lg:bottom-0 "
            src="/assets/image/webp/about2.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
