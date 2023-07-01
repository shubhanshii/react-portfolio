import React, {useState} from 'react'
import logo from '../components/assets/portfolio.png';
const navItems=['Home', 'About', 'Services', 'skills', 'Contact']
const Navbar = () => {
   
  
  return (
    <div>
    <div className='flex justify-between py-4 w-full px-20'>
        <div className='py-4'>
<img src={logo} alt='logo'/>
        </div>
        
            <ul className='flex cursor-pointer gap-10 py-4'> 
            {
              navItems.map((item)=>(
                <li className=' hover:text-yellow-500 text-white'>{item}</li>
              ))
            }
          
            </ul>
     
    </div>
   
     </div>
  )
}

export default Navbar