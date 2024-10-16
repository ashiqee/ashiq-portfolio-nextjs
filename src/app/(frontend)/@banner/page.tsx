'use client'; // Ensure this is treated as a client component

import React from 'react';
import BoxThreejs from '../_components/BoxThreeJs'; // Import the client-side BoxThreejs component



const BannerSection = () => {
  return (
    <div>

     <div className='h-[600px]'>
     <BoxThreejs />
     </div>

    </div>
  );
};

export default BannerSection;
