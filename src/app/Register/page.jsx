"use client"
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        Nama: '',
        Email: '',
        Password: '',
        Role: 'users',
        Alamat: '',
        JenisKelamin: 'Laki-laki',
    });
    const [error, setError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Registrasi berhasil, tampilkan notifikasi toast
                toast.success('Registrasi berhasil!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // Set state untuk menunjukkan bahwa registrasi berhasil
                setRegistrationSuccess(true);

                // Reset formulir setelah registrasi berhasil
                setFormData({
                    Nama: '',
                    Email: '',
                    Password: '',
                    Role: 'users',
                    Alamat: '',
                    JenisKelamin: 'Laki-laki',
                });
            } else {
                const data = await response.json();
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('Internal Server Error');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Register</h2>
                {registrationSuccess && (
                    <p className="text-green-500 text-center mt-4">Registrasi berhasil! Silakan login.</p>
                )}

                {error && <p className="mt-4 text-red-500">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="Nama" className="block text-gray-700 text-sm font-bold mb-2">
                        Nama:
                    </label>
                    <input
                        type="text"
                        id="Nama"
                        name="Nama"
                        value={formData.Nama}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="Email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="Password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="Password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Alamat" className="block text-gray-700 text-sm font-bold mb-2">
                        Alamat:
                    </label>
                    <input
                        type="text"
                        id="Alamat"
                        name="Alamat"
                        value={formData.Alamat}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="JenisKelamin" className="block text-gray-700 text-sm font-bold mb-2">
                        Jenis Kelamin:
                    </label>
                    <select
                        id="JenisKelamin"
                        name="JenisKelamin"
                        value={formData.JenisKelamin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Register
                    </button>
                    <p className='p-4'>
                        Sudah punya akun? <Link href="/signin"><span className=' text-blue-300 hover:text-blue-900'>Login</span></Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
