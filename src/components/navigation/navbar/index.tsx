'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaDna, FaDatabase, FaServer, FaGithub, FaFileAlt, FaUsers } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Start', href: '/start', icon: null },
    {
      name: 'Models',
      href: '/models',
      icon: <FaDna className="w-4 h-4" />,
      dropdown: [
        { name: 'Overview', href: '/models' },
        { name: 'Single-cell Foundation Models', href: '/models/scfms' },
        { name: 'Model Server', href: '/models/server' }
      ]
    },
    {
      name: 'Datasets',
      href: '/datasets',
      icon: <FaDatabase className="w-4 h-4" />,
      dropdown: [
        { name: 'Overview', href: '/datasets' },
        { name: 'Single-instance Prediction', href: '/datasets/single-instance' },
        { name: 'Multi-instance Prediction', href: '/datasets/multi-instance' },
        { name: 'Generation', href: '/datasets/generation' }
      ]
    },
    { name: 'Papers', href: '/papers', icon: <FaFileAlt className="w-4 h-4" /> },
    { name: 'Team', href: '/team', icon: <FaUsers className="w-4 h-4" /> }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold gradient-text">PyTDC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                        {item.icon}
                        <span>{item.name}</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* External Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://huggingface.co/collections/apliko/pytdc-nextml-67f7d938c5e59fe2e0e98d57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                >
                  HuggingFace
                </a>
                <a
                  href="https://github.com/apliko-xyz/PyTDC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <div className="flex items-center space-x-2 text-gray-700 font-medium py-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <div className="pl-6 space-y-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block text-sm text-gray-600 hover:text-purple-600 py-1 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://huggingface.co/collections/apliko/pytdc-nextml-67f7d938c5e59fe2e0e98d57"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors duration-200"
                >
                  HuggingFace
                </a>
                <a
                  href="https://github.com/apliko-xyz/PyTDC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 py-2 transition-colors duration-200"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
