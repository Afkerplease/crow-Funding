import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" absolute top-0 w-[100%] flex justify-between px-8 py-10  "
    >
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <button>
          {" "}
          <img src={hamburger} alt="" />{" "}
        </button>
      </div>
    </motion.nav>
  );
}

export default NavBar;
