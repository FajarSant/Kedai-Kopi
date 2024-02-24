"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaInstagram } from "react-icons/fa";

// Create the SignIn component
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use email and password for signIn
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setLoginError(
        "Login gagal. Silakan periksa kembali email dan kata sandi Anda."
      );
    } else {
      setLoginError(null);
      window.location.href = "/";
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  // Handle Instagram sign-in
  const handleInstagramSignIn = async () => {
    await signIn("instagram");
    // Gantilah 'instagram' dengan nama provider Instagram yang sesuai dengan konfigurasi Anda
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              loginError ? "border-red-500" : ""
            }`}
            required
          />
          {loginError && (
            <p className="text-red-500 text-sm mt-1">{loginError}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              loginError ? "border-red-500" : ""
            }`}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Masuk
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none flex items-center"
        >
          <FaGoogle className="mr-2" />
          Masuk dengan Google
        </button>

        <button
          onClick={handleInstagramSignIn}
          className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none flex items-center"
        >
          <FaInstagram className="mr-2" />
          Masuk dengan Instagram
        </button>
        <p className="p-4">
          Belum punya akun?{" "}
          <Link href="/Register">
            <span className="text-blue-300 hover:text-blue-900">Daftar</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
