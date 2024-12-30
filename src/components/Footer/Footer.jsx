import { EmailOutlined, Facebook, LocalPhoneOutlined, LocationOnOutlined,  Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import  logo from '../../assets/logo.png'
const Footer = () => {

    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-black';
  return (

    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start  px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div>
        
      </div>
      <div className="flex-1 flex flex-col flex-wrap p-2">
      <img src={logo} alt='' className="w-[180px]"/>
        <p className="text-white">
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
  
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + `  bg-red-600`}>
            <Pinterest/>
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
            <LocationOnOutlined className="text-black"/>
            <p className='pl-3 text-black'>location</p>
        </div>
        <div className="flex m-3">
            <LocalPhoneOutlined className="text-black"/>
            <p className='pl-3 text-black'>+91 1128000</p>
        </div>
        <div className="flex m-3">
            <EmailOutlined className="text-black"/>
            <p className='pl-3 text-black'>secondhandhub@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
