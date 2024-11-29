import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-teal-100 to-white">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition-all duration-300">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Create Your Account</h2>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="text-lg font-semibold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-5 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all"
              placeholder="create a username"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              
              className="w-full px-5 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all"
              placeholder="Your email address"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-lg font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-5 py-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all"
              placeholder="Create a strong password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-all duration-300"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="text-center mt-4 text-gray-700">
            Already have an account? 
            <Link to="/sign-in"className="text-teal-500 font-semibold hover:text-teal-700">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
