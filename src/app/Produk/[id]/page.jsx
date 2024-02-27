// pages/Produk/[id].js
import React, { useEffect, useState } from 'react';

const ProdukDetail = ({ product }) => {
  // Menangani keadaan loading atau data kosong
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.NamaProduk}</h1>
      <p>{product.Deskripsi}</p>
      <p>Harga: Rp {product.Harga}</p>
      {/* Tambahkan detail produk sesuai kebutuhan */}
    </div>
  );
};

export default ProdukDetail;

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const response = await fetch(`/api/product/${id}`);
    const data = await response.json();

    if (!data || !data.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: data.data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}
