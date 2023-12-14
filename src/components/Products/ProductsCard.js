import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { addToCart } from '../../redux/bazarSlice';
import Img1 from '../../assets/3.png';
import './Product.css';

const Cont = styled.div`
  background: rgb(245, 245, 245);
`;
const Img = styled.img`
  //margin-top: -25px;
`;
const Div = styled.div`
  background: rgba(0, 0, 0, 0.2);
  transition-duration: 500ms ease-in-out;
`;
const P = styled.p`
  font-family: 'Playfair Display', serif;
`;
const Pink = styled.div`
  //background: pink;
`;
const Line = styled.div`
  border-top: 1px solid black;
  width: 25px;
  margin-left: 5px;
`;

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('');
  };
  const rootId = idString(_id);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };
  const handleLeave = () => {
    setHover(false);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Cont className="group relative w-[275px] ">
      <Pink
        onClick={handleDetails}
        className="relative w-[100%] h-[275px] cursor-pointer overflow-hidden bg-white"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Img
          className={`w-[275px] h-[275px] object-cover duration-500 ${
            hovered ? 'zoom' : ''
          }`}
          src={
            `https://becks-best-c64383031a9a.herokuapp.com/api/products/` +
            product.cover
          }
          alt="product image"
        />
        {/* {hover && ( */}
        <Div
          className={`absolute inset-0 w-[100%] h-[100%] items-end justify-start hidden group-hover:flex up ${
            hovered ? '' : ''
          }`}
        >
          <div className="text-white text-center my-6 mx-6">
            {hovered && <P className="text-[1.3rem] title ">{product.title}</P>}
            {/* Add any other text or elements you need */}
          </div>
        </Div>
      </Pink>
      <div className="w-[100%]   bg-white">
        <Line />
        <div className="flex items-center px-2 py-4">
          <div className="flex flex-col">
            <div className="flex gap-0 relative overflow-hidden w-36 text-sm ">
              <div className="flex mx-[0px] text-[1.1rem] gap-2 transform group-hover:translate-x-40 transition-transform duration-500">
                <p className="text-[#ba9f07] font-normal">£{product.price}</p>
                <p className="line-through text-gray-500 text-sm">
                  £{product.oldPrice}
                </p>
              </div>

              <p
                onClick={() => {
                  console.log('Product _id:', product._id);
                  dispatch(
                    addToCart({
                      _id: product._id,
                      title: product.title,
                      cover: product.cover,
                      price: product.price,
                      quantity: 1,
                      desc: product.desc,
                      e: product.e,
                      r: product.r,
                      n: product.n,
                      b: product.b,
                      measure: product.measure,
                      oldPrice: product.oldPrice,
                    })
                  );
                  toast.success(`${product.title} is added`);
                }}
                className="absolute z-20 w-[1000px] text-gray-500 hover:text-gray-900 flex-items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
              >
                Add to cart
                <span className="mx-[10px]">
                  <i class="fa-solid fa-arrow-right-long"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>
          )}
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
    </Cont>
  );
};

export default ProductsCard;
