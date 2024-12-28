import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../components/Products/Products";
import SideBar from "../components/SideBar/SideBar";
const ProductPage = () => {
  const [hasCategory, setHasCategory] = useState(true);
  const location = useLocation();
  const { state } = location || {};
  const category = state?.name || "Product";
  return (
    <div className="flex flex-col md:flex-row flex-grow top-10">
      <SideBar hasCategory={hasCategory}/>
      <Products category={category} />
    </div>
  );
};

export default ProductPage;