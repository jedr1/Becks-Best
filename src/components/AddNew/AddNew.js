import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  position: relative;
  padding-top: 200px;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  padding: 100px;
  flex-direction: column;
  gap: 20px;
`;
const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  width: 300px;
  margin-left: 25px;

  &:focus {
    border-color: #007bff;
  }
`;
const Textarea = styled.textarea`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;
const FileUpload = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    price: '',

    cover: null,
    _id: '',
    e: '',
    r: '',
    n: '',
    b: '',
    sale: '',
    measure: '',
    oldPrice: '',
  });
  const handleFileChange = (e) => {
    setFormData({ ...formData, cover: e.target.files[0] });
  };
  const handleSubmit = async () => {
    const {
      title,
      desc,
      price,
      _id,
      cover,
      e,
      r,
      n,
      b,
      sale,
      measure,
      oldPrice,
    } = formData;

    const formDataForSub = new FormData();
    formDataForSub.append('title', title);
    formDataForSub.append('desc', desc);
    formDataForSub.append('price', price);

    formDataForSub.append('cover', cover);
    formDataForSub.append('_id', _id);
    formDataForSub.append('e', e);
    formDataForSub.append('r', r);
    formDataForSub.append('n', n);
    formDataForSub.append('b', b);
    formDataForSub.append('sale', sale);
    formDataForSub.append('measure', measure);
    formDataForSub.append('oldPrice', oldPrice);

    try {
      const response = await axios.post(
        'https://becks-best-c64383031a9a.herokuapp.com/api/products',
        formDataForSub,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === 'Success') {
        console.log('Product added successfully');
        fetchData();
        setFormData({
          title: '',
          desc: '',
          price: '',

          cover: null,
          _id: '',
          e: '',
          r: '',
          n: '',
          b: '',
          sale: '',
          measure: '',
          oldPrice: '',
        });
      } else {
        console.log('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://becks-best-c64383031a9a.herokuapp.com/api/products'
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:8081/api/products');
    //     setData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    fetchData();
  }, []);
  //   const [file, setFile] = useState();
  //   const [data, setData] = useState([]);

  //   const handleFile = (e) => {
  //     setFile(e.target.files[0]);
  //   };

  //   useEffect(() => {
  //     axios
  //       .get('http://localhost:8081/')
  //       .then((res) => {
  //         setData(res.data);
  //         axios.get('http://localhost:8081/').then((res) => {
  //           setData(res.data);
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  //   const handleUpload = () => {
  //     const formData = new FormData();
  //     formData.append('image', file);
  //     axios
  //       .post('http://localhost:8081/upload', formData)
  //       .then((res) => {
  //         if (res.data.Status === 'Success') {
  //           console.log('Succeded');
  //           window.location.reload();
  //         } else {
  //           console.log('Failed');
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };
  return (
    // <div classNae="container">
    //   <input type="file" onChange={handleFile} />
    //   <button onClick={handleUpload}>Upload</button>
    //   <br />
    //   {data.map((imageData) => (
    //     <img
    //       key={imageData.id} // Make sure each image has a unique key
    //       src={`http://localhost:8081/images/` + imageData.image}
    //       alt=""
    //       style={{ width: '500px', height: '500px', margin: '10px' }}
    //     />
    //   ))}
    //   <img
    //     src={`http://localhost:8081/images/` + data.image}
    //     alt=""
    //     style={{ width: '500px', height: '500px' }}
    //   />
    // </div>
    <Div>
      {data.map((imageData) => (
        <div
          key={imageData.id}
          style={{
            marginBottom: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          }}
        >
          <div>_id: {imageData._id}</div>
        </div>
      ))}
      <Wrapper>
        <div>
          <label>Title:</label>
          <Input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Description:</label>
          <Textarea
            value={formData.desc}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          ></Textarea>
        </div>
        <div>
          <label>Price:</label>
          <Input
            type="text"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>

        <div>
          <label>Cover Photo:</label>
          <Input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <div>
            <label>_id:</label>
            <Input
              type="text"
              value={formData._id}
              onChange={(e) =>
                setFormData({ ...formData, _id: e.target.value })
              }
            />
          </div>
          <label>Earing?:</label>
          <Input
            type="text"
            value={formData.e}
            onChange={(e) => setFormData({ ...formData, e: e.target.value })}
          />
        </div>
        <div>
          <label>Ring?:</label>
          <Input
            type="text"
            value={formData.r}
            onChange={(e) => setFormData({ ...formData, r: e.target.value })}
          />
        </div>
        <div>
          <label>Necklace?:</label>
          <Input
            type="text"
            value={formData.n}
            onChange={(e) => setFormData({ ...formData, n: e.target.value })}
          />
        </div>
        <div>
          <label>Bracelet?:</label>
          <Input
            type="text"
            value={formData.b}
            onChange={(e) => setFormData({ ...formData, b: e.target.value })}
          />
        </div>
        <div>
          <label>sale?:</label>
          <Input
            type="text"
            value={formData.sale}
            onChange={(e) => setFormData({ ...formData, sale: e.target.value })}
          />
        </div>
        <div>
          <label>measurements:</label>
          <Input
            type="text"
            value={formData.measure}
            onChange={(e) =>
              setFormData({ ...formData, measure: e.target.value })
            }
          />
        </div>
        <div>
          <label>oldPrice:</label>
          <Input
            type="text"
            value={formData.oldPrice}
            onChange={(e) =>
              setFormData({ ...formData, oldPrice: e.target.value })
            }
          />
        </div>

        <button onClick={handleSubmit}>Add Product</button>
      </Wrapper>
      <div>
        {data.map((imageData) => (
          <div key={imageData.id} style={{ marginBottom: '20px' }}>
            <img
              src={
                `https://becks-best-c64383031a9a.herokuapp.com/api/products/` +
                imageData.cover
              }
              alt=""
              style={{ width: '200px', height: '200px', marginRight: '10px' }}
            />
            <div>
              <p>Title: {imageData.title}</p>
              <p>Description: {imageData.desc}</p>
              <p>Price: {imageData.price}</p>
              <p>Measurements: {imageData.measure}</p>
            </div>
            <div>
              <Link to={`/update/${imageData.id}`}>Update</Link>
            </div>
          </div>
        ))}
      </div>
    </Div>
  );
};

export default FileUpload;
