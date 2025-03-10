import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#000000]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Lynn&nbsp;<span className="sm:block hidden">| portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#FFC93E]" : "text-white"
              } hover:text-[#FFC93E] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a className="cursor-pointer" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className={`ham-menu-wrapper flex flex-col gap-1 
            ${toggle ? "active" : ""}}`}
            onClick={() => setToggle(!toggle)}
          >
            <div className={`flex flex-col gap-1`}>
              <span className={`ham-span ${toggle ? "active" : ""}`}></span>
              <span className={`ham-span ${toggle ? "active" : ""}`}></span>
              <span className={`ham-span ${toggle ? "active" : ""}`}></span>
            </div>
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 card absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-[#e7e2e2] border-opacity-30`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#FFC93E]" : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
