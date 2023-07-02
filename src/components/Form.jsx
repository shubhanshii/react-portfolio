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
    <div className='flex flex-col justify-between items-center py-20 md:flex-row md:px-8'>
      <div className='flex justify-center items-center md:justify-between'>
<img src={contact} alt='contact' className='w-3/4'/>
      </div>
   <form onSubmit={handleSubmit}>
    {/* <label>Name: </label> */}
    <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required className='border my-2 rounded-md'/>
    
    <br>
    </br>
    {/* <label>Email:  </label> */}
    <input name='email'  type='email' value={formData.email} onChange={handleChange} placeholder='Email' required className='border my-2 rounded-md'/>
   <br></br>
    {/* <label>Message: </label> */}
    <textarea name="message"  type="textarea" value={formData.message} onChange={handleChange} placeholder='Message' required className='border my-2 rounded-md w-full'/>
   <br></br>
    <button type='submit'>submit</button>
    
   </form>
   </div>
  )
}

export default Form