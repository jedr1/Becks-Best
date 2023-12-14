import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import BRW from '../assets/BRW-logo.webp';
import CART from '../assets/Cart.jpg';
import './Header.css';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={BRW} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <span className="absolute w-6 top-5  text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </Link>
            <Link to="login">
              <img
                className="w-8 h-8 rounded-full logo"
                src={userInfo ? userInfo.image : CART}
                alt="userLogo"
              />
            </Link>
            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2 absolute right-[-120%] top-0 ">
                {userInfo.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
