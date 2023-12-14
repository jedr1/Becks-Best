import axios from 'axios';
import { useSelector, UseSelector } from 'react-redux';

const PayButton = ({ productData }) => {
  const user = useSelector((state) => state.bazar);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const handleCheckout = () => {
    axios
      .post(
        'https://becks-best-c64383031a9a.herokuapp.com/stripe/create-checkout-session',
        {
          productData,
          userId: user._id,
        }
      )
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  const handleCheckOut = () => {
    axios
      .post('http://localhost:8081/api/stripe/create-checkout-session', {
        productData,
        userId: user._id,
      })
      .then((res) => {
        if (userInfo) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button>Check Out</button>
    </>
  );
};

export default PayButton;
