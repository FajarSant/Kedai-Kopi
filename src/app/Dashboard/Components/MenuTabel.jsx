import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";

const MenuTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
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
                    className="text-red-500 hover:text-red-700"
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
