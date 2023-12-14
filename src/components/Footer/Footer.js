import React from 'react';
import { ImGithub } from 'react-icons/im';
import BRW from '../../assets/becks best logo.png';
import Apple from '../../assets/apple-pay.webp';
import Master from '../../assets/mastercard.webp';
import Paypal from '../../assets/paypal.webp';
import Visa from '../../assets/visa.webp';
import Klarma from '../../assets/klarna.webp';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className="bg-[rgb(245,245,245)] text-[#949494] py-20 font-titleFont relative my-0 px-[250px]">
      <div className="max-w-screen-xl flex gap-[50px]">
        <div>
          <img
            src={BRW}
            alt="logo"
            className="w-[250px] h-[100px] object-cover"
          />
          <div className="flex gap-5 text-lg text-gray-400 w-full items-center justify-center mt-[25px]">
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="ml-[100px]">
          <h2 className="text-2xl font-semibold  mb-4">Your Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{' '}
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{' '}
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{' '}
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{' '}
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex gap-[5px] ml-[100px]">
          <div className="text-[2.5rem]">
            <MdLocationOn />
          </div>
          <div className="text-base flex flex-col gap-[0px]">
            <p>BECKS BEST</p>
            <p>25 PELHELM DRIVE</p>
            <p>SHEFFIELD</p>
            <p>SH1 2EG</p>
            <p className="mt-[15px]">TUES - SAT : 9:30AM - 5:00PM</p>
            <p>SUN - MON: CLOSED</p>
            <p className="mt-[15px]">0115 768 8768</p>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
