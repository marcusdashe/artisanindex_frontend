import { useState } from "react";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h3 className="text-3xl font-bold mb-4">
        Artisans Information Repository
      </h3>
      <Head>
        <title>ChatGPT Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">ChatGPT</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label htmlFor="email" className="text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="password" className="text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md py-2 px-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
