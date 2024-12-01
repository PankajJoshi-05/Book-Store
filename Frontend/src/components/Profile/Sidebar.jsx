import React from 'react';
import { FaPhoneAlt, FaHome, FaEnvelope, FaUser, FaHeart, FaHistory, FaCog,FaSignOutAlt } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Sidebar({ profileData }) {
  return (
    <div className='bg-teal-500 p-6 rounded-xl flex flex-col items-center justify-between shadow-lg h-[100%]'>
      <div className='flex flex-col justify-center items-center'>
        <img
          src={profileData.avatar}
          className='h-[15vh] w-[15vh] rounded-full border-4 border-teal-200 mb-4'
          alt="Profile Avatar"
        />

        {/* Username section */}
        <div className="flex items-center space-x-2 mt-4">
          <FaUser className="text-white text-2xl" />
          <p className="font-semibold text-xl text-white">{profileData.username}</p>
        </div>

        {/* Email section */}
        <div className="flex items-center space-x-2 mt-4">
          <FaEnvelope className="text-white text-2xl" />
          <p className="text-white">{profileData.email}</p>
        </div>

        {/* Phone number section */}
        <div className="flex items-center space-x-2 mt-4">
          <FaPhoneAlt className="text-white text-2xl" />
          {profileData.phoneNumber ? (
            <p className="text-white">{profileData.phoneNumber}</p>
          ) : (
            <div className="relative flex items-center space-x-2">
              <span className="text-gray-700 text-sm font-semibold animate-pulse">
                Unavailable
              </span>
            </div>
          )}
        </div>

        {/* Address section */}
        <div className="flex items-center space-x-2 mt-4">
          <FaHome className="text-white text-2xl" />
          {profileData.address ? (
            <p className="text-white">{profileData.address}</p>
          ) : (
            <div className="relative flex items-center space-x-2">
              <span className="text-gray-700 text-sm font-semibold animate-pulse">
                Unavailable
              </span>

            </div>
          )}
        </div>
        <div className="w-full border-t border-teal-300 my-6"></div>
      </div>

     

      {/*Navigatin links*/}
      <div className="w-full flex flex-col items-center space-y-4">
        {/* Favourites Link */}
        <Link
          to="/profile"
          className="flex items-center space-x-2 text-white text-lg font-semibold hover:text-teal-200 transition transform duration-300 hover:scale-105"
        >
          <FaHeart className="text-white text-xl" />
          <span>Favourites</span>
        </Link>

        {/* Order History Link */}
        <Link
          to="/profile/order-history"
          className="flex items-center space-x-2 text-white text-lg font-semibold hover:text-teal-200 transition transform duration-300 hover:scale-105"
        >
          <FaHistory className="text-white text-xl" />
          <span>Order History</span>
        </Link>

        {/* Settings Link */}
        <Link
          to="/profile/settings"
          className="flex items-center space-x-2 text-white text-lg font-semibold hover:text-teal-200 transition transform duration-300 hover:scale-105"
        >
          <FaCog className="text-white text-xl" />
          <span>Settings</span>
        </Link>
      </div>

      {/* Log out Button */}
      <div className="mt-6">
        <button
          className="flex items-center space-x-2 text-white text-lg font-semibold hover:text-teal-200 transition transform duration-300 hover:scale-105"
          onClick={() => {
            console.log("Logging out...");
          }}
        >
          <FaSignOutAlt className="text-white text-xl" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
