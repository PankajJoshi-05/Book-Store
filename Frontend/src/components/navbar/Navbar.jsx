import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about-us" },
    { title: "Books", link: "/books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];

  return (
    <div className='flex items-center justify-between bg-teal-800 text-white px-8 py-3'>
      <div>
        <Link to="/">
          <h1 className='text-3xl font-bold text-teal-400 transition-all duration-300 cursor-pointer transform hover:scale-105'>
            BookyVerse
          </h1>
        </Link>

      </div>
      <div className=' flex items-center gap-4'>
        <div className='hidden md:flex gap-4'>
          {links.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className=' nav-links text-white hover:text-teal-600 transition-all duration-300'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex gap-4'>
          <Link to="sign-in" className="px-4 sign-in-btn px-2 py-1  ">
            SignIn
          </Link>
          <Link to="sign-up" className="px-4 sign-up-btn px-2 py-1 bg-teal-600 text-white rounded ">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
