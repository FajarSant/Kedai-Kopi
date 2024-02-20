import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Components/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";

const MenuTable = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const handleEdit = (productId) => {
    console.log(`Edit product with ID: ${productId}`);
    if (onEdit && typeof onEdit === 'function') {
      onEdit(productId);
    }
  };
  

  const handleDelete = async (ProdukID) => {
    try {
      // Assuming your API supports DELETE method for deleting a product
      const response = await fetch(`/api/product/${ProdukID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted product from the state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.ProdukID !== ProdukID)
        );

        toast.success('Product deleted successfully');
      } else {
        toast.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        console.log(data.data); // Log the fetched data
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="p-4 relative overflow-hidden">
      <ToastContainer />

      {products.length === 0 ? (
        <Loading />
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-blue-600">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nama Produk</th>
            <th className="py-2 px-4 border-b">Deskripsi</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Stok</th>
            <th className="py-2 px-4 border-b">Kategori</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.ProdukID}>
              <td className="py-2 px-4 bg-slate-400 border-b">
                {product.ProdukID}
              </td>
              <td className="py-2 px-4 bg-slate-400 border-b">
                {product.NamaProduk}
              </td>
              <td className="py-2 px-4 bg-slate-400 border-b">
                {product.Deskripsi}
              </td>
              <td className="py-2 px-4 bg-slate-400 border-b">
                {product.Harga}
              </td>
              <td className="py-2 px-4 bg-slate-400 border-b">
                {product.Stok}
              </td>
              <td className="py-2 px-4 bg-slate-400 border-b">
                {product.Kategori}
              </td>
              <td className="py-2 px-4 bg-slate-400 border-b">
              <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleEdit(product.ProdukID)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleDelete(product.ProdukID)}
                  >
                    <FaTrash />
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default MenuTable;
