'use client'; // Ensure this is treated as a client component

import React from 'react';

import BoxThreejs from '../_components/BoxThreeJs'; // Import the client-side BoxThreejs component



const BannerSection = () => {
  return (
    <div className="flex justify-around min-h-screen-xl items-center px-10">
      <section className='w-1/2'>
  
  <h1 className="text-4xl  font-bold"> Ashek Mahmud Ashik</h1>
  <p>Full Stact Developer</p>
  
      </section>

     <div className='h-[600px] w-[600px] my-10 rounded-full shadow-2xl shadow-slate-800 border border-blue-900/25 '>
     <BoxThreejs />
     </div>

    </div>
  );
};

export default BannerSection;
