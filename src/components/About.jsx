// import React from 'react'
// import me from '../components/assets/me.png'

// const About = () => {
//   return (

//   <div className='flex flex-col justify-center items-center px-6 py-28 md:flex-row md:gap-40 md:px-10 lg:px-20 bg-slate-100'>
   
//      <img src={me} alt='me' className=' rounded-full w-1/2 mb-6 md:w-2/3 lg:w-[20%]'/>
//      <div className='lg:w-1/2'>
//      <p className='text-blue-800 text-lg'>━━ About me</p>
//            <h2 className='font-bold text-xl lg:text-2xl'>Hi! I am Shubhanshi Jain</h2>
//             <p className='text-base lg:text-xl xl:text-2xl'>Hey! I am enthusiast about development and writing. I am always ready to learn new things. In my spare time I like watching anime, painting, listening to music and reading books.</p>
//            <button className='mt-4 bg-slate-200 p-3 font-semibold rounded-2xl'>Checkout my resume!</button>
//      </div>
//   </div>

import React from 'react';
import me from '../components/assets/me.png';
import cv from '../components/assets/doc/Shubhanshi_Resume.pdf';

const About = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center px-6 py-28 md:flex-row md:gap-40 md:px-10 lg:px-20 bg-slate-100 '>
      <img src={me} alt='me' className='rounded-full w-1/2 mb-6 md:w-2/3 lg:w-[20%]' />
      <div className='lg:w-1/2'>
        <p className='text-black text-bold text-lg'>━━ About me</p>
        <h2 className='font-bold text-xl lg:text-2xl'>Hi! I am Shubhanshi Jain</h2>
        <p className='text-base lg:text-xl xl:text-2xl'>
          Hey! I am enthusiastic about development and writing. I am always ready to learn new things. In my spare time, I
          like watching anime, painting, listening to music, and reading books.
        </p>
        <a href={cv} download="Resume" target='_blank'>
        <button className='mt-4 bg-slate-200 p-3 font-semibold rounded-2xl hover:text-bold hover:bg-yellow-100'>Checkout my Resume!</button>
        </a>
      </div>
    </div>
  );
};

export default About;

    // <div className='flex justify-between bg-slate-100 items-center px-40 py-32 w-full gap-36'>
    //     <div className='rounded-full'>
    //         <img src={me} alt='me' className=' rounded-full w-1/2'/>
    //     </div>
    //     <div className='w-full flex flex-col items-start text-left'>
    //         <p>━━ About me</p>
    //         <h2 className='font-bold text-2xl'>Hi! I am Shubhanshi Jain</h2>
    //         <p className='text-xl'>Hey! I am enthusiast about development and writing. I am always ready to learn new things. In my spare time I like watching anime, painting, listening to music and reading books.</p>
    //         <button className='mt-4 bg-slate-200 p-3 font-semibold rounded-2xl'>Checkout my resume!</button>
    //     </div>
    // </div>
  

