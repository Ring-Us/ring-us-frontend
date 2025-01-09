import { Footer } from "../components/Landing/Footer";
import { Header } from "../components/Landing/Header";
import { Hero } from "../components/Landing/Hero";
import { Last } from "../components/Landing/Last";
//import { ProductShowcase } from "../Landing/ProductShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <ProductShowcase /> */}
      <Last />
      <Footer />
    </>
  );
}
