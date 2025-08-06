import Image from "next/image"; // ✅ correct
import React from 'react'

import Her from "@/public/Traveller 1.png"


const Hero = () => {
  return (
  <>
  
  
 <section  className='w-screen h-[490px] md:h-screen max-w-7xl p4 grid grid-cols-1 sm:grid-cols-2  ' >
<div className='flex flex-col items-center p-4  ml-0 sm:ml-2 md:ml-8'>

<h1 className='font-bold text-[18px] sm:text-[25px] justify-center mt-4  md:text-[20px] w-[360px] text-[#DF6951]  md:mt-4'>
Best Destinations around the world

</h1>
<h1 className='font-bold text-[50px] w-[320px] md:text-[80px] justify-center leading-[50px] md:leading-[70px] lg:leading-[89px] tracking-[-4.2px]  md:tracking-[-3.2px] '>

    Travel, enjoy
and live a new
and full life
</h1>





</div>

<div className="justify-center items-center mr-[130px] h-[290px]">

<Image src={Her.src} alt=" "
width={Her.width} height={Her.height}
className="h-[390px] w-[450px]"

/>



</div>



 </section>
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Hero