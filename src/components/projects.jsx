import React from 'react'
import writing from '../components/assets/creative-writing.png'
import dev from '../components/assets/blogger.png'
import photo from '../components/assets/photo-camera.png'

const projects = () => {
  const cards = [{
icon: writing,
title: 'Writing',
des: 'I love writing on daily basis. It helps in maintaining my sanity.',
  },
  {
    icon: dev,
    title:'Development',
    des: 'I am ver enthusiastic about development. My projects are based on HTML, CSS, JS and React.'
  },
  {
    icon: photo,
    title: 'Photography',
    des: 'It is one of my favourite hobby. It finds perfection in surroundings.'
  }
]
  return (
    <div className='text-center px-6 bg-slate-100 flex flex-col items-center gap-10 py-28 lg:flex-row lg:px-44'>

        
          {
          cards.map((item)=>(
            <div className='bg-slate-200 border border-gray-200 py-5'>
          <div className='flex items-center justify-center'>
          <img src={item.icon} alt='' className=' w-[100px] py-3'/></div>
            <p className='font-semibold py-2'>{item.title}</p>
            <div className='flex justify-center items-center'>
            <p className=' w-3/4'>{item.des}</p></div>
            </div>
             ))}
            
            
           
             </div>

)}
            {/* <div className='bg-slate-500 border border-gray-200 py-5'>
          <div className='flex items-center justify-center'>
          <img src={writing} alt='writing' className=' w-[100px]  py-3'/></div>
            <p className='font-semibold py-2'>Writing</p>
            <p className='px-5'>I love writing on daily basis. It helps in maintaining my sanity.</p>
            </div>

            <div className='bg-slate-500 border border-gray-200 py-5'>
          <div className='flex items-center justify-center'>
          <img src={writing} alt='writing' className=' w-[100px]  py-3'/></div>
            <p className='font-semibold py-2'>Writing</p>
            <p className='px-5'>I love writing on daily basis. It helps in maintaining my sanity.</p>
            </div> */}
            {/* <div className='md:w-[60%]'>
            <div className='flex items-center justify-center'>
              <img src={dev} alt='dev' className='  py-3 '/>
            <p className='font-semibold py-2'>Development</p>
            <p>I am ver enthusiastic about development. My projects are based on HTML, CSS, JS and React.</p>
            </div>

            <div className=' md:w-[60%]' >
              <img src={photo} alt='photo' className='  py-3'/>
            <p className='font-semibold py-2'>Photography</p>
            <p>It is one of my favourite hobby. It finds perfection in surroundings.</p>
            </div> */}
   
  


export default projects;