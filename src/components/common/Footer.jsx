import React from "react";
import Icon from "./Icon";
import { QUICK_LINKS } from "../../utils/helper";

const Footer = () => {
  return (
    <section className="pt-11.5 bg-dark-black flex flex-col justify-center px-4">
      <div className="max-w-285 w-full mx-auto flex sm:flex-row flex-col min-[900px]:items-center justify-between">
        <div className="max-w-91.75 w-full flex flex-col">
          <img
            src="/assets/image/webp/logo-black.webp"
            className="w-[187.87px] h-10"
            alt="logo"
          />

          <p className="font-normal text-[16px] leading-[162.5%] text-white mt-6">
            Grondwerken Pieters – Your reliable partner for all your earthworks
            and infrastructure projects.
          </p>

          <div className="flex items-center gap-6 mt-10.5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className=" hover:scale-120 transition-transform duration-300"
            >
              <Icon icon={"facebook"} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className=" hover:scale-120 transition-transform duration-300"
            >
              <Icon icon={"twitter"} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className=" hover:scale-120 transition-transform duration-300"
            >
              <Icon icon={"linkedin"} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className=" hover:scale-120 transition-transform duration-300"
            >
              <Icon icon={"instagram"} />
            </a>
          </div>
        </div>

        <div className="flex min-[900px]:flex-row flex-col md:gap-20 sm:gap-10 gap-8 max-sm:mt-5">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl leading-[100%] text-orange">
              Quick Links
            </h2>

            <ul className="space-y-4">
              {QUICK_LINKS.map((item, index) => (
                <li key={index} className="max-w-max leading-[100%]">
                  <a
                    href={item.link}
                    className="font-normal text-[16px]  text-white hover:text-orange transition-all duration-500"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-bold text-2xl leading-[100%] text-orange">
              Contact Info
            </h2>

            <div className="flex items-center gap-4 mt-4">
              <Icon icon={"phone"} />
              <p className="font-normal text-[15px] leading-[120%] text-white">
                +1 234 567890
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Icon icon={"mail"} />
              <p className="font-normal text-[15px] leading-[120%] text-white">
                mail@pietersbvgrondwerken.com
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <Icon icon={"location"} />
              <p className="font-normal text-[15px] leading-[120%] text-white">
                West Avenue, Square Park Finland
              </p>
            </div>

            <div className="flex items-center gap-4.5 mt-4">
              <Icon icon={"clock"} />
              <div>
                <p className="font-normal text-[15px] leading-[120%] text-white">
                  Monday - Friday
                </p>
                <span className="font-normal text-[15px] leading-[120%] text-white">
                  09:00 AM - 06:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-dark-charcoal mt-11.5 mb-8"></div>
      <span className="font-normal text-[18px] leading-[144.44%] text-white text-center mb-8">
        © 2025 Grondwerken Pieters. All rights reserved.
      </span>
    </section>
  );
};

export default Footer;
