import React from "react";
import Navbar from "../common/Navbar";
import Hero from "../home/Hero";
import Swiper from "../home/Swiper";
import Gallery from "../home/Gallery";
import Head from "../home/Head";
import Earthworks from "../home/Earthworks";
import About from "../home/About";
import Cards from "../home/Cards";
import Form from "../home/Form";

const Home = () => {
  return (
    <>
      <Head />
      <Earthworks />
      <About />
      <Cards />
      <Hero />
      <Swiper />
      <Gallery />
      <Form />
      
    </>
  );
};

export default Home;
