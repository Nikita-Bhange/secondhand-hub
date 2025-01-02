import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const Products = ({ category }) => {
  const [favourites, setFavourites] = useState(Array(8).fill(false)); // Array to track favourites for each product

  const handleFavourite = (index) => {
    setFavourites((prevFavourites) =>
      prevFavourites.map((fav, i) => (i === index ? !fav : fav))
    );
  };

  return (
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-xl font-semibold mb-4">{category}</h2>
      <div className="flex flex-wrap md:flex-row flex-col gap-5 justify-center overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="border p-4 m-4 rounded shadow hover:shadow-lg w-full md:w-[20vw] hover:cursor-pointer flex md:flex-col self-center transition hover:scale-110 "
          ><Link to={"/product"}>
            <img
              src={`https://via.placeholder.com/150`}
              alt={`Product ${index + 1}`}
              className="md:w-full h-40 object-cover mb-4 w-[25%] self-center"
            />
             </Link>
            <div className="info md:m-0 m-5 w-full">
              <h3 className="font-medium text-lg mb-2">Product {index + 1}</h3>
              <p className="text-gray-500">Rs 999</p>
              <div className="btn flex md:justify-between flex-col md:flex-row gap-2">
                <div
                  onClick={() => handleFavourite(index)}
                  className="mt-2 p-2 flex justify-center items-center "
                >
                  {favourites[index] ? (
                    <FavoriteIcon className="text-red-500 bg-inherit" />
                  ) : (
                    <FavoriteBorderIcon className=" bg-inherit"/>
                  )}
                  </div>
                <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default Products;
