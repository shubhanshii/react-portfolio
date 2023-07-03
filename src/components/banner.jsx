import React from 'react'
import bannerlogo from '../components/assets/personal-development.png'


const banner = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center py-10 px-7 overflow-y-hidden h-screen'>
      <div className='text-5xl'> 
      <p>I am a web developer, a writer, and a photographer</p>
      </div>
      {/* <div className='w-[20%]'>
            <img src={bannerlogo} alt='banner'/> 
         </div>  */}
        {/* <h1 className='flex justify-center text-6xl font-bold pt-40 text-white text-center '>I am a web developer, a writer, <br></br>and a photographer</h1>
        <p className='text-white text-2xl pt-6 text-center'>I write and code beautifully, I love what I do</p>
        <div className='flex justify-around mx-auto px-auto pt-20 w-[10%] pb-6'>
            <img src={bannerlogo} alt='banner'/> */}
        {/* </div> */}
    
    </div>
  )
}

export default banner