import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import {
  addUser,
  createAccountFailure,
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

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.bazar.error); // Assuming bazar is your reducer slice name
  const userInfo = useSelector((state) => state.bazar.userInfo);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (formData.password !== formData.confirmPassword) {
  //     console.error('Password and confirm password do not match');
  //     toast.error('Password and confirm password do not match');
  //     // Optionally, display an error message to the user
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       'http://localhost:8081/api/register',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     // const response = await fetch('http://localhost:8081/api/register', {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify(formData),
  //     // });

  //     // Check if response is defined and has data property

  //     // Dispatch the createAccountSuccess action with userInfo
  //     if (response.ok) {
  //       // Sign-in successful
  //       console.log('Sign-in successful');
  //       console.log('Server Response:', response.data); // Use response.data directly
  //       // JSON-parsed data

  //       const newToken = response.token;
  //       localStorage.setItem('authToken', newToken);

  //       dispatch(
  //         createAccountSuccess({
  //           userInfo: {
  //             userId: response.userInfo.userId,
  //             email: response.userInfo.email,
  //             firstName: response.userInfo.firstName,
  //             lastName: response.userInfo.lastName,
  //           },
  //           authToken: newToken,
  //         })
  //       );

  //       toast.success('Registration Successful!');
  //       navigate('/');
  //     } else {
  //       console.error('Error', response.error);
  //       toast.error("Email/Password Doesn't Match");
  //       if (response.error === "Password can't be blank") {
  //         toast.error("Password can't be blank");
  //       } else {
  //         toast.error("Email/Password Doesn't Match");
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Registration failed:', error);
  //     dispatch(
  //       createAccountFailure(error.response?.data?.error || 'Unknown error')
  //     );
  //     toast.error(`${error.response?.data?.error || 'Unknown error'}`);
  //   }
  //   // axios
  //   //   .post('http://localhost:8081/api/register', formData, {
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //   })
  //   //   .then((response) => {
  //   //     // Handle the response
  //   //     console.log('Registration successful:', response.data);
  //   //     // Optionally, redirect the user or perform other actions
  //   //     dispatch(
  //   //       addUser({
  //   //         _id: response.data._id,
  //   //         name: response.data.name,
  //   //         email: response.data.email,
  //   //       })
  //   //     );

  //   //     // Log the userInfo to the console
  //   //     console.log('User Info:', response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     // Handle errors
  //   //     console.error('Registration failed:', error);
  //   //     // Optionally, show an error message to the user
  //   //     dispatch(
  //   //       createAccountFailure(error.response?.data?.error || 'Unknown error')
  //   //     );
  //   //     toast.error(`${error.response.data.error}`);
  //   //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://becks-best-c64383031a9a.herokuapp.com/api/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the response
      console.log('Registration successful:', response.data);

      const { data } = response;

      const newToken = data.token; // Adjust this based on your actual server response structure
      localStorage.setItem('authToken', newToken);

      if (data && data.userInfo && data.token) {
        console.log(data.userInfo.firstName);
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
      } else {
        console.error('Invalid response format:', response);
        // Handle the error or show a toast message to the user
        toast.error('Invalid response format');
      }

      // Optionally, redirect the user or perform other actions
      navigate('/'); // Replace '/dashboard' with the desired redirection path
    } catch (error) {
      // Handle errors
      console.error('Registration failed:', error);

      dispatch(
        createAccountFailure(error.response?.data?.error || 'Unknown error')
      );
      toast.error(`${error.response.data.error}`);
    }
  };
  return (
    <div className="relative bg-white h-full w-full flex items-center justify-center flex-col mt-[100px]">
      <H1 className="">REGISTER</H1>
      <p className="p-[25px] font-light text-[1rem]">
        If you have an issue please call{' '}
        <span className="transition transition-2000ms ease-in-out hover:font-normal hover:cursor-pointer">
          0800-909-9090
        </span>
      </p>
      <div className="border border-solid border-[#eee] p-[25px] w-[500px] my-[25px]">
        <h2 className="text-[1.2rem] font-normal uppercase">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <div className="text-[0.9rem] pt-[15px] pb-[10px]">First Name:</div>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-solid border-[#eee] p-[15px] py-[10px] w-full text-gray-500"
            />
          </label>
          <br />

          <label>
            <div className="text-[0.9rem] pt-[15px] pb-[10px]">Last Name:</div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-solid border-[#eee] p-[15px] py-[10px] w-full text-gray-500"
            />
          </label>
          <br />

          <label>
            <div className="text-[0.9rem] pt-[15px] pb-[10px]">
              Email Address:
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
              required
              className="border border-solid border-[#eee] p-[15px] py-[10px] w-full text-gray-500"
            />
          </label>
          <br />

          <label>
            <div className="text-[0.9rem] pt-[15px] pb-[10px]">
              Confirm Password:{' '}
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="border border-solid border-[#eee] p-[15px] py-[10px] w-full text-gray-500"
            />
          </label>
          <br />

          <button
            type="submit"
            className="text-base bg-[#FF0054] uppercase text-[2rem] text-white w-full py-3 mt-6 hover:bg-[#ff3b7c] duration-300 font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
      <div className="border border-solid border-[#eee] p-[25px] w-[500px] my-[25px]">
        <h2 className="text-[1.1rem] font-light uppercase">
          Already have an account?
        </h2>
        <Link to="/sign-in">
          <button className="text-base bg-gray-500 uppercase text-[2rem] text-white w-full py-3 mt-6 hover:bg-gray-400 duration-300 font-medium">
            SIGN IN
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

export default CreateAccountPage;
