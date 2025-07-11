import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>       
      <Footer></Footer>       
    </div>
  );
}
