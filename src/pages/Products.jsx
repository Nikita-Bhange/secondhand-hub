import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Products = () => {
  const [hasCategory, setHasCategory] = useState(true);
  const location = useLocation();
  const { state } = location || {};
  const category = state?.name || "Product";
  return (
    <div className="flex flex-col md:flex-row flex-grow top-10">
      {/* Sidebar */}
      <div className="md:sticky top-0 sm:max-h-[fit-content] h-screen overflow-y-auto w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        {hasCategory && (
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-2">Categories</h3>
            <ul>
              <li>
                <input type="checkbox" id="electronics" className="mr-2" />
                <label htmlFor="electronics">Electronics</label>
              </li>
              <li>
                <input type="checkbox" id="clothing" className="mr-2" />
                <label htmlFor="clothing">Clothing</label>
              </li>
              <li>
                <input type="checkbox" id="books" className="mr-2" />
                <label htmlFor="books">Books</label>
              </li>
            </ul>
          </div>
        )}
        <div className="mb-6">
          <h3 className="font-medium text-lg mb-2">Price Range</h3>
          <input type="range" min="0" max="1000" className="w-full" />
          <div className="flex justify-between text-sm mt-2">
            <span>Rs 0</span>
            <span>Rs 1000</span>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-2">Used</h3>
          <ul>
            <li className="my-2">
              <input
                type="radio"
                name="usage"
                id="less-than-6-months"
                className="mr-2"
              />
              <label htmlFor="less-than-6-months">Less than 6 Months</label>
            </li>
            <li className="my-2">
              <input
                type="radio"
                name="usage"
                id="6-months-1-year"
                className="mr-2"
              />
              <label htmlFor="6-months-1-year">6 Months - 1 Year</label>
            </li>
            <li className="my-2">
              <input
                type="radio"
                name="usage"
                id="1-year-2-years"
                className="mr-2"
              />
              <label htmlFor="1-year-2-years">1 Year - 2 Years</label>
            </li>
            <li className="my-2">
              <input
                type="radio"
                name="usage"
                id="2-years-4-years"
                className="mr-2"
              />
              <label htmlFor="2-years-4-years">2 Years - 4 Years</label>
            </li>
            <li className="my-2">
              <input
                type="radio"
                name="usage"
                id="more-than-4-years"
                className="mr-2"
              />
              <label htmlFor="more-than-4-years">More than 4 Years</label>
            </li>
          </ul>
        </div>
      </div>

      {/* Products Section */}
      <main className="w-full md:w-3/4 p-4">
        <h2 className="text-xl font-semibold mb-4">{category}</h2>
        <div className="flex flex-wrap md:flex-row flex-col gap-5  justify-center overflow-hidden">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="border p-4 m-4 rounded shadow hover:shadow-lg w-[80%] md:w-[20vw] hover:cursor-pointer flex md:flex-col self-center transition hover:scale-110"
            >
              <img
                src={`https://via.placeholder.com/150`}
                alt={`Product ${index + 1}`}
                className="md:w-full h-40 object-cover mb-4 w-[25%] self-center"
              />
              <div className="info md:m-0 m-5 w-full">
              <h3 className="font-medium text-lg mb-2">Product {index + 1}</h3>
              <p className="text-gray-500">Rs 999</p>
              <div className="btn flex md:justify-between flex-col md:flex-row">
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Add to Cart
              </button>
              <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                Buy Now
              </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
