import React from "react";
import styles from "../style";
import { anilogo, close, menu } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-row py-6 justify-between items-center navbar">
      <div className="px-2">
        <img src={anilogo} alt="Logo" className="w-[124px] h-[32px]" />
      </div>
      <ul></ul>
    </nav>
  );
};

export default Navbar;
