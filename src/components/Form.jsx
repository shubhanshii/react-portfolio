import React from 'react'
import { useState } from 'react'
import contact from '../components/assets/conracts.gif'

const Form = () => {
    const [formData, setFormData]= useState({
        name: '',
email: '',
message: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };

  return (
    <div className='flex flex-col justify-between items-center py-16 md:flex-row md:px-8 lg:px-20 xl:px-36'>
      <div className='flex justify-center items-center md:justify-between'>
<img src={contact} alt='contact' className='w-[80%] lg:w-full'/>
      </div>
   <form onSubmit={handleSubmit} className='bg-slate-200 p-7 rounded-md lg:p-12 '> 
    {/* <label>Name: </label> */}
    <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required className='border my-2 rounded-md border-black px-2 xl:text-xl'/>
    
    <br>
    </br>

    {/* <label>Email:  </label> */}
    <input name='email'  type='email' value={formData.email} onChange={handleChange} placeholder='Email' required className='border my-2 rounded-md border-black px-2 xl:text-xl'/>

   <br></br>

    {/* <label>Message: </label> */}
    <textarea name="message"  type="textarea" value={formData.message} onChange={handleChange} placeholder='Message' required className='border my-2 rounded-md w-full border-black px-2 xl:text-xl'/>

   <br></br>

    <button type='submit' className='bg-slate-600 rounded-md px-2 py-1 text-white xl:text-xl'>Submit</button>
    
   </form>
   </div>
  )
}

export default Form