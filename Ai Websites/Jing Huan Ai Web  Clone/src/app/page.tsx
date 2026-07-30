import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Playground from "@/components/Playground";
import WebDesign from "@/components/WebDesign";
import Performances from "@/components/Performances";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
      <main id="top" className="bg-black">
        <Hero />
        <Marquee />
        <About />
        <FeaturedWork />
        <Playground />
        <WebDesign />
        <Performances />
      </main>
      <Footer />
    </>
  );
}
