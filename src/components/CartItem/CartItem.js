import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Del from '../../assets/delivery.png';
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from '../../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';

const Cont = styled.div`
  padding-top: 25px;
  border: 1px solid #eee;
  border-right: none;
  border-left: none;
  border-bottom: none;
  margin-right: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  align-items: start;
  justify-content: start;

  padding-left: 25px;
  padding-top: 50px;
`;
const H2 = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  // width: 250px;
`;
const Rem = styled.div`
  margin-bottom: 50px;
`;

const CartItem = () => {
  // const productData = useSelector((state) => state.bazar.productData);
  // const dispatch = useDispatch();
  const productData = useSelector((state) => {
    const data = state.bazar.productData;
    return Array.isArray(data) ? data : Object.values(data);
  });
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <p>7 Products Maximum Per Checkout</p>
      <div className="w-full pr-10 ">
        <div>
          {productData.map((item) => (
            <Cont
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div className="flex items-center gap-2">
                <MdOutlineClose
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &
                    toast.error(`${item.title} is removed`)
                  }
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
                <img
                  className="w-[350px] h-[350px] object-cover"
                  src={
                    `https://becks-best-c64383031a9a.herokuapp.com/api/products/` +
                    item.cover
                  }
                  alt="productImg"
                />
              </div>
              <Wrapper>
                <div className="flex w-[100%] justify-between">
                  <div>
                    <H2 className="underline hover:cursor-pointer">
                      {item.title}
                    </H2>
                    <p className="font-light text-[1rem] mt-[5px]">
                      {item.n === 1 ? <p>Necklace</p> : <span></span>}
                      {item.e === 1 ? <p>Earrings</p> : <span></span>}
                      {item.r === 1 ? <p>Ring</p> : <span></span>}
                      {item.b === 1 ? <p>Bracelet</p> : <span></span>}
                    </p>
                    <div className="flex mt-[20px] gap-[5px]">
                      <img
                        src={Del}
                        alt=""
                        className="w-[25px] h-[25px] object-cover"
                      />
                      <div>FREE Home delivery available for this product</div>
                    </div>
                  </div>
                  <div className="  flex gap-[5px]">
                    <p className="text-[#ba9f07] font-semibold text-[1.3rem]">
                      {new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP',
                      }).format(item.quantity * item.price)}
                    </p>
                    <span className="line-through mt-[5px] font-normal">
                      {new Intl.NumberFormat('en-GB', {
                        style: 'currency',
                        currency: 'GBP',
                      }).format(item.quantity * item.oldPrice)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between w-full h-full">
                  <div className=" flex mt-[-60px] gap-4  flex-col h-full justify-end align-bottom">
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
                          dispatch(
                            decrementQuantity({
                              _id: item._id,
                              title: item.title,
                              cover: item.cover,
                              price: item.price,
                              quantity: 1,
                              desc: item.desc,
                            })
                          )
                        }
                      >
                        <div className="marg">-</div>
                      </button>
                      <span className="text-[1.2rem] font-normal">
                        {isNaN(item.quantity)
                          ? 'Invalid Quantity'
                          : item.quantity}
                      </span>
                      <button
                        /*onClick={() => setBaseQty(baseQty + 1)}*/
                        onClick={() =>
                          dispatch(
                            increamentQuantity({
                              _id: item._id,
                              title: item.title,
                              cover: item.cover,
                              price: item.price,
                              quantity: 1,
                              desc: item.desc,
                            })
                          )
                        }
                        className="border border-solid border-[#000] h-[35px] w-[35px] font-normal text-lg flex items-center
                    justify-center px-2 hover:bg-gray-900 hover:text-white cursor-pointer 
                    duration-300 active:bg-black"
                      >
                        <div className="marg">+</div>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end  w-full items-end h-[full] align-bottom ">
                    <Rem
                      className="underline transition duration-300 ease-in-out hover:text-[#ba9f07] hover:cursor-pointer border-x border-solid border-[#eee] pl-[10px] pr-[10px]"
                      onClick={() =>
                        dispatch(deleteItem(item._id)) &
                        toast.error(`${item.title} is removed`)
                      }
                    >
                      Remove item
                    </Rem>
                  </div>
                </div>
              </Wrapper>
            </Cont>
          ))}
        </div>
        <button
          onClick={() =>
            dispatch(resetCart()) & toast.error('Your Cart is Empty!')
          }
          className="bg-gray-200 text-black mt-8 ml-7 py-1 px-6 hover:bg-gray-600 hover:text-white duration-300"
        >
          Reset Cart
        </button>
        <Link to="/">
          <button className="mt-8 ml-7 flex items-center gap-1 text-gray-600 hover:text-black duration-300">
            <span>
              <HiOutlineArrowLeft />
            </span>
            Go shopping
          </button>
        </Link>
        <ToastContainer
          position="top-left"
          autoClose={3000}
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
    </div>
  );
};

export default CartItem;
