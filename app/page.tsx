import Image from "next/image";
import Navbar from "../app/Navbar/Nvbar";
import React from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import { TextScroll } from "@/components/ui/text-scroll";


import scroll1 from "@/public/image 27.png"
import scroll2 from "@/public/image 28.png"
import scroll3 from "@/public/image 29.png"
import scroll4 from "@/public/image 27.png"
import Footer from "./Footer/Footer";

export default function Home() {
  return (
   <>
   <Navbar/>

   <Hero/>
   <Categories/>
 <TextScroll
        default_velocity={5}
        className="flex gap-12 items-center"
        text={
        <>
            <Image src={scroll1} alt="Image 1" width={scroll1.width} height={scroll1.height} />
            <Image src={scroll2} alt="Image 2" width={scroll2.width} height={scroll2.height} />
            <Image src={scroll3} alt="Image 3" width={scroll3.width} height={scroll3.height} />
              <Image src={scroll4} alt="Image 3" width={scroll4.width} height={scroll4.height} />
          </>
        }
      />


      <Footer/>
   
   <div>
seh

   </div>
   
   
   </>
  );
}
