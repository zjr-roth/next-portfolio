import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./NavLink";

const navLinks = [
    {
       title: "Home",
       path: "#home" 
    },
    {
        title: "About",
        path: "#about" 
     },
     {
        title: "Projects",
        path: "#projects" 
     },
     {
        title: "Contact",
        path: "#contact" 
     },
]

const Navbar = () => {
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
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
                       { navLinks.map((link, index) => (
                       <li key={index}>
                        <Navlink href={link.path} title={link.title}/>
                       </li>
                    ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar