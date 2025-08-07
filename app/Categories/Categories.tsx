import Image from 'next/image';
import React from 'react';

import card1 from "@/public/Group 48.png";
import card2 from "@/public/Group 49.png";
import card3 from "@/public/Group 50.png";
import card4 from "@/public/Group 51.png";

import deco from "@/public/Rectangle 157.png"

const Categories = () => {
  return (
    <>
      {/* Header Section */}
      <section className='flex flex-col items-center justify-center px-4 text-center'>
        <h1 className='border-2 border-black text-[25px] px-4 py-2 mb-4'>
          Categories
        </h1>
        <h2 className='text-[32px] md:text-[50px] font-bold'>
          We offer best services
        </h2>
      </section>

      {/* Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-12'>
        {/* Card 1 */}
      <div className='hover:shadow-lg bg-white h-[290px] p-4 flex flex-col items-center justify-center rounded-[15px] text-center hover:scale-105 transition-transform duration-300'>
  <Image
    alt='Category 1'
    src={card1}
    width={card1.width}
    height={card1.height}
  />
  <h1 className='text-lg font-semibold mt-12'>Calculated Weather</h1>
  <p className='text-sm mt-2 px-2'>
    Built Wicket longer admire do barton vanity itself do in it.
  </p>
</div>



        {/* Card 2 */}
         <div className=' h-[290px] hover:shadow-lg p-4 flex bg-white flex-col items-center justify-center rounded-[15px] text-center hover:scale-105 transition-transform duration-300'>
  <Image
    alt='Category 1'
    src={card2}
    width={card2.width}
    height={card2.height}
  />
  <h1 className='text-lg font-semibold mt-12'>Best Flights</h1>
  <p className='text-sm mt-2 px-2'>
Engrossed listening. Park gate sell they west hard for the.
  </p>
</div>


        {/* You can add more cards here in the same format */}
      <div className=' h-[290px] p-4 flex hover:shadow-lg flex-col items-center justify-center rounded-[15px] text-center hover:scale-105 transition-transform duration-300'>
  <Image
    alt='Category 1'
    src={card3}
    width={card3.width}
    height={card3.height}
  />
  <h1 className='text-lg font-semibold mt-12'>Local Events</h1>
  <p className='text-sm mt-2 px-2'>
  Barton vanity itself do in it. Preferd to men it engrossed listening. 
  </p>
</div>


        {/*   */}
   <div className=' h-[290px] p-4 flex hover:shadow-lg flex-col items-center justify-center rounded-[15px] text-center hover:scale-105 transition-transform duration-300'>
  <Image
    alt='Category 1'
    src={card4}
    width={card4.width}
    height={card4.height}
  />
  <h1 className='text-lg font-semibold mt-12'>Customization</h1>
  <p className='text-sm mt-2 px-2'>
  We deliver outsourced
aviation services for
military customers
  </p>
</div>
<Image src={deco} alt=''
width={deco.width} height={deco.height}
className='absolute z-[-1] left-[284px] mt-[220px]'/>
      </div>
    </>
  );
};

export default Categories;
