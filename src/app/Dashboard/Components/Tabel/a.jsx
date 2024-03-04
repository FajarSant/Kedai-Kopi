import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationModal from './Menu/ConfirmasiModal';
import EditModal from './Menu/EditModal';
import AddModal from './Menu/ModalForm';
import CategoryCard from "./Table/CategoryCard"

const MenuTable = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await fetch('/api/product');
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (newData) => {
    newData.Harga = parseFloat(newData.Harga);
    newData.Stok = parseInt(newData.Stok, 10);

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const data = await response.json();
        setProducts((prevProducts) => [...prevProducts, data]);
        toast.success("Produk berhasil ditambahkan");
        fetchData();
      } else {
        toast.error("Gagal menambahkan produk. Pastikan data valid.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Terjadi kesalahan internal saat menambahkan produk.");
    } finally {
      closeAddModal();
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`/api/product/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts((prevProducts) => prevProducts.filter((p) => p.ProdukID !== productId));
        toast.success("Produk berhasil dihapus");
      } else {
        toast.error("Gagal menghapus produk. Pastikan data valid.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Terjadi kesalahan internal saat menghapus produk.");
    } finally {
      closeDeleteModal();
    }
  };

  const openDeleteModal = (productId) => {
    setDeleteProductId(productId);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteProductId(null);
    setDeleteModalOpen(false);
  };

  const handleEdit = async (productId, editedData) => {
    try {
      const response = await fetch(`/api/product/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((p) => (p.ProdukID === productId ? { ...p, ...editedData } : p))
        );
        toast.success("Produk berhasil diedit");
      } else {
        toast.error("Gagal mengedit produk. Pastikan data valid.");
      }
    } catch (error) {
      console.error("Error editing product:", error);
      toast.error("Terjadi kesalahan internal saat mengedit produk.");
    } finally {
      closeEditModal();
    }
  };

  const openEditModal = (productId) => {
    setEditProductId(productId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditProductId(null);
    setEditModalOpen(false);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const totalProducts = products || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = totalProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(totalProducts.length / itemsPerPage);

  return (
    <div clasname="">
      <CategoryCard />
    <div className="sm:p-4 p-2 relative overflow-hidden bg-white rounded-2xl">
      <ToastContainer />
      <button className='bg-green-500 rounded-lg p-2 mb-4 hover:bg-green-800 shadow-md' onClick={openAddModal}>Tambahkan</button>
      {totalProducts.length > 0 && (
        <div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-blue-600">
              <tr>
                <th className="py-2  border-b">ID</th>
                <th className="py-2  border-b">Nama Produk</th>
                <th className="py-2  border-b">Deskripsi</th>
                <th className="py-2  border-b">Harga</th>
                <th className="py-2  border-b">Stok</th>
                <th className="py-2  border-b">Kategori</th>
                <th className="py-2  border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product, index) => (
                <tr key={index}>
                  <td className="py-1 bg-slate-400 border-b justify-center text-center">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="py-1 bg-slate-400 border-b justify-center text-center">{product.NamaProduk}</td>
                  <td className="py-1 bg-slate-400 border-b justify-center text-center">{product.Deskripsi}</td>
                  <td className="py-1 bg-slate-400 border-b justify-center text-center">{product.Harga}</td>
                  <td className="py-1 bg-slate-400 border-b justify-center text-center">{product.Stok}</td>
                  <td className="py-1 bg-slate-400 border-b justify-center text-center">{product.Kategori}</td>
                  <td className="py-1 bg-slate-400 border-b text-center justify-center">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => openEditModal(product.ProdukID)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => openDeleteModal(product.ProdukID)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-4">
            <div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <div>
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </div>
      )}

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={closeDeleteModal}
        onConfirm={() => handleDelete(deleteProductId)}
        product={totalProducts.find((p) => p.ProdukID === deleteProductId)}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onEdit={(editedData) => handleEdit(editProductId, editedData)}
        product={totalProducts.find((p) => p.ProdukID === editProductId)}
      />

      <AddModal isOpen={isAddModalOpen} onClose={closeAddModal} onAdd={handleAdd} />
    </div>
    </div>
  );
};

export default MenuTable;
