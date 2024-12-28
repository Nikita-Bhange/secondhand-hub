import React, { useState } from "react";
import Posts from "../components/Posts/Posts";
import UserInfo from "../components/UserInfo/UserInfo"; 

function Profile() {
  const [input, setInput] = useState({
    name: "User",
    email: "user@example.com",
    address: "1234 Elm Street",
    contact: "123-456-7890",
    city: "Goa",
    pincode: "123432",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl m-10">
        {/* Profile Header */}
        <div className="bg-slate-500 h-40" />
        <div className="relative -mt-20 px-6">
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="text-center mt-6">
            <h1 className="text-xl font-bold text-gray-800">{input.name}</h1>
            <p className="text-gray-600">{input.email}</p>
          </div>
          {/* Editable Section */}
          <UserInfo input={input} setInput={setInput} />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default Profile;
