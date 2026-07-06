import React from "react";
import Navbar from "../common/Navbar";
import Hero from "../home/Hero";
import Swiper from "../home/Swiper";
import Gallery from "../home/Gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Swiper />
      <Gallery />
    </>
  );
};

export default Home;
