import React from "react";
import CategoriesApi from "../../componentApi/CategoriesApi.js";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  // const [hoverEffects, setHoverEffects] = useState("opacity-0");
  // function handleHoverEnter() {
  //   setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  // }

  // function handleHoverExit() {
  //   setHoverEffects(" opacity-0");
  // }
  const navigate = useNavigate();
  return (
    <>
      <div className=" pt-[6rem]  text-center pb-[2rem] ">
        <p className="text-4xl">
          <span className="font-bold  text-amber-950-950">Explore</span>
          <span className="text-amber-900 font-bold"> Categories </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 containerSize p-5 mobile:flex-col px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] realtive  z-1 ">
        {CategoriesApi.map((item) => (
          <div className={`  m-2 shadow-lg rounded-lg overflow-hidden   `}>
            <img
              src={item.image[0]}
              className="w-[100%]  h-[100%] hover:scale-110 transition ease-in-out  relative duration-100 cursor-pointer  "
              alt="category_img" onClick={()=> navigate(`/category/${item.title}`,{ state: { name: item.title } }  )}
            />
             
            <div className="flex  w-[100%] h-[100%] left-0 top-0 items-center shadow-lg  flex-col">
              <h2 className=" text-gray  relative font-bold bottom-20 text-[30px]">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
