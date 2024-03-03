// ProductList.js
"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from './ProdukCard';
import Menu from "./Menu"
import Header from "./Header"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product');
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-4 mt-5"><Menu /></div>
        {/* <h1 className=' font-bold ml-4 sm:ml-10'>PRODUCT</h1> */}
      <div className="container mx-auto h-full my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 sm:p-4">
        {products.map((product) => (
          <ProductCard key={product.ProdukID} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
