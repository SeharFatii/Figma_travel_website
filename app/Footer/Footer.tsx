import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { ImageCursorTrail } from "@/components/ui/image-cursortrail"; // ✅ Correct import

export default function Footer() {
  

  return (
    <footer className="bg-white w-full px-6 md:px-20 pt-12 pb-6 text-gray-800 relative overflow-hidden">
      {/* Subscription Section with Cursor Trail */}
      <div className="relative bg-[#F8F8FF] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between mb-12 shadow-sm overflow-hidden">
        {/* Cursor Trail Layer */}
       
        {/* Content Layer */}
        <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg md:text-xl font-medium text-gray-700">
            Subscribe to get information, latest news and other interesting
            offers about <span className="font-semibold">Jadoo</span>
          </h2>
        </div>
        <div className="relative z-10 flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-[#FF6B4A] text-white px-6 py-3 rounded-r-lg hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-gray-200 pt-8 relative z-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Jadoo.</h1>
          <p className="text-sm text-gray-500">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">More</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div>
          <div className="flex space-x-3 mb-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <FaFacebookF className="text-gray-600" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <FaInstagram className="text-gray-600" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <FaTwitter className="text-gray-600" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-3">Discover our app</p>
          <div className="flex space-x-3">
            <Image
              src="/googleplay.png"
              alt="Google Play"
              width={120}
              height={40}
            />
            <Image
              src="/appstore.png"
              alt="App Store"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8 relative z-10">
        All rights reserved@jadoo.co
      </div>
    </footer>
  );
}
