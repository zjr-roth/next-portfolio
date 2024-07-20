import React from "react";
import Navlink from "./NavLink";

const MenuOverlay = ({links}: any) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {console.log(links)}
            {links.map(({link, index}: any) => (
            <li key={index}>
            <Navlink href={link.path} title={link.title} />
            </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;