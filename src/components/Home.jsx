import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  const [product4, setProduct4] = useState([]);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        console.log(response);
        setProduct2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        console.log(response);
        setProduct3(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        console.log(response);
        setProduct4(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
<div className=' w-full h-full py-4 px-4 bg-no-repeat bg-cover' style={{ backgroundImage: "linear-gradient(to bottom, transparent, rgb(223, 223, 223)), url('src/assets/bg1.webp')" }}>
    <h1 className='py-20 px-20 pb-40 sm:text-4xl text-2xl lg:text-5xl font-bold text-gray-800'>Fill your bascket with Joy</h1>
    <div className='grid sm:grid-cols-2 gap-6'>
        <div className='bg-white rounded-lg md:ml-6'>
            <h1 className='font-bold text-2xl px-6 pt-3'>Men's Clothing</h1>
            <div className='grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 m-6'>
                {product3.map((product) => (
                <img className='w-full h-full p-6' key={product.id} src={product.image} alt={product.title} />
                ))}
            </div>
            <a className='m-10 text-blue-600 hover:underline' href="#">See more</a>
        </div>
        <div className='bg-white rounded-lg md:mr-6'>
            <h1 className='font-bold text-2xl px-6 pt-3'>Jewelers</h1>
            <div className='grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 m-6'>
                {product2.map((product) => (
                <img className='w-full h-full p-7' key={product.id} src={product.image} alt={product.title} />
                ))}
            </div>
            <a className='m-10 text-blue-600 hover:underline' href="#">See more</a>
        </div> 
    </div> 
    <div className=' bg-white m-6 p-6 overflow-x-scroll'>
        <h2 className='font-bold text-2xl'>Electronics</h2>
        <div className='flex'>
             {product4.map((product) => (
            <img className='w-[20%] h-60 m-5' key={product.id} src={product.image} alt={product.title} />
             ))}
        </div>
        <a className='m-10 text-blue-600 hover:underline' href="#">See more</a>

        </div> 
        <div className=' bg-white m-6 p-6 overflow-x-scroll ove'>
            <h2 className='font-bold text-2xl'>Women's Clothing</h2>
            <div className='flex'>
                {products.map((product) => (
                <img className='w-[20%] h-60 m-9' key={product.id} src={product.image} alt={product.title} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Home;

