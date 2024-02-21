"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function SignupBox() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validation
    if (!name || !username || !password) {
      // Handle validation error (show an error message, etc.)
      console.error('Please fill in all the fields.');
      return;
    }

    // API request to sign up
    try {
      const response = await fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          userName: username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming your API returns a token in the response
        const token = data.token;

        // Save token in a cookie
        document.cookie = `url-short-token=${token}; path=/`;

        // Redirect to another page (or you can perform other actions)
        router.push('/dashboard');
      } else {
        // Handle API error (show an error message, etc.)
        console.error('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <div className="mx-auto shadow-2xl bg-white py-8 px-6 rounded-lg w-full max-w-md">
      <h3 className="text-2xl font-bold text-center mb-4">
        Sign Up
      </h3>

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <div className="flex flex-col mb-4 gap-2">
          <label htmlFor="name" className="text-base font-medium block">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4 gap-2">
          <label htmlFor="username" className="text-base font-medium block">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-medium block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="mt-5 bg-blue-500 text-white py-2 px-4 rounded-full w-full flex items-center justify-center">
          Sign Up
          <span className="ml-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.29688 17.9301L14.0019 12.2251C14.6756 11.5513 14.6756 10.4488 14.0019 9.77507L8.29688 4.07007" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-gray-600 text-sm font-semibold">
          Already have an account?
        </span>
        <a href="http://localhost:3000/signin" className="text-blue-500 text-sm font-bold ml-1">
          Sign In
        </a>
      </div>
    </div>
  );
}
