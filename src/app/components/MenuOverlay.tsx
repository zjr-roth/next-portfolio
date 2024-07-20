import React from "react";
import Navlink from "./NavLink";


const MenuOverlay = ({ links }: {links: any[]} ) => {
    console.log("Recieved links", links);

    return (
        <>
            <ul className="flex flex-col py-4 items-center">
                {links.map(({path, title}, index) => (
                    <li key={index}>
                    <Navlink href={path} title={title}/>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuOverlay;