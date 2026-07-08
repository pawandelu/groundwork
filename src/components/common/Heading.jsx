import React from "react";

const   Heading = ({ heading, vari }) => {
  const variants = {
    Primary:"lg:text-[32px] md:text-[28px] sm:text-2xl text-[20px]  leading-[134%]",
    Secondary: "lg:text-2xl md:text-[20px] sm:text-[18px] text-[16px] text-white leading-[121%]",
    Denary: " text-[20px] leading-[120%]",
  };

  return (
    <h1 className={`font-bold inter text-orange  ${variants[vari]}`}>
      {" "}
      {heading}
    </h1>
  );
};

export default Heading;
