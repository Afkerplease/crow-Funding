import React from "react";
import NavBar from "./NavBar";
import Hero from "../images/image-hero-mobile.jpg";

function Header() {
  return (
    <div className="  bg-contain  w-[100%]  ">
      <img src={Hero} alt="" />
      <NavBar />
    </div>
  );
}

export default Header;
