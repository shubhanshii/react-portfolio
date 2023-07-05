import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import contact from '../components/assets/conracts.gif'

const Form = () => {
  const form = useRef();
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

        emailjs.sendForm('service_outuh54', 'template_5rwlbn4', form.current, 'ENXkbdsyvNHHfJyMZ')
        
      .then((result) => {
          console.log(result.text);
          alert("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
        // console.log(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        // );
    

  return (
    <div id='contact' className='flex flex-col justify-between items-center py-14 px-8 md:flex-row md:px-8 lg:px-20 xl:px-36 '>
      <div className='flex justify-center items-center md:justify-between'>
<img src={contact} alt='contact' className='w-[80%] xl:w-full'/>
      </div>
   <form ref={form} onSubmit={handleSubmit} className='p-7 rounded-md lg:p-12 bg-slate-200'> 
  <label className='text-lg font-semibold'>Name: </label> <br></br>
    <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' required className=' my-3 rounded-3xl placeholder:text-white  px-5 placeholder:text-base xl:text-xl bg-slate-500 py-3 w-full text-white'/>
    
    <br>
    </br>

    <label className='text-lg font-semibold'>Email:  </label> <br></br>
    <input name='email'  type='email' value={formData.email} onChange={handleChange} placeholder='Email' required className=' my-3 rounded-3xl  px-5 xl:text-xl bg-slate-500 py-3 w-full placeholder:text-white placeholder:text-base text-white'/>

   <br></br>

     <label className='text-lg font-semibold'>Message: </label>
    <textarea name="message"  type="textarea" value={formData.message} onChange={handleChange} placeholder='Message' required className=' my-3 rounded-3xl w-full  px-5 py-2 xl:text-xl bg-slate-500 placeholder:text-white placeholder:text-base text-white'/>

   <br></br>

    <button type='submit' className='bg-purple-500 rounded-md px-3 py-1 text-white xl:text-xl my-2'>Send</button>
    
   </form>
   </div>
  )
}

export default Form