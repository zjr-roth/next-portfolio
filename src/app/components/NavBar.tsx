"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Navlink from "./NavLink";
import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
       title: "Home",
       path: "#home",
    },
    {
        title: "About",
        path: "#about",
     },
     {
        title: "Projects",
        path: "#projects",
     },
     {
        title: "Contact",
        path: "#contact", 
     },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8 pt-0">
                <Image
                  src="/images/logoDesign1.png"
                  alt="Logo Image"
                  className="scale-[3] ml-5 mb-0 pt-2"
                  width={100}
                  height={100} 
                /> 
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 text-slate-200 hover:text-white">
                                <RiMenu3Line className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 text-slate-200 hover:text-white">
                                <GrClose className="h-5 w-5" />
                            </button> 
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
                       {navLinks.map((link, index) => (
                       <li key={index}>
                        <Navlink href={link.path} title={link.title}/>
                       </li>
                    ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null }
        </nav>
    )
}

export default Navbar