import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import { Faq } from "./component/Faq";
import { Pricing } from "./component/Pricing";
import CTA from "./component/Cta";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features/>
        <Faq/>
        <Pricing/>
        <CTA/>
        <Footer/>
      </div>
    </>
  );
}
