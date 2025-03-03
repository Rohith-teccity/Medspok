import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Who from "../component/Who/Who";
import Banner from "../component/Banner/Banner";
import TestimonialSlider from "../component/Testimonial/Testimonial";
import Industries from "../component/Industries/Industries";
import Footer from "../component/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Who />
      <TestimonialSlider />
      <Industries />
      <Footer />
    </>
  );
}

export default Home;
