'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, logout, loading } = useAuth();
  const [fontSize, setFontSize] = useState(16);
  const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);
  const [tagsMenuOpen, setTagsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const tagsMenuRef = useRef<HTMLDivElement>(null);

  // Only render theme-dependent UI after mounting on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tagsMenuRef.current && !tagsMenuRef.current.contains(event.target as Node)) {
        setTagsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 32));
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  const handleLogout = async () => {
    await logout();
  };

  // Determine the current theme safely
  const currentTheme = mounted ? theme : 'dark';

  return (
    <nav className="bg-white dark:bg-gray-800 py-4 px-0 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold px-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          BlindTab
        </Link>
        
        <div className="flex gap-4 items-center">
          <Link href="/songs" className="text-lg hover:underline">Songs</Link>
          
          {/* Tags Dropdown */}
          <div className="relative" ref={tagsMenuRef}>
            <button
              onClick={() => setTagsMenuOpen(!tagsMenuOpen)}
              className="text-lg hover:underline flex items-center gap-1"
              aria-expanded={tagsMenuOpen}
              aria-haspopup="true"
            >
              Tags
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${tagsMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {tagsMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-10 border border-gray-200 dark:border-gray-700">
                <Link 
                  href="/tags" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => setTagsMenuOpen(false)}
                >
                  Browse Tags
                </Link>
                <Link 
                  href="/tags/manage" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => setTagsMenuOpen(false)}
                >
                  Manage Tags
                </Link>
              </div>
            )}
          </div>
          
          {/* Accessibility Menu */}
          <div className="relative">
            <button
              onClick={() => setAccessibilityMenuOpen(!accessibilityMenuOpen)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Accessibility options"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            
            {accessibilityMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Accessibility Options</h3>
                
                {mounted && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Theme</label>
                    <button
                      onClick={toggleTheme}
                      className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded flex justify-between items-center"
                    >
                      <span>{currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">
                        Press D
                      </span>
                    </button>
                  </div>
                )}
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Font Size</label>
                  <div className="flex items-center">
                    <button
                      onClick={decreaseFontSize}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-l"
                      aria-label="Decrease font size"
                    >
                      A-
                    </button>
                    <div className="px-4 py-2 bg-gray-200 dark:bg-gray-600">
                      {fontSize}px
                    </div>
                    <button
                      onClick={increaseFontSize}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-r"
                      aria-label="Increase font size"
                    >
                      A+
                    </button>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Keyboard shortcuts: D (toggle dark mode), + (increase font), - (decrease font)
                </div>
              </div>
            )}
          </div>
          
          {/* Theme Toggle Button - Only render theme-dependent content after mounting */}
          {mounted ? (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {currentTheme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          ) : (
            <div className="w-10 h-10"></div> // Placeholder with same dimensions to avoid layout shift
          )}
          
          {/* Auth buttons */}
          {!loading && (
            <>
              {isAuthenticated ? (
                <>
                  <Link href="/songs/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                    Create Song
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                  Login
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
} 