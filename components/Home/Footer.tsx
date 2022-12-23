import Image from "next/image";
import Link from "next/link";
import Logo from "/img/logo-white.svg";
import { socials } from "../../data";

const Footer = () => {
  const socialIcons = socials.map((item, index) => (
    <Link key={index} href={item.link}>
      <Image src={item.image} alt={item.alt} className="h-8 w-8" />
    </Link>
  ));

  return (
    <footer className="bg-veryDarkBlue">
      <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* logo */}
          <div>
            <Image src={Logo} className="h-8 w-auto" alt="logo" />
          </div>
          {/* social links */}
          <div className="flex justify-center space-x-4">{socialIcons}</div>
        </div>
        {/* additional links */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="#" className="hover:text-brightRed">
              Home
            </Link>
            <Link href="#" className="hover:text-brightRed">
              Pricing
            </Link>
            <Link href="#" className="hover:text-brightRed">
              Products
            </Link>
            <Link href="#" className="hover:text-brightRed">
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <Link href="#" className="hover:text-brightRed">
              Career
            </Link>
            <Link href="#" className="hover:text-brightRed">
              Community
            </Link>
            <Link href="#" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>
        {/* input elements  */}
        <div className="flex flex-col justify-between">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 rounded-full px-4 focus:outline-none"
                placeholder="Updates in your inbox! ❤️"
              />
              <button className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
