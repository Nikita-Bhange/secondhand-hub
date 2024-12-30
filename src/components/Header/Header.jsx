import React from 'react'
import logo from '../../assets/logo.png'
import { Search,  ShoppingCartOutlined, AccountCircle } from "@material-ui/icons";
import { NavLink,Link } from 'react-router-dom';


const Header = () => {
  
  const style ='text-3xl, cursor-pointer, ml-[25px] mobile:ml-[5px] ';
  return (
   <>
      <div className=' fixed bg-white w-full shadow-lg pr-[13px] z-50  '>
      <div className="wrapper pr-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        
        <div className='w-[160px] m-3 pl-4'>
        <img src={logo} alt="logo" className='w-[160px]'/>
        </div>

       
      <div className='inline-flex items-center justify-center border border-gray-400 px-5  py-2 my-5 mx-3 rounded-3xl w-2/4 sm:w-1/4 '>
      <input className='flex-1 outline-none bg-inherittext-sm ' type='text' placeholder='search...' />
      <Search />
      </div>
     

       <ul className='hidden sm:flex gap-2 text-m font-bold text-black'>
         <NavLink to='/home' className={style}><p>Home</p></NavLink>
         <NavLink className={style}><p>Categories</p></NavLink>
         <NavLink className={style}><p>About us</p></NavLink>
         <NavLink className={style}><ShoppingCartOutlined/></NavLink>
         <NavLink className={style}><AccountCircle/></NavLink> 
        <NavLink to={"/sell"}> <button className='ml-4 mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl w-20 h-11'>Sell</button> </NavLink>
        
       </ul>
      
      </div>
    </div>

   </>
  )
}

export default Header