import React from 'react'
import skills from '../components/assets/skills-tools.png'
import tech from '../components/assets/services.gif'

const services = () => {
  return (
    <div><p className='text-lg font-semibold mt-10 text-center xl:text-2xl'>Tools and Technologies ━━</p>
<div className='flex flex-col justify-center items-center py-20 px-10 gap-16 md:flex-row-reverse md:px-40'>
<img src={tech} alt='tech ' className='md:w-[7000px] lg:w-[6000px]'/>
  <div>
  <img src={skills} alt='skills' className='md:w-full lg:w-3/4'/>
  </div>
</div>
</div>
    // <div><p className='text-xl font-semibold mb-12'>Tools and Technologies ━━</p>
      
    // <div className='flex justify-between items-center py-28 px-36 sm:flex-col'>
    
    //     <img src={skills} alt='skills' className='w-1/2 sm:w-[2000px]'/>
    //     <div>
    //       <img src={tech} alt='tech' className='w-[5000px]'/>
    //     </div>
    // </div>
    // </div>
  ) 
}

export default services