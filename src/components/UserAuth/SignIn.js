// SignInForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import {
  createAccountSuccess,
  setAuthData,
  signInSuccess,
} from '../../redux/bazarSlice';

const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 25px;
  padding-top: 25px;
  font-size: 2.2rem;
  text-align: center;
`;

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [token, setToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      toast.error("Password can't be blank");
      return;
    }
    try {
      const response = await fetch(
        'https://becks-best-c64383031a9a.herokuapp.com/api/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log('User Info:', response);

      if (response.ok) {
        // Sign-in successful
        console.log('Sign-in successful');
        console.log('Server Response:', data);
        const newToken = data.token; // Adjust this based on your actual server response structure
        localStorage.setItem('authToken', newToken);
        // Store the token in component state

        console.log('New Token:', newToken);
        console.log('firstName:', data.userInfo.firstName);
        dispatch(
          setAuthData({
            userInfo: {
              userId: data.userInfo.userId,
              email: data.userInfo.email,
              firstName: data.userInfo.firstName,
              lastName: data.userInfo.lastName,
            },
            authToken: data.token,
          })
        );
        toast.success('Sign-in Successful!');

        navigate('/');
      } else {
        // Sign-in failed
        console.error(data.error);
        toast.error("Email/Password Doesn't Match");
        if (data.error === "Password can't be blank") {
          // Display specific message for empty password
          toast.error("Password can't be blank");
        } else {
          // Display a generic error message for other cases
          toast.error("Email/Password Doesn't Match");
        }
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error(`${error.response.data.error}`);
    }
  };

  return (
    <div className="relative bg-white h-full w-full flex items-center justify-center flex-col mt-[100px]">
      <H1 className="">SIGN IN OR REGISTER</H1>
      <p className="p-[25px] font-light text-[1rem]">
        If you have an issue please call{' '}
        <span className="transition transition-2000ms ease-in-out hover:font-normal hover:cursor-pointer">
          0800-909-9090
        </span>
      </p>
      <div className="border border-solid border-[#eee] p-[25px] w-[400px] my-[25px]">
        <h2 className="text-[1.2rem] font-normal uppercase">SIGN IN</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="text-[0.9rem] pt-[15px] pb-[10px]">Email:</div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-solid border-[#eee] p-[15px] py-[10px] w-full text-gray-500"
            />
          </label>
          <br />
          <label>
            <div className="text-[0.9rem] pt-[15px] pb-[10px]">Password:</div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-solid border-[#eee] p-[15px] py-[10px] w-full text-gray-500"
            />
          </label>
          <br />
          <button
            type="submit"
            className="text-base bg-[#FF0054] uppercase text-[2rem] text-white w-full py-3 mt-6 hover:bg-[#ff3b7c] duration-300 font-medium"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="border border-solid border-[#eee] p-[25px] w-[400px] my-[25px]">
        <h2 className="text-[1.1rem] font-light uppercase">
          Don't have an account?
        </h2>
        <Link to="/create-account">
          <button className="text-base bg-gray-500 uppercase text-[2rem] text-white w-full py-3 mt-6 hover:bg-gray-400 duration-300 font-medium">
            CREATE ACCOUNT
          </button>
        </Link>
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
  );
};

export default SignInForm;
