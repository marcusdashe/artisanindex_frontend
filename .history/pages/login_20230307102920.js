import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const loginUrl = "http://127.0.0.1:8001/api/auth/login";

  const login = async (email, password) => {
    try {
      const response = await axios.post(loginUrl, { email, password });
      return response;
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    let cookie = Cookies.get("jwt");
    console.log(response);
    // if (response && response.status) {
    //   router.replace(`/${response.jwt}/dashboard`);
    //   console.log(response);
    // }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>C-STEMP AIR | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        height={100}
        width={100}
        src="/assets/logo.png"
        alt="logo"
        className="object-scale-down h-50 w-20 ml-10 mt-1 mb-10"
      />
      <h3 className="text-2xl font-thin mb-[70px]">
        Artisans Information Repository
      </h3>

      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl text-left w-full font-bold mb-8">
          Welcome back!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label htmlFor="email" className="text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#8D161A]"
            required
          />

          <label htmlFor="password" className="text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md py-2 px-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#8D161A]"
            required
          />

          <button
            type="submit"
            className="bg-[#8D161A] text-white rounded-md py-2 px-4 font-medium hover:hover:bg-[#4a3e3e] duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
      <p className="text-[#9b8485]">{error.message}</p>
    </div>
  );
}
