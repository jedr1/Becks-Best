import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Img1 from '../assets/shop-bag.jpg';
import CartItem from '../components/CartItem/CartItem';
import PayButton from '../components/PayButton/PayButton';
import Apple from '../assets/apple-pay.webp';
import Master from '../assets/mastercard.webp';
import Paypal from '../assets/paypal.webp';
import Visa from '../assets/visa.webp';
import Klarma from '../assets/klarna.webp';

const Cont = styled.div`
  flex-direction: column;
  width: 100vw;
`;
const Header = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eee;
`;
const Button = styled.button`
  font-weight: 500;
`;
const H2 = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
`;

const Cart = () => {
  // const productData = useSelector((state) => state.bazar.productData);
  const productData = useSelector((state) => {
    const data = state.bazar.productData;
    return Array.isArray(data) ? data : Object.values(data);
  });

  const userInfo = useSelector((state) => state.bazar.authData.userInfo);

  const user = useSelector((state) => state.bazar);
  const [totalAmt, setTotalAmt] = useState('');
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
    console.log(price);
  }, [productData]);
  // const handleCheckOut = () => {
  //   if (userInfo) {
  //     setPayNow(true);
  //   } else {
  //     toast.error('Please sign in to Checkout');
  //   }
  // };
  // const payment = async (token) => {
  //   await axios.post('http://localhost:8081/pay', {
  //     amount: totalAmt * 100,
  //     token: token,
  //   });
  // };

  const handleCheckout = () => {
    const sanitizedProductData = productData.map(
      ({ desc, oldPrice, e, r, n, b, measure, cover, ...rest }) => rest
    );
    console.log('UserID:', userInfo.userId);

    if (userInfo && userInfo.userId) {
      // console.log(
      //   'UserID:',
      //   userInfo.userInfo.userId,
      //   'userInfo:',
      //   userInfo.userInfo
      // );

      axios
        .post(
          'https://becks-best-c64383031a9a.herokuapp.com/checkout/create-checkout-session',
          {
            sanitizedProductData,
            userId: userInfo.userId,
          }
        )
        .then((res) => {
          window.location.href = res.data.url;
        })
        .catch((err) => {
          console.log('Checkout Error:', err);
          // Handle the error, e.g., display an error message
          toast.error('7 Products Max, Per Checkout');
        });
    } else {
      // User is not signed in
      toast.error('Please sign in to Checkout');
    }
  };
  return (
    <Cont className="relative bg-white w-full h-full flex items-center justify-center py-[100px]">
      <Header>YOUR SHOPPING BAG</Header>
      <div className="max-w-screen-xl py-20 flex ">
        <CartItem />

        <div className="w-[500px] h-full bg-[#fff] py-[25px] px-[25px] border  border-solid border-[#eee]">
          <div className="flex flex-col gap-6  pb-6">
            <div>
              <H2 className="text-2xl font-medium">SUMMARY</H2>
              <p className="flex items-start gap-4 text-base mt-[25px] pb-[10px] w-full border-b border-b-solid border-b-[#eee]">
                Shipping{' '}
              </p>
            </div>
            <div className="flex items-center flex-row justify-between w-full">
              <div className="flex gap-[10px]">
                <div className="text-[1.5rem] mt-[4px]">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div>
                  <div>Free shipping</div>
                  <p className="text-[0.8rem] text-[#747474]">
                    5-7 business days
                  </p>
                </div>
              </div>
              <div>Free</div>
            </div>
            <div className="flex items-center flex-row justify-between w-full">
              <div className="flex gap-[10px]">
                <div className="text-[1.5rem] mt-[4px]">
                  <i class="fa-regular fa-circle-check"></i>
                </div>
                <div>
                  <div>Next day delivery</div>
                  <p className="text-[0.8rem] text-[#747474]">1 business day</p>
                </div>
              </div>
              <div>£15.00</div>
            </div>
          </div>

          <div className="font-titleFont font-normal text-[1.1rem] flex justify-between mt-6">
            <p>Total (Excluding delivery):</p>
            <span className="text-xl font-bold">
              {new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
              }).format(totalAmt)}
            </span>
          </div>
          <Button
            onClick={handleCheckout}
            productData={productData}
            className="text-base bg-[#FF0054] uppercase text-[2rem] text-white w-full py-3 mt-6 hover:bg-[#ff3b7c] duration-300"
          >
            Checkout Securely
          </Button>
          <div className="w-full flex items-center justify-center py-[25px]">
            <img className="w-[40px] h-[100%]" src={Apple} alt="" />
            <img
              className="w-[40px] h-[100%]"
              src={Master}
              alt="accepted credit cards"
            />
            <img
              className="w-[40px] h-[100%]"
              src={Paypal}
              alt="accepted credit cards"
            />
            <img
              className="w-[40px] h-[100%]"
              src={Visa}
              alt="accepted credit cards"
            />
            <img
              className="w-[40px] h-[100%]"
              src={Klarma}
              alt="accepted credit cards"
            />
          </div>

          {/* {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51NiiSxFAvcIDQOzx91azJGvT1GBowQp54KM6zGK2zGBJzwQY508PE6sANppZd9ZQv14u3K99erlk3KHDhsH0mhm900CWWpzZHa"
                name="Becks Best UK"
                amount={totalAmt * 100}
                label="Pay Now"
                description={`Your Payment Amount is £${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )} */}
        </div>
      </div>
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
    </Cont>
  );
};

export default Cart;
