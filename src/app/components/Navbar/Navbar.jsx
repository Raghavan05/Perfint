'use client';
import logo from '../../../../public/Logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../Navbar/Navbar.module.css'
import { FaSearch, FaLinkedinIn  } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

export default function Navbar({ setShowPopup = () => {} }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SCIENTIFIC RESOURCES', path: '/#about-doctor' },
    { name: 'ABOUT US', path: '/blog' },
    { name: 'CONTACT', path: '/#get-in-touch' },
  ];

  return (
    <header className=" bg-white shadow-md fixed top-0 left-0 w-full z-50">
<nav className="container mx-auto flex items-center justify-between lg:justify-around px-6 py-5">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="w-28 h-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`text-gray-700 hover:text-blue-600 transition font-medium ${styles.navLink} ${
                pathname === item.path ? 'text-blue-600 font-semibold  ' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Search Icon */}
          <button className="w-8 h-8 flex items-center justify-center border border-orange-400 text-orange-500 rounded-full hover:bg-orange-100 transition">
            <FaSearch className="w-4 h-4" />
          </button>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-[#0077b5] text-white rounded-full hover:opacity-80 transition"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>

          <a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:opacity-80 transition"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>

        </div>


        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={logo} alt="Logo" className="w-24 h-auto" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={`text-gray-700 hover:text-blue-600 transition font-medium ${
                pathname === item.path ? 'text-blue-600 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* <button
            onClick={() => {
              setIsMenuOpen(false);
              setShowPopup(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
          >
            Book Appointment
          </button> */}
          {/* Search Icon */}
          <button className="w-8 h-8 flex items-center justify-center border border-orange-400 text-orange-500 rounded-full hover:bg-orange-100 transition">
            <FaSearch className="w-4 h-4" />
          </button>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-[#0077b5] text-white rounded-full hover:opacity-80 transition"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>

          <a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full hover:opacity-80 transition"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
