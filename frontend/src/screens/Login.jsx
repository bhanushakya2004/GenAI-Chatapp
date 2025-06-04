import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../context/user.context';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email || !password) {
      toast.error('Email and password are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await axios.post('/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      toast.success('Login successful!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFF4E4] px-4">
      <section className="bg-[#F8E0C9] p-10 rounded-2xl shadow-2xl max-w-md w-full border border-[#B1AA81]">
        <h2 className="text-3xl font-extrabold text-[#2B1A12] mb-6 text-center">Login</h2>
        <form onSubmit={submitHandler} noValidate>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#2B1A12] mb-2 font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-[#FFF4E4] text-[#2B1A12] border border-[#B1AA81] placeholder-[#B1AA81] focus:ring-[#DC6D18] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#2B1A12] mb-2 font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded bg-[#FFF4E4] text-[#2B1A12] border border-[#B1AA81] placeholder-[#B1AA81] focus:ring-[#DC6D18] focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-3 rounded text-white font-semibold tracking-wide transition ${
              isSubmitting ? 'bg-[#DC6D18]/70 cursor-not-allowed' : 'bg-[#DC6D18] hover:bg-[#c85e10]'
            }`}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-[#2B1A12] mt-6 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#DC6D18] font-semibold hover:underline">Create one</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
