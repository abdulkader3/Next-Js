import Link from "next/link.js";
import React from "react";

const Button = ({ path, title, variant = "Navbar" }) => {
  const variants = {
    Navbar : "px-6 py-2 text-[#128C76] hover:text-white border border-[#128C76] hover:bg-[#128C76] transition-all duration-300",
    Page   : "px-8 py-5 hover:bg-transparent hover:border-white text-white bg-[#128C76] hover:border transition-all duration-300",
  };
  
  return (
    <>
      <Link href={path} className={`${variants[variant]}`}>
        {title}
      </Link>
    </>
  );
};

export default Button;
