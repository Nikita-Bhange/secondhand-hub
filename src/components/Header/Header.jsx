import React from 'react'
import logo from '../../assets/logo.png'
import { Search,  ShoppingCartOutlined, AccountCircle } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';


const Header = () => {
  
  const style ='text-3xl, cursor-pointer, ml-[25px] mobile:ml-[5px]';
  return (
   <>
      <div className=' static  bg-white w-full shadow-lg pr-[13px] z-50  '>
      <div className="wrapper pr-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        
        <div className='w-[160px] m-3 pl-4'>
        <img src={logo} alt="logo" className='w-[160px]'/>
        </div>

       
      <div className='inline-flex items-center justify-center border border-gray-400 px-5  py-2 my-5 mx-3 rounded-3xl w-2/4 sm:w-1/4 '>
      <input className='flex-1 outline-none bg-inherittext-sm' type='text' placeholder='search...' />
      <Search />
      </div>
     

       <ul className='hidden sm:flex gap-2 text-m font-bold text-black'>
         <NavLink to='/' className={style}><p>Home</p></NavLink>
         <NavLink className={style}><p>Categories</p></NavLink>
         <NavLink className={style}><p>About us</p></NavLink>
         <NavLink className={style}><ShoppingCartOutlined/></NavLink>
         <NavLink className={style}><AccountCircle/></NavLink>  
        
       </ul>
      
      </div>
    </div>

   </>
  )
}

export default Header