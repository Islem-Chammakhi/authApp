
import React, { useState } from "react";
import axios from "axios";
import { Link ,useNavigate  } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const {user}=useAuthContext()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      setError(null)
      const response = await axios.post(import.meta.env.BACKEND_BASE_URL+"/api/users/signin", formData);
      setSuccess("User registered successfully!");
      setError("");
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(response.data))

      // update the auth context
      dispatch({type: 'LOGIN', payload: response.data})
      setIsLoading(false)
      if(user){ 
        navigate('/t5azwi9a');
      }
    } catch (err) {
      setIsLoading(false)
      setError(err.response ? err.response.data.message : "Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-500 hover:text-blue-700"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
