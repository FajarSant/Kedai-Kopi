import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationModal from '../Menu/ConfirmasiModal';
import EditModal from '../Menu/EditModal';
import AddModal from '../Menu/ModalForm';

const Produk = ({ onEdit }) => {
    const [products, setProducts] = useState([]);
    const [deleteProductId, setDeleteProductId] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

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

    const ProdukTable = () => {
        return (
            <div class="relative overflow-x-auto shadow-md rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Our products
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                        <div className="flex justify-between mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
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
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                NO
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Diskripsi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stok
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Hapus</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((product, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {(currentPage - 1) * itemsPerPage + index + 1}
                                </td>
                                <td className="px-6 py-4">{product.NamaProduk}</td>
                                <td className="px-6 py-4">{product.Diskripsi}</td>
                                <td className="px-6 py-4">{product.Harga}</td>
                                <td className="px-6 py-4">{product.Stok}</td>
                                <td className="px-6 py-4">{product.Kategori}</td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => openEditModal(product.ProdukID)}
                                    >
                                        Edit
                                    </a>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() => openDeleteModal(product.ProdukID)}
                                    >
                                        Hapus
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="overflow-x-auto">
            <ProdukTable />


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
    );
};

export default Produk;
