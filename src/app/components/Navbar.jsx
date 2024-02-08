"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Sobre nós",
    path: "#sobrenos",
  },
  {
    title: "Serviços",
    path: "#servicos",
  },
  {
    title: "Contatos",
    path: "#contatos",
  },
];

const scrollToSection = (e, sectionId) => {
  e.preventDefault(); // Isso irá prevenir o comportamento padrão de navegação direta.

  const section = document.querySelector(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-white">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
        >
          <Image className='pl-2'
                    src="/images/absoluto-logo.png"
                    alt="Absoluto"
                    width={240}
                    height={69}
                    />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-blue text-back hover:text-blue-ti hover:border-blue-ti"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-blue text-black hover:text-blue-600 hover:border-blue-ti"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={() => scrollToSection(e, link.path)} />
              </li>
            ))}
            <li>
              <a href="https://wa.me/5511932158284" target="_blank" rel="noopener noreferrer" >
                <Image
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                  className="hover:scale-110"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;