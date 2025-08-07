import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from "@/public/Logo (3).png";
import shape from "@/public/shape.png";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <section className="w-full p-4 bg-transparent relative">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={logo.width}
          height={logo.height}
          className="ml-0 mt-2 lg:mt-0 w-18 lg:w-[100px] lg:ml-12"
        />

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 mr-20 text-[17px]">
          {["Destination", "Hotels", "Flights", "Bookings"].map((item, idx) => (
            <Link
              key={idx}
              href=""
              className="no-underline py-2 transition-all duration-300 ease-in-out hover:text-black/70 hover:scale-105"
            >
              {item}
            </Link>
          ))}

          {/* Sign Up Button */}
          <Link
            href=""
            className="flex justify-center items-center w-24 h-10 p-2 border-2 border-black rounded-md no-underline transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105"
          >
            Sign up
          </Link>

          {/* Language Dropdown */}
          <select className="rounded-md p-2 text-sm border border-gray-300 focus:outline-none transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-black">
            <option value="en">En</option>
            <option value="ur">Ur</option>
            <option value="fr">Fr</option>
          </select>
        </div>
      </div>

      {/* Decorative Shape */}
      <Image
        src={shape}
        alt="Decorative Shape"
        className="absolute right-2 lg:right-0 top-0 z-[-1]"
        width={shape.width}
        height={shape.height}
      />

      {/* Mobile Hamburger Menu */}
      <div className="block lg:hidden absolute right-8 top-6 z-50">
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <GiHamburgerMenu size={24} />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-center">
                Jadooo
              </SheetTitle>

              <SheetDescription className="flex flex-col items-center gap-4 mt-4 text-[17px] ml-4 md:ml-0">
                {["Destination", "Hotels", "Flights", "Bookings"].map((item, idx) => (
                  <Link
                    key={idx}
                    href=""
                    className="no-underline py-2 border-b border-black w-[300px] md:w-[400px] transition-all duration-300 ease-in-out hover:text-black/70 hover:scale-105"
                  >
                    {item}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
};

export default Navbar;
