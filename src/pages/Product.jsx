import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productslide from '../components/Productslide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import {
  ShoppingCartOutlined
  ,
} from "@material-ui/icons";
const Product = () => {
  const images=[
    'https://m.media-amazon.com/images/I/71YZwR-ykEL._SY522_.jpg',
    'https://m.media-amazon.com/images/I/61Bhf8CdaML._SY522_.jpg',
    'https://m.media-amazon.com/images/I/81F90H7hnML._SY522_.jpg',
    'https://m.media-amazon.com/images/I/61M6KzUbf7L._SY522_.jpg'
  ]
  return (
    <div className=' inset-0  flex  flex-col justify-center items-center   bg-white'>
      <Header />
      <div className='flex flex-row max-md:flex-col w-full gap-6 '>
        <Productslide images={images}/>
        <div className=' p-6  w-full h-full  '>
          <h2 className='text-4xl font-semibold mb-8'>Atomic habit</h2>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quaerat molestiae nam, autem debitis est laudantium cupiditate, rerum minima odio dolorem dolorum suscipit accusantium velit doloremque magni deserunt fuga dolore?</p>
          <p className='font-bold text-lg'>Used duration </p><p className='mb-8'>Less than 6 Months</p>
          <p className='font-bold text-lg'>Posted in </p><p className='mb-8'>Mukundnagar, Nagar, Ahmadnagar, Maharashtra - 414001</p>

          <p className='mb-14  text-2xl font-bold'><FontAwesomeIcon icon={faIndianRupeeSign} />Rs.999</p>
          <button className='w-4/5 h-11 bg-cyan-500 rounded-xl hover:bg-cyan-600 mb-6 ml-20 text-white'> <ShoppingCartOutlined style={{ color: 'white' }} />Add to cart</button>
          <Link to={"/payment"}>
          <button className='w-4/5 h-11 bg-cyan-500 rounded-xl hover:bg-cyan-600 ml-20 text-white'>Buy Now</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Product