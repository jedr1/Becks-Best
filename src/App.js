import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {
  createBrowserRouter,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
  ScrollRestoration,
} from 'react-router-dom';

import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Products/Product';
import Login from './pages/Login';
import FileUpload from './components/AddNew/AddNew';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Update from './components/AddNew/Update';
import Products from './components/Products/Products';
import Shop from './pages/Shop';
import Dropdown from './components/Navbar/Dropdown';
import CheckoutSuccess from './components/PayButton/CheckoutSuccess';
import NotFound from './components/PayButton/NotFound';
import CreateAccountPage from './components/UserAuth/CreateAccount';
import SignInForm from './components/UserAuth/SignIn';
import ProfilePage from './components/UserAuth/ProfilePage';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggle2 = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar toggle={toggle} isOpen={isOpen} toggle2={toggle2} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productsData,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/add-new',
        element: <FileUpload />,
      },
      {
        path: '/update/:id',
        element: <Update />,
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: productsData,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/create-account',
        element: <CreateAccountPage />,
      },
      {
        path: '/sign-in',
        element: <SignInForm />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/checkout-success',
        element: <CheckoutSuccess />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="font-bodyFont App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
