

//new code
  // import React from 'react';
  // import writing from '../components/assets/creative-writing.png';
  // import dev from '../components/assets/blogger.png';
  // import photo from '../components/assets/photo-camera.png';

  // const Projects = () => {
  //   const cards = [
  //     {
  //       icon: writing,
  //       title: 'Writing',
  //       des: 'I love writing on a daily basis. It helps in maintaining my sanity.',
  //     },
  //     {
  //       icon: dev,
  //       title: 'Development',
  //       des: 'I am very enthusiastic about development. My projects are based on HTML, CSS, JS, and React.',
  //    },
  //    {
  //       icon: photo,
  //      title: 'Photography',
  //       des: 'It is one of my favorite hobbies. It finds perfection in surroundings.',
  //     },
  //   ];

  //   return (
  //    <div className=''>
  //       {cards.map((item) => (
  //       <div
           
  //           className='bg-gray-100 gap-10 py-5'
  //         >
  //           <div className='flex justify-center items-center'>
  //             <img src={item.icon} alt='' className='w-1/3' />
  //           </div>
  //           <p className='text-center text-lg font-semibold'>{item.title}</p>
  //           <p className='xl:text-base px-5 text-center'>{item.des}</p>
  //         </div>
  //      ))}
  //    </div>
  //  );
  // };

  // export default Projects;

//new code finished

import React from 'react';
import writing from '../components/assets/creative-writing.png';
import dev from '../components/assets/blogger.png';
import photo from '../components/assets/photo-camera.png';

const Projects = () => {
  const cards = [
    {
      icon: writing,
      title: 'Writing',
      des: 'I love writing on a daily basis. It helps in maintaining my sanity.',
    },
    {
      icon: dev,
      title: 'Development',
      des: 'I am very enthusiastic about development. My projects are based on HTML, CSS, JS, and React.',
    },
    {
      icon: photo,
      title: 'Photography',
      des: 'It is one of my favorite hobbies. It finds perfection in surroundings.',
    },
  ];

  return (
    <div id='skills' className=' text-center bg-slate-100 flex flex-col items-center py-10 '>
      <div className=' flex flex-col lg:flex-row justify-center gap-10 max-w-5xl px-8 xl:px-1 xl:py-10 md:w-2/3 lg:w-[90%] '>
        {cards.map((item) => (
          <div
            key={item.title}
            className=' bg-slate-200 border border-gray-200 flex flex-col justify-center items-center gap-4 p-4 '
            style={{ flex: '1', minWidth: '0', minHeight: '0', maxHeight: '100%' }}
          >
            <div className='flex items-center justify-center w-full h-1/2'>
              <img src={item.icon} alt='' className=' w-1/3 md:w-1/6 lg:w-1/2 xl:w-1/2' />
            </div>
            <p className=' font-semibold py-2 text-lg overflow-y-hidden'>{item.title}</p>
            <p className='text-base px-5 overflow-y-hidden pb-5'>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;




{/* <div className='flex items-center justify-center'>
          <img src={item.icon} alt='' className=' w-[100px] py-3 xl:w-[150px]'/></div> */}


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
   
  


