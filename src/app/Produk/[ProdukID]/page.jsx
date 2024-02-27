"use client"
// ./src/app/Produk/[ProdukID]/page.jsx
import React, { useEffect, useState } from 'react';

const ProdukDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const ProdukID = pathArray[pathArray.length - 1];

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/product/${ProdukID}`);
        const data = await response.json();

        if (!data || !data.data) {
          console.log('Data not found for ProdukID:', ProdukID);
          return;
        }

        console.log('Data found for ProdukID:', ProdukID);
        setProduct(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log('Error fetching data for ProdukID:', ProdukID);
      }
    };

    fetchData();
  }, []); // ProdukID sebagai bagian dari dependency array

  // Menangani keadaan loading atau data kosong
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.NamaProduk}</h1>
      <p>{product.Deskripsi}</p>
      <p>Harga: Rp {product.Harga}</p>
      <p> Jenis : {product.Kategori}</p>
      <p> Jml. Stock : {product.Stok}</p>
      {/* Tambahkan detail produk sesuai kebutuhan */}
    </div>
  );
};

export default ProdukDetail;
