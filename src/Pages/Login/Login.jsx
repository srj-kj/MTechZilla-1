/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { auth } from '../../firebse/serviceAccount';
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import {signInWithEmailAndPassword,
} from "firebase/auth";
import { invalidPassword } from '../../components/Tostify';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/User';

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email, password);
      dispatch(login(email));
      navigate("/");
    } catch (error) {
      console.error('Error signing up:', error.message);
      invalidPassword("Invalid Email or password");
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center text-indigo-600 block text-2xl">Login</h1>
        <form>
          <Input
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="me@example.com"
            autoFocus={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            name="password"
            label="Password"
            placeholder="••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button value="Login" onClick={handleLogin} />
        <p className="font-medium text-center mt-3 text-black">Don't Have An Account?</p>

        <Link
              to="/signup"
              className="mt-6 block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
              >
               <span className="ml-28">Signup</span> 
            </Link>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default LoginForm;
