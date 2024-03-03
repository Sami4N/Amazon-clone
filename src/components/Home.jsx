import React, { useEffect, useState } from 'react';
import axios from 'axios';
import headset from '../assets/headset.webp'
import keyboard from '../assets/keyboard2.webp'
import mouse from '../assets/mouse.webp'
import chair from '../assets/chair.webp'
import dining from '../assets/dining.webp'
import home from '../assets/home.webp'
import kitchen from '../assets/kichen.webp'
import beauty from '../assets/beauty.webp'
import deal from '../assets/deals.webp'
import phone from '../assets/phone.webp'
import tab from '../assets/tab.jpg'
import pc from '../assets/pc.webp'
import tv from '../assets/tv.webp'


const Home = () => {
  const [products, setProducts] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  const [product4, setProduct4] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageUrls = [
    'url("src/assets/bg1.webp")',
    'url("src/assets/bg4.webp")',
    'url("src/assets/bg2.webp")',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    
    return () => clearInterval(intervalId);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to bottom, transparent, rgb(223, 223, 223)), ${imageUrls[currentIndex]}`,
    transition: 'background-image 0.5s ease-in-out'
  };


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
<div className='w-full h-auto object-cover py-4 bg-center bg-cover' style={backgroundImageStyle}>
    <h1 className='py-20 px-20 pb-40 sm:text-4xl text-2xl lg:text-5xl font-extrabold text-gray-800'>Fill your bascket with Joy</h1>
    <div className='grid grid-cols-4 gap-5 p-6'>
      <div className='bg-white rounded-sm h-[29rem]'>
        <h1 className='text-2xl font-bold p-6 pb-4'>Gaming accessories</h1>
        <div className='grid grid-cols-2 mb-3'>
          <div>
            <img className='bg-white w-full h-[8rem] p-1' src={headset} alt="/" />
            <p className='text-sm font-semibold px-4'>Headsets</p>
          </div>
          <div>
            <img className='bg-white w-full h-[8rem] py-4' src={keyboard} alt="/" />
            <p className='text-sm font-semibold px-4'>Keyboards</p>
          </div>
          <div className='mt-8'>
            <img className='bg-white w-full h-[8rem] p-2' src={mouse} alt="/" />
            <p className='text-sm font-semibold px-4'>Computer mice</p>
          </div>
          <div className='mt-8'>
            <img className='bg-white w-full h-[8rem] p-1' src={chair} alt="/" />
            <p className='text-sm font-semibold px-4'>Chairs</p>
          </div> 
        </div>
        <a className='text-sm p-6 text-blue-700 font-semibold hover:text-red-800' href="#">See more</a>
      </div>
      <div className='bg-white rounded-sm h-[29rem]'>
        <h1 className='text-2xl font-bold p-6 pb-4'>Refresh your space</h1>
        <div className='grid grid-cols-2 gap-3 px-6'>
          <div>
            <img className='w-full h-[8rem]' src={dining} alt="/" />
            <p className='text-sm font-semibold'>Dining</p>
          </div>
          <div>
            <img className='w-full h-[8rem]' src={home} alt="/" />
            <p className='text-sm font-semibold'>Home</p>
          </div>
          <div className='my-4 mt-3'>
            <img className='w-full h-[8rem]' src={kitchen} alt="/" />
            <p className='text-sm font-semibold'>Kitchen</p>
          </div>
          <div className='my-4 mt-3'>
            <img className='w-full h-[8rem]' src={beauty} alt="/" />
            <p className='text-sm font-semibold'>Health and Beauty</p>
          </div> 
        </div>
        <a className='text-sm p-6 text-blue-700 font-semibold hover:text-red-800' href="#">See more</a>
      </div>
      <div className='bg-white rounded-sm h-[29rem]'>
        <h1 className='text-2xl font-bold p-6 pb-4'>Deals in PCs</h1>
        <img className='p-6  pb-9' src={deal} alt="/" />
        <a className='text-sm px-6 text-blue-700 font-semibold hover:text-red-800' href="#">Shop now</a>
      </div>
      <div className='bg-white rounded-sm h-[29rem]'>
        <h1 className='text-2xl font-bold p-6 pb-4'>Amazon Gadget Store</h1>
        <div>
            <img className='px-6 h-40 w-full' src={phone} alt="/" />
            <p className='px-6 font-semibold'>Smartphones</p>
          </div>
        <div className='flex gap-1 px-6 py-4 pb-7'>
          <div>
            <img className='w-full h-20' src={tab} alt="/" />
            <p className='font-semibold'>Tablets</p>
          </div>
          <div>
            <img className='w-full h-20' src={pc} alt="/" />
            <p className='font-semibold'>Laptops</p>
          </div>
          <div>
            <img className='w-full h-20' src={tv} alt="/" />
            <p className='font-semibold'>TVs</p>
          </div> 
        </div>
        <a className='text-sm px-6 text-blue-700 font-semibold hover:text-red-800' href="#">See more from Amazon Gadgets</a>
      </div>

    </div>
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

