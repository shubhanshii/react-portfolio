import React, {useState} from 'react'
import logo from '../components/assets/images-removebg-preview.png';
import menu from '../components/assets/menu.png'
const navItems=['Home', 'About', 'Services', 'skills', 'Contact']
const Navbar = () => {
   
  
  return (
    <div>
    <div className='flex justify-between py-6 gap-24 px-3 md:gap-20'>
        <div className=''>
<img src={logo} alt='logo' className='w-1/2 md:w-1/3'/>
        </div>
        
<img src={menu} alt='menu' className='w-[20%] md:hidden'/>
       
       
            { <ul className='flex cursor-pointer md:gap-10 py-4 max-md:hidden md:visible'> 
            {
              navItems.map((item)=>(
                <li className=' hover:text-yellow-500 text-black font-semibold '>{item}</li>
              ))
            }
          
            </ul>
            }
    </div>
   
     </div>
  )
}

export default Navbar