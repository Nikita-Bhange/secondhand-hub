import React from 'react'
import CategoriesApi from '../../componentApi/CategoriesApi.js'


const Categories = () => {
  return (
    <>

            <div className='containerSize pt-[6rem] pb-[2rem]'>
                <p className='text-4xl'><span className='font-bold text-amber-950-950'>Explore</span><span className='text-amber-900 font-bold'> Categories </span></p>
            </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 containerSize p-5 mobile:flex-col px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    {CategoriesApi.map((item)=>(
        
        <div className='  m-2 shadow-lg rounded-lg  relative'>
      <img src={item.image[0]} className="w-[100%]" alt='category_img'/>
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center shadow-lg shadow-slate-300 flex-col'>
          <h2 className=' text-gray font-bold text-[30px]'>{item.title}</h2>
         {/* <Link to="/Products" className='btn'><buttton ></buttton></Link> */}
      </div>
  </div>
    ))}
  </div>

     
   
    </>
  )
}



export default Categories