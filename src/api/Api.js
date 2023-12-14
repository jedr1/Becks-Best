import axios from 'axios';

export async function productsData() {
  const products = await axios.get(
    'https://becks-best-c64383031a9a.herokuapp.com/api/products/'
  );
  return products;
}
export async function latestData() {
  const products = await axios.get(
    'https://becks-best-c64383031a9a.herokuapp.com/api/latest/'
  );
  return products;
}

// import axios from 'axios';

// export async function productsData() {
//   const products = await axios.get(
//     'https://fakestoreapiserver.reactbd.com/products'
//   );
//   return products;
