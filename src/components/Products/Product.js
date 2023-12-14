import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import './Product.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import D1 from '../../assets/d2.jpg';
import D2 from '../../assets/d1.jpg';
import D3 from '../../assets/d3.jpg';
import D4 from '../../assets/d4.jpg';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Direct = styled.div`
  font-family: 'GFS Didot', serif;
`;
const H2 = styled.h2`
  font-family: 'Playfair Display', serif;
`;

const Product = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [spefOpen, setSpefOpen] = useState(false);
  const handleSpef = () => {
    setSpefOpen(!spefOpen);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  const handleFirst = () => {
    setCurrentSlide(0);
  };
  const handleSecond = () => {
    setCurrentSlide(1);
  };
  const handleThird = () => {
    setCurrentSlide(2);
  };
  const handleFourth = () => {
    setCurrentSlide(3);
  };
  const handleFifth = () => {
    setCurrentSlide(4);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);
  console.log(currentSlide);

  return (
    <div className="bg-[rgb(245,245,245)] relative w-full-h-full pt-[100px] pb-[25px]">
      <div className=" h-full w-full" data-aos="fade-up">
        <div className="mx-[250px] my-10  ">
          <div className="w-full bg-white p-6 flex items-center justify-center mb-[15px]">
            <div className="flex items-start justify-start w-[120px] gap-[5px] uppercase text-[0.8rem] hover:text-[#ba9f07]">
              <div className="text-[0.6rem] h-full items-center justify-center mt-[2.5px] ">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <Link to="/shop">
                <div className="text-[#6A5749] hover:cursor-pointer">
                  Back to shop
                </div>
              </Link>
            </div>
            <Direct className="w-full flex items-center justify-center  ml-[-120px]">
              <Link to="/shop">
                <span className="text-[#6A5749] mr-[5px]">JEWELRY //</span>{' '}
              </Link>
              {details.e === 1 ? (
                <Link to="/shop?sort=default&category=e">
                  <span className="text-[#6A5749] mr-[5px]">EARRINGS //</span>
                </Link>
              ) : (
                <span></span>
              )}
              {details.r === 1 ? (
                <Link to="/shop?sort=default&category=r">
                  <span className="text-[#6A5749] mr-[5px]">RINGS //</span>
                </Link>
              ) : (
                <span></span>
              )}
              {details.n === 1 ? (
                <Link to="/shop?sort=default&category=n">
                  <span className="mr-[5px] text-[#6A5749]">NECKLACES //</span>
                </Link>
              ) : (
                <span></span>
              )}
              {details.b === 1 ? (
                <Link to="/shop?sort=default&category=r">
                  <span className="text-[#6A5749] mr-[5px] ">BRACELETS //</span>
                </Link>
              ) : (
                <span></span>
              )}
              <span className="uppercase">{details.title}</span>
            </Direct>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-[10px] mr-[25px]">
              <div className="bg-white ">
                <img
                  className={`w-[100px] h-[100px] object-cover hover:cursor-pointer border-2 border-solid ${
                    currentSlide === 0 ? 'border-black' : 'border-[#eee]'
                  }`}
                  src={
                    `https://becks-best-c64383031a9a.herokuapp.com/api/products/` +
                    details.cover
                  }
                  alt=""
                  onClick={handleFirst}
                />
              </div>
              <img
                className={`w-[100px] h-[100px] object-cover hover:cursor-pointer border-2 border-solid ${
                  currentSlide === 1 ? 'border-black' : 'border-[#eee]'
                }`}
                src={D1}
                alt="productImg"
                onClick={handleSecond}
              />
              <img
                className={`w-[100px] h-[100px] object-cover hover:cursor-pointer border-2 border-solid ${
                  currentSlide === 2 ? 'border-black' : 'border-[#eee]'
                }`}
                src={D2}
                alt="productImg"
                onClick={handleThird}
              />
            </div>
            {/* <div className="flex items-center justify-center ">
            <div
              className="cursor-pointer w-[50px] h-[100px]  flex items-center justify-center text-[2rem]"
              onClick={prevSlide}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </div>
          </div> */}
            <div className="w-[500px] relative overflow-hidden bg-white mx-[15px]">
              <div
                style={{
                  transform: `translateX(-${currentSlide * 500}px)`,
                }}
                className="flex w-[3000px] transition transition-2000ms ease-in-out relative"
              >
                <img
                  className="w-[500px] h-[450px] object-cover"
                  src={
                    `https://becks-best-c64383031a9a.herokuapp.com/api/products/` +
                    details.cover
                  }
                  alt="productImg"
                />
                <img
                  className="w-[500px] h-[450px] object-cover"
                  src={D1}
                  alt="productImg"
                />
                <img
                  className="w-[500px] h-[450px] object-cover"
                  src={D2}
                  alt="productImg"
                />

                <div className="absolute top-4 right-0">
                  {details.isNew && (
                    <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                      Sale
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center mr-[25px]">
            <div
              className="cursor-pointer w-[50px] h-[100px]  flex items-center justify-center text-[2rem]"
              onClick={nextSlide}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div> */}
            <div className="w-[400px] flex flex-col justify-center gap-[25px] bg-white p-[25px] pr-[10px]">
              <div>
                <p className="text-base text-gray-500">
                  <span className="font-medium uppercase text-[0.8rem]">
                    {details.n === 1 ? <span>Necklace</span> : <span></span>}
                    {details.e === 1 ? <span>Earrings</span> : <span></span>}
                    {details.r === 1 ? <span>Ring</span> : <span></span>}
                    {details.b === 1 ? <span>Bracelet</span> : <span></span>}
                  </span>
                </p>
                <H2 className="text-4xl font-semibold mb-[10px]">
                  {details.title}
                </H2>
                <div className="flex items-center gap-4 ">
                  <p className="line-through text-gray-500 font-base">
                    £{details.oldPrice}
                  </p>
                  <p
                    onClick={nextSlide}
                    className="text-[2rem] text-[#ba9f07] "
                  >
                    £{details.price}
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-500 text-[0.8rem]">
                {details.desc}
              </p>
              {/* <div className="flex justify-between w-full h-full"> */}

              <div className="flex gap-4 w-full flex-row">
                <div className=" flex gap-4  flex-col h-full justify-end align-bottom">
                  <p className="text-sm">Quantity</p>

                  <div className="flex items-center gap-4 text-sm font-semibold border-none border-solid border-[#000]">
                    <button
                      className="border border-solid border-[#000] h-[35px] w-[35px] font-normal text-lg flex items-center
                 justify-center px-2 hover:bg-gray-900 hover:text-white cursor-pointer 
                 duration-300 active:bg-black"
                      /* onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }*/
                      onClick={() =>
                        setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                      }
                    >
                      <div className="marg">-</div>
                    </button>
                    <span className="text-[1.2rem] font-normal">
                      {isNaN(baseQty) ? 'Invalid Quantity' : baseQty}
                      {/* {isNaN(item.quantity) ? 'Invalid Quantity' : item.quantity} */}
                    </span>
                    <button
                      /*onClick={() => setBaseQty(baseQty + 1)}*/
                      onClick={() => setBaseQty(baseQty + 1)}
                      className="border border-solid border-[#000] h-[35px] w-[35px] font-normal text-lg flex items-center
                    justify-center px-2 hover:bg-gray-900 hover:text-white cursor-pointer 
                    duration-300 active:bg-black"
                    >
                      <div className="marg">+</div>
                    </button>
                  </div>
                </div>

                <div className=" w-full h-full flex items-end mt-[5px] ml-[15px]">
                  <button
                    className="bg-black text-white py-3 px-6 active:bg-gray-800 h-[50px] "
                    // onClick={() =>{
                    //   console.log('Product _id:', details._id);
                    //   dispatch(
                    //     addToCart({
                    //       _id: details._id,
                    //       title: details.title,
                    //       cover: details.cover,
                    //       price: details.price,
                    //       quantity: baseQty,
                    //       description: details.desc,
                    //     })
                    //   ) & toast.success(`${details.title} is added`)

                    //   }}
                    onClick={() => {
                      console.log('Product _id:', details._id);
                      dispatch(
                        addToCart({
                          _id: details._id,
                          title: details.title,
                          cover: details.cover,
                          price: details.price,
                          quantity: baseQty,
                          description: details.desc,
                          e: details.e,
                          r: details.r,
                          n: details.n,
                          b: details.b,
                          measure: details.measure,
                          oldPrice: details.oldPrice,
                        })
                      );
                      toast.success(`${details.title} is added`);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <ToastContainer
              position="top-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
          <div
            className="w-[890px bg-white ml-[140px] hover:cursor-pointer"
            onClick={handleSpef}
          >
            <div className=" p-6 flex items-center justify-between mt-[15px] ">
              {/* <div className="flex items-start justify-start  gap-[5px] uppercase text-[1rem] hover:text-[#ba9f07]"> */}

              <div className="hover:cursor-pointer uppercase">
                Specifications
              </div>

              <div
                className={`text-[0.6rem] h-full items-center justify-center mt-[2.5px] transition transition-500ms ease-in-out ${
                  spefOpen ? 'chev-up' : ''
                }`}
              >
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            {spefOpen ? (
              <div className="w-full bg-white grid grid-cols-2 py-[15px] px-[15x] text-[0.8rem]">
                <div className="border border-solid border-[#eee]">
                  <div className="py-[15px] px-[15px] flex justify-between">
                    <div>CATEGORY</div>
                    <div className="text-[#6A5749] uppercase">
                      {details.n === 1 ? <span>Necklace</span> : <span></span>}
                      {details.e === 1 ? <span>Earrings</span> : <span></span>}
                      {details.r === 1 ? <span>Ring</span> : <span></span>}
                      {details.b === 1 ? <span>Bracelet</span> : <span></span>}
                    </div>
                  </div>
                  <div className=" w-full border-t border-t-solid border-t-[#eee] py-[15px] px-[15px] flex justify-between">
                    <div>MATERIAL</div>
                    <div className="text-[#6A5749] uppercase">Diamond</div>
                  </div>
                </div>
                <div>
                  <div className=" w-full border-t border-t-solid border-t-[#eee] py-[15px] px-[15px] flex justify-between uppercase">
                    <div>
                      {details.r === 1 ? (
                        <span>RING SIZE</span>
                      ) : (
                        <span>Measurements</span>
                      )}
                    </div>
                    <div className="text-[#6A5749] uppercase">
                      {details.measure}
                    </div>
                  </div>
                  <div className=" w-full border-t border-t-solid border-t-[#eee] py-[15px] px-[15px] flex justify-between uppercase">
                    <div>WEIGHT</div>
                    <div className="text-[#6A5749] uppercase">0.36CT</div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
