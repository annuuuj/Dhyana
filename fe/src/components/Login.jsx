import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import heart from '../assets/loginre.png';
import { useNavigate } from "react-router-dom";

// ✅ Optional: Toast system inside this component (minimal example)
const useToast = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const toast = ({ title, description }) => {
    alert(`${title}\n${description}`);
    setToastMessage({ title, description });
    setTimeout(() => setToastMessage(null), 3000);
  };
  return { toast, toastMessage };
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();
  const { toast } = useToast(); // ✅ use toast system

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Client-side validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match!",
      });
      return;
    }

    try {
      // ✅ Correct backend URL (you can also use proxy + "/api/users/register")
      const res = await axios.post("http://localhost:5000/api/users/register", formData);

      const token = res.data.token;
      localStorage.setItem("token", token); // ✅ Store the token in browser

      toast({
        title: "Registration Success",
        description: "You are now logged in.",
      });

      navigate("/ai"); // ✅ Go to AI page
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={heart} alt="Mental Wellness" />
      </div>

      <div className="login-right">
        <h2>Welcome</h2>
        <h4>Sign in to your account to continue</h4>
        <form onSubmit={handleSubmit} className="login-form">
          <p>Email Address</p>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p>Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
