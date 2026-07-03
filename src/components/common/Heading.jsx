import React from "react";

const   Heading = ({ heading, vari }) => {
  const variants = {
    Primary:"lg:text-[32px] md:text-[28px] sm:text-2xl text-[20px]  leading-[134%]",
    Secondary: "text-2xl text-white leading-[100%]",
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
