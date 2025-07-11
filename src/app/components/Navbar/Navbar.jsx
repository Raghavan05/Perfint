'use client';
import logo from '../../../../public/Logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from '../Navbar/Navbar.module.css'
import { FaSearch, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SearchLogo from '../../../../public/SearchLogo.svg'
import MAXIONavbarProduct from '../../assets/MAXIONavbarProduct.png'
import RobioEXNavbarProduct from '../../assets/RobioEXNavbarProduct.png'
import NaviosNavbarProduct from '../../assets/NaviosNavbarProduct.png'
import Disha2NavbarProduct from '../../assets/Disha2NavbarProduct.png'

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    {
      name: 'PRODUCTS',
      path: '/products',
      submenu: [
        {
          name: 'MAXIO',
          path: '/products/maxio',
          image: MAXIONavbarProduct, // Add your image paths
          description: 'MAXIOTM is a physician controlled CT & PET-CT guided Robotic navigation system for IO procedures.',
        },
        {
          name: 'ROBIO',
          path: '/products/robio',
          image: RobioEXNavbarProduct,
          description: 'Advanced Robotic Targeting for CT and PET-CT Guided Interventions',
        },
        {
          name: 'NAVIOS',
          path: '/products/navios',
          image: NaviosNavbarProduct,
          description: 'Integrated visualisation and treatment planning platform for Interventional Oncology therapies.',
        },
        {
          name: 'DISHA',
          path: '/products/disha',
          image: Disha2NavbarProduct,
          description: 'Transform your surgical practice with the power of navigation',
        },
      ],
    },
    { name: 'SCIENTIFIC RESOURCES', path: '/#about-doctor' },
    { name: 'ABOUT US', path: '/blog' },
    { name: 'CONTACT', path: '/#get-in-touch' },
  ];


  return (
    <header className=" bg-white shadow top-0 left-0 w-full z-50">
      <nav className={`${styles.navbar} max-w-screen-3xl mx-auto flex items-center justify-between lg:px-30 px-7 py-5`}>
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" className="w-28 h-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, i) => (
            <div className={`relative ${styles.navItem}`} key={i}>
              <Link
                href={item.path}
                className={`${styles.navLink} ${pathname === item.path ? 'text-blue-600 font-semibold' : ''
                  }`}
              >
                {item.name}
              </Link>

              {item.submenu && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownGrid}>
                    {item.submenu.map((sub, index) => (
                      <Link key={index} href={sub.path} className={`${styles.dropdownItem} flex flex-col justify-between`}>
                        <Image src={sub.image} alt={sub.name} width={200} height={200} />
                        <p className='mb-4'>{sub.description}</p>
                        <button className={`${styles.PrimaryButton}`}>Explore {sub.name}</button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          ))}
        </div>


        <div className="hidden lg:flex items-center gap-3">
          {/* Search Icon */}
          <div className="relative flex items-center">
            <div
              className={`absolute right-10 transform transition-all duration-300 ease-in-out overflow-hidden ${showSearch ? 'w-48 opacity-100' : 'w-0 opacity-0'
                }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-1 text-sm text-gray-800 bg-[#ffffff] border border-orange-400 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400"
              />
            </div>

            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="w-8 h-8 flex items-center justify-center border border-orange-400 text-orange-500 rounded-full hover:bg-orange-100 transition"
            >
              <Image src={SearchLogo} alt='Search Logo' />
            </button>
          </div>



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
        <div className='flex lg:hidden '>
          <div className="relative flex items-center pr-2 w-[150px] justify-end">
            <input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out text-sm text-gray-800 bg-white border border-orange-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400 absolute right-10
              ${showSearch ? 'opacity-100 w-[100px] px-2 py-1' : 'opacity-0 w-0 px-0 py-0'} 
              `}
            />
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="w-8 h-8 flex items-center justify-center text-orange-500 rounded-full hover:bg-orange-100 transition"
            >
              <Image src={SearchLogo} alt='Search Logo' />
            </button>
          </div>

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
        </div>

      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
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
              className={`text-gray-700 hover:text-blue-600 transition font-medium ${pathname === item.path ? 'text-blue-600 font-semibold' : ''
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
          className="fixed inset-0 bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
