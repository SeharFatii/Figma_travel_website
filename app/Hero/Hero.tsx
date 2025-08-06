import Image from "next/image"; // ✅ correct
import React from 'react'

import Her from "@/public/Traveller 1.png"
import deco from "../../public/Decore.png"
import plane from "./../../public/Group (4).png"
import Link from "next/link";

const Hero = () => {
  return (
  <>
  
  
 <section  className='w-screen h-[490px] md:h-screen max-w-7xl p4 grid grid-cols-1 sm:grid-cols-2  ' >
<div className='flex flex-col items-center p-4  ml-0 sm:ml-2 md:ml-8 lg:mt-12'>

<h1 className='font-bold text-[18px] sm:text-[25px] justify-center mt-4  md:text-[25px] w-[360px] text-[#DF6951]  md:mt-4 md:w-[460px]'>
Best Destinations around the world

</h1>
<h1 className='font-bold text-[50px] w-[320px] md:text-[80px] justify-center leading-[50px] md:leading-[70px] lg:leading-[89px] tracking-[-4.2px]  md:tracking-[-3.2px] md:w-[545px] md:ml-14 border-2 border-black'>

    Travel, enjoy
and live a new
and full life
</h1>
<Image src={deco} alt=""
width={deco.width} height={deco.height}
className="absolute lg:mt-[11.6%] z-[-1] lg:mr-[-29%]"
/>


<p className="lg:mt-6 lg:w-[477px] lg:text-[20px] border-2 border-black justify-center items-center lg:px-2">
Built Wicket longer admire do barton vanity itself do in it. 
Preferred to sportsmen it engrossed listening. 
Park gate sell they west hard for the.

</p>


<div className="flex ">
<Link href="">
<button className="text-white w-[220px] bg-[#F1A501] rounded-[5px] relative  px-2 py-4 text-2xl mt-4 ">

Find out more

</button>


</Link>


<Link href="">
<button className="text-white w-[220px] bg-[#F1A501] rounded-[5px] relative  px-2 py-4 text-2xl mt-4 ">

Find out more

</button>


</Link>
</div>




</div>

<div className="justify-center items-center mr-[130px] h-[290px]">

<Image src={plane.src} alt=" "
width={plane.width} height={plane.height}
className="absolute"

/>
<Image src={plane.src} alt=" "
width={plane.width} height={plane.height}
className="z-[-1] absolute lg:right-16 lg:mt-[10rem]"

/>


<Image src={Her.src} alt=" "
width={Her.width} height={Her.height}
className="h-[390px] w-[450px] lg:h-[650px] "

/>



</div>



 </section>
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Hero