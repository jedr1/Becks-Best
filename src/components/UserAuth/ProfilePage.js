// ProfilePage.jsx

import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { clearAuthData } from '../../redux/bazarSlice';

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 25px;
  padding-top: 25px;
  font-size: 2.2rem;
  text-align: center;
`;
const Div = styled.div`
  transition: 300ms ease;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;
const Span = styled.span`
  transition: 300ms ease;
`;
const ProfilePage = () => {
  // Assuming your Redux slice is named 'user' and has a field 'userInfo'
  const userInfo = useSelector((state) => state.bazar.authData.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.bazar.authData.authToken);

  const [data, setData] = useState(null);
  const fetchData = async () => {
    console.log(authToken);
    try {
      // Set up headers with the token
      const token = localStorage.getItem('authToken');

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      };

      // Make the axios request with the configured headers
      const response = await axios.get(
        'https://becks-best-c64383031a9a.herokuapp.com/jwt/orders',
        {
          headers,
        }
      );

      setData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized (expired token) - Redirect to the login page
        window.location.href = '/login';
        dispatch(clearAuthData());
        toast.error('Session expired');
      } else {
        // Handle other types of errors as needed
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSignOut = () => {
    dispatch(clearAuthData());
    navigate('/');
  };

  return (
    <div className="relative bg-white h-full w-full flex items-center justify-center flex-col mt-[100px] pb-[50px]">
      <H1 className="">MY ACCOUNT</H1>
      <p className="p-[25px] font-light text-[1rem]">
        If you have an issue please call{' '}
        <span className="transition transition-2000ms ease-in-out hover:font-normal hover:cursor-pointer">
          0800-909-9090
        </span>
      </p>
      <div className="px-[200px] w-full h-full flex items-start justify-start flex-col gap-[75px]">
        <div className=" ">
          <Div
            className="flex gap-[5px] text-[#6A5749] "
            onClick={handleSignOut}
          >
            <div className="transform rotate-180">
              <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <div className="mt-[5px]">SIGN OUT</div>
          </Div>
          <h2 className="mt-[15px] text-[1.5rem] font-light">
            Welcome back, {userInfo ? userInfo.firstName : ''}!
          </h2>
        </div>
        <div className="w-full">
          <div className="w-full border-b border-b-solid border-b-[#eee] font-light text-[1.3rem] pb-[10px]">
            My orders
          </div>
          <div className="w-[1200px] grid grid-cols-6 mt-[15px]">
            <div>
              <div className="font-light">Order ID</div>
            </div>
            <div>
              <div className="font-light">Product(s)</div>
            </div>
            <div>
              <div className="font-light">Order Date</div>
            </div>
            <div>
              <div className="font-light">Total</div>
            </div>
            <div>
              <div className="font-light">Delivery Status</div>
            </div>
            <div>
              <div className="font-light">Payment Status</div>
            </div>
          </div>
          {userInfo ? (
            <div>
              {data?.map((item) => (
                <div className="w-[1200px] grid grid-cols-6 mt-[25px] border-b border-b-solid border-b-[#eee] pb-[25px]">
                  <div>
                    <div>#{item.id}</div>
                  </div>
                  <div>
                    <div className="text-[0.8rem] flex flex-col gap-[2px]">
                      {JSON.parse(item.products).map((product) => (
                        <Span className="underline"> {product.title}</Span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-light">{item.createdAt}</div>
                  </div>
                  <div>
                    <div>£{item.total / 100}</div>
                  </div>
                  <div>
                    <div>{item.deliveryStatus}</div>
                  </div>
                  <div>
                    <div>{item.paymentStatus}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* You can add more user details here based on your userInfo structure */}
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
  );
};

export default ProfilePage;
