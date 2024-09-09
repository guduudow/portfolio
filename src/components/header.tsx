"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

export default function Header() {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle the closing of the mobile menu when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="flex items-center justify-between p-4 md:p-8 bg-background z-30 fixed top-0 w-full">
      <a href="#main">
        <Image src="/logo_primary.svg" alt="main logo" width={35} height={35} />
      </a>

      {/* Hamburger Icon - Toggles the mobile menu */}
      <div className="md:hidden">
        <GiHamburgerMenu
          className="w-8 h-8 cursor-pointer text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Mobile Menu - Shows when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-primary shadow-lg w-48 rounded-lg p-6 z-40 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#main"
                className="text-base font-body text-background hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-base font-body text-background hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-base font-body text-background hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-base font-body text-background hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation - Hidden on mobile screens */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex items-center space-x-8">
          <li>
            <a
              href="#main"
              className="text-base font-main font-medium text-primary hover:text-gray-700"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-base font-main font-medium text-primary hover:text-gray-700"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-base font-main font-medium text-primary hover:text-gray-700"
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-primary text-background rounded-full px-6 py-2.5 font-bold transition-colors duration-300 ease-in-out hover:bg-primary-dark"
            >
              contact me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
