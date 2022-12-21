import React from "react";
import NavBar from "./NavBar";
import Hero from "../images/image-hero-mobile.jpg";
import heroDesk from "../images/image-hero-desktop.jpg";

function Header() {
  return (
    <div className="  bg-contain  w-[100%]  ">
      <picture>
        <source media="(min-width:750px )" srcSet={heroDesk} />
        <img src={Hero} className=" object-cover w-[100%] " alt="" />
      </picture>
      <NavBar />
    </div>
  );
}

export default Header;
