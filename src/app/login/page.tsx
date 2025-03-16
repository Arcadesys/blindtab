'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, loading } = useAuth();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/songs';
  const registered = searchParams.get('registered');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      router.push(callbackUrl);
    }
  }, [isAuthenticated, loading, router, callbackUrl]);

  // Show success message if just registered
  useEffect(() => {
    if (registered) {
      setSuccess('Registration successful! Please log in.');
    }
  }, [registered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(email, password);

      if (!result.success) {
        setError(result.error || 'Invalid email or password');
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <div className="max-w-md mx-auto my-12 p-6">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded text-lg"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-lg">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded text-lg"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
} 