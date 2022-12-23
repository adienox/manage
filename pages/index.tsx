import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Testimonials from "../components/Home/Testimonials";
import CallToAction from "../components/Home/CallToAction";
import Footer from "../components/Home/Footer";

const index: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default index;
