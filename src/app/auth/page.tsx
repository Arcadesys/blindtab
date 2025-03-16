'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

// Get the base URL for API calls
const getBaseUrl = () => {
  // In development, use the local server
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001';
  }
  // In production, use the deployed URL
  return '';
};

export default function AuthPage() {
  const router = useRouter();
  const { login, isAuthenticated, loading } = useAuth();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/songs';
  const registered = searchParams.get('registered');
  const initialTab = searchParams.get('tab') || 'login';
  const baseUrl = getBaseUrl();
  
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  
  // Register state
  const [name, setName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      router.push(callbackUrl);
    }
  }, [isAuthenticated, loading, router, callbackUrl]);

  // Show success message if just registered
  useEffect(() => {
    if (registered) {
      setLoginSuccess('Registration successful! Please log in.');
      setActiveTab('login');
    }
  }, [registered]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    setLoginError('');

    try {
      const result = await login(loginEmail, loginPassword);

      if (!result.success) {
        setLoginError(result.error || 'Invalid email or password');
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Something went wrong. Please try again.');
    } finally {
      setIsLoginLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    setRegisterError('');

    try {
      const response = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email: registerEmail,
          password: registerPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setLoginSuccess('Registration successful! Please log in.');
      setActiveTab('login');
      
      // Clear register form
      setName('');
      setRegisterEmail('');
      setRegisterPassword('');
    } catch (error: any) {
      setRegisterError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsRegisterLoading(false);
    }
  };

  if (loading) {
    return <div className="max-w-md mx-auto my-12 p-6">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <div className="flex mb-6 border-b">
        <button
          className={`flex-1 py-2 text-center text-lg font-medium ${
            activeTab === 'login'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={`flex-1 py-2 text-center text-lg font-medium ${
            activeTab === 'register'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('register')}
        >
          Register
        </button>
      </div>
      
      {activeTab === 'login' ? (
        <>
          {loginError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {loginError}
            </div>
          )}
          
          {loginSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              {loginSuccess}
            </div>
          )}
          
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
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
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-lg"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoginLoading}
              className="w-full p-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 disabled:bg-blue-400"
            >
              {isLoginLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </>
      ) : (
        <>
          {registerError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {registerError}
            </div>
          )}
          
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-lg">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-lg"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="registerEmail" className="block mb-2 text-lg">
                Email
              </label>
              <input
                id="registerEmail"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-lg"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="registerPassword" className="block mb-2 text-lg">
                Password
              </label>
              <input
                id="registerPassword"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded text-lg"
                required
                minLength={8}
              />
            </div>
            
            <button
              type="submit"
              disabled={isRegisterLoading}
              className="w-full p-3 bg-blue-600 text-white rounded text-lg font-medium hover:bg-blue-700 disabled:bg-blue-400"
            >
              {isRegisterLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </>
      )}
    </div>
  );
} 