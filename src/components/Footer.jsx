import React from 'react'
import linkedin from '../components/assets/linkedin.png'
import git from '../components/assets/github.png'
import insta from '../components/assets/instagram (1).png'

const Footer = () => {
    const symbols=[{

    icon:linkedin,
},
    {
icon:git,
},
{
    icon:insta
},
    ]
  return (
    <div className=' py-6 flex flex-col justify-between items-center px-auto bg-slate-500 '>
       
    <div className='flex gap-10 justify-center items-center pb-3'>
{
    symbols.map((item)=>
    (
        <img src={item.icon} alt='icons' className='w-[5%] md:w-[3%] lg:w-[2%]'/>
    ))
}
    </div>
    <p className=' font-bold lg:text-xl'> Developed by Shubhanshi Jain</p>
    </div>
  )
}

export default Footer