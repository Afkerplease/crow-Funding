import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import { motion } from "framer-motion";
import closeMenu from "../images/icon-close-menu.svg";

function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" absolute top-0 w-[100%] flex justify-between lg:px-[12rem] lg:py-[4rem] px-8 py-10 z-30  "
    >
      <div className="  ">
        <img src={logo} alt="" />
      </div>

      <div>
        <button className=" md:hidden">
          {" "}
          <img src={hamburger} alt="" />{" "}
        </button>
        <ul className="  gap-6 hidden md:flex text-white">
          <li>
            <a href="#" className=" hover:text-Moderatecyan font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-Moderatecyan font-bold">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className=" hover:text-Moderatecyan font-bold">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default NavBar;
