import React from 'react'
import { useState } from 'react'

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
   <form onSubmit={handleSubmit}>
    <label>Name: </label>
    <input type='text' name='name' value={formData.name} onChange={handleChange} required/>
    
    <br>
    </br>
    <label>Email:  </label>
    <input name='email'  type='email' value={formData.email} onChange={handleChange} required/>
   <br></br>
    <label>Message:</label>
    <textarea type="text" name="messaage" value={formData.message} onChange={handleChange} required/>
   <br></br>
    <button type='submit'>submit</button>
    
   </form>
   
  )
}

export default Form