// ProductList.js
"use client"
import React, { useEffect, useState } from 'react';
import ProductCard from './Components/ProdukCard';

const Product = () => {
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
      <div className="p-4">Menu</div>
      <div className="container mx-auto h-full my-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.ProdukID} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
