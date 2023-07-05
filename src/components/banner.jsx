import React from 'react'
import bannerlogo from '../components/assets/personal-development.png'


const banner = () => {
  return (
    <div id='banner' className='flex flex-col justify-center items-center text-center h-screen '>
      <div className='text-5xl md:text-6xl flex justify center̥ items-center text-center'> 
      <p className='overflow-y-hidden pb-3 font-bold lg:px-20'>I am a Web Developer, a Writer, and a Photographer</p>
      </div>
       <div className=' py-10 w-1/4 md:w-1/6 lg:w-1/6 md:py-7 xl:w-[10%]'>
            <img src={bannerlogo} alt='banner'/> 
         </div>  
        {/* <h1 className='flex justify-center text-6xl font-bold pt-40 text-white text-center '>I am a web developer, a writer, <br></br>and a photographer</h1>
        <p className='text-white text-2xl pt-6 text-center'>I write and code beautifully, I love what I do</p>
        <div className='flex justify-around mx-auto px-auto pt-20 w-[10%] pb-6'>
            <img src={bannerlogo} alt='banner'/> */}
        {/* </div> */}
    
    </div>
  )
}

export default banner