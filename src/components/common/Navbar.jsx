import { NAVBAR_LIST } from "../../utils/helper";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "./Icon";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const path = useLocation().pathname;

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);
  return (
    <header className="px-3 lg:py-[40.5px] md:py-8 sm:py-7 py-4 bg-nav-bg  ">
      <nav className="max-w-285 w-full mx-auto flex flex-row items-center justify-between">
        <a href="#">
          <img
            src="/assets/image/webp/logo-black.webp"
            className="sm:w-[187.87px] w-40 sm:h-10 h-8 cursor-pointer"
            alt="pupilo"
          />
        </a >

        <div className="nav flex items-center justify-center gap-12">
          <ul
            className={`flex items-center justify-center gap-8 lg:flex-row flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:bg-light-gray max-lg:flex max-lg:items-center max-lg:justify-center transition-all duration-500 z-500 ${nav ? "max-lg:left-0" : "max-lg:-left-full"}`}
          >
            {NAVBAR_LIST.map((item, index) => (
              <a href="#" to={item.link} key={index} onClick={() => setNav(false)}>
                <li
                  className={`links font-normal links text-[16px] leading-[119%] text-white transition-all duration-500 ${item.link === path && "active"}`}
                >
                  {item.title}
                </li>
              </a >
            ))}
            <button className="lg:hidden px-[24.81px] cursor-pointer hover:text-orange hover:bg-white duration-300 transition-all py-3 bg-orange rounded-md text-white font-semibold text-[16px] leading-[119%] ">
              Free Quote
            </button>
          </ul>
        </div>

        <div className="flex flex-row items-center gap-6 ">
          <Icon icon={"search"} className={"cursor-pointer"} />
          <button className="max-lg:hidden px-[24.81px] cursor-pointer hover:text-orange hover:bg-white duration-300 transition-all py-3 bg-orange rounded-md text-white font-semibold text-[16px] leading-[119%] ">
            Free Quote
          </button>

          <button
            onClick={() => setNav(!nav)}
            className="lg:hidden relative w-6 h-6 z-500 cursor-pointer"
          >
            <span
              className={` absolute left-0 w-6 h-1 bg-orange rounded transition-all duration-300 ${nav ? "rotate-45 top-2.5" : "top-0"}`}
            ></span>
            <span
              className={` absolute left-0 w-6 h-1 bg-orange rounded transition-all duration-300 ${nav ? "opacity-0" : "top-2.5"}`}
            ></span>
            <span
              className={` absolute left-0 w-6 h-1 bg-orange rounded transition-all duration-300 ${nav ? "-rotate-45 top-2.5" : "top-5"}`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
