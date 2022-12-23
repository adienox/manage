import Link from "next/link";
import Logo from "../../img/logo.svg";
import Image from "next/image";
import { useState } from "react";
import GetStarted from "./GetStarted";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src={Logo} alt="logo" />
        </div>
        <div className=" hidden space-x-6 md:flex">
          <Link href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </Link>
          <Link href="#" className="hover:text-darkGrayishBlue">
            Product
          </Link>
          <Link href="#" className="hover:text-darkGrayishBlue">
            About Us
          </Link>
          <Link href="#" className="hover:text-darkGrayishBlue">
            Careers
          </Link>
          <Link href="#" className="hover:text-darkGrayishBlue">
            Community
          </Link>
        </div>
        <GetStarted smHidden />

        {/* Hamburger Icon */}
        <button
          className={`${
            isOpen ? "open" : ""
          } hamburger block focus:outline-none md:hidden`}
          onClick={hamburgerClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-6 right-6 mt-10 flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center`}
        >
          <Link href="#">Pricing</Link>
          <Link href="#">Product</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Community</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
