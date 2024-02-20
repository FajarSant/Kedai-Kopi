import { useState } from 'react';

export default function TambahProduk() {
  const initialFormData = {
    NamaProduk: '',
    Deskripsi: '',
    Harga: '',
    Stok: '',
    Kategori: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [validation, setValidation] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidation((prevValidation) => ({
      ...prevValidation,
      [name]: '',
    }));
  };


const handleSubmit = async () => {
  setFormSubmitted(true);
  const newValidation = {};
  Object.keys(formData).forEach((key) => {
    if (formData[key] === '') {
      newValidation[key] = 'Harus diisi';
    }
  });

  if (Object.keys(newValidation).length > 0) {
    setValidation(newValidation);
    return;
  }

  try {
    const parsedHarga = parseFloat(formData.Harga);
    const parsedStok = parseFloat(formData.Stok);
    const response = await fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        Harga: parsedHarga || 0,
        Stok: parsedStok || 0,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setFormData(initialFormData);

      setModalOpen(false);
      alert('Produk berhasil ditambahkan!');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error adding product:', error);
    alert('Terjadi Kesalahan Server. Silakan coba lagi nanti.');
  } finally {
    // Reset status pengiriman formulir
    setFormSubmitted(false);
  }
};

// ...


  return (
    <div>
      <button
        type="button"
        className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4"
        onClick={() => setModalOpen(true)}
      >
        Tambahkan Menu
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Tambah Produk</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="NamaProduk">Nama Produk:</label>
                <input
                  type="text"
                  id="NamaProduk"
                  name="NamaProduk"
                  value={formData.NamaProduk}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                />
                {isFormSubmitted && validation.NamaProduk && (
                  <p className="text-red-500">{validation.NamaProduk}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="Deskripsi">Deskripsi Produk:</label>
                <textarea
                  id="Deskripsi"
                  name="Deskripsi"
                  value={formData.Deskripsi}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                ></textarea>
                {isFormSubmitted && validation.Deskripsi && (
                  <p className="text-red-500">{validation.Deskripsi}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="Harga">Harga Produk:</label>
                <input
                  type="number"
                  id="Harga"
                  name="Harga"
                  value={formData.Harga}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                />
                {isFormSubmitted && validation.Harga && (
                  <p className="text-red-500">{validation.Harga}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="Stok">Stok Produk:</label>
                <input
                  type="number"
                  id="Stok"
                  name="Stok"
                  value={formData.Stok}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                />
                {isFormSubmitted && validation.Stok && (
                  <p className="text-red-500">{validation.Stok}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="Kategori">Kategori Produk:</label>
                <input
                  type="text"
                  id="Kategori"
                  name="Kategori"
                  value={formData.Kategori}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                />
                {isFormSubmitted && validation.Kategori && (
                  <p className="text-red-500">{validation.Kategori}</p>
                )}
              </div>

              <div className="flex">
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Tambah Produk
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white py-2 px-4 rounded ml-2"
                  onClick={() => setModalOpen(false)}
                >
                  Tutup Modal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
