import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/register", formData);
      console.log("User registered:", response.data);
      // Navigate to the login page after successful signup
      navigate("/loger");
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-700 min-h-screen">
      <form className="bg-white p-6 rounded-md w-1/4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Register</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition"
        >
          Register
        </button>
        <p className="text-center my-4 text-gray-700">Already have an account?</p>
        <button
          onClick={() => navigate("/loger")}
          className="border w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;