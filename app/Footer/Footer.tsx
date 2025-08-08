import Link from "next/link";
import Image from "next/image";

import google from "@/public/Google Play.png";
import store from "@/public/Play Store.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600">
      {/* Newsletter Subscribe */}
      <div className="bg-[#f5f6fc] rounded-3xl max-w-6xl mx-auto mt-12 mb-8 p-8 md:p-12 text-center relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 max-w-xl mx-auto">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <div className="relative w-full md:flex-1">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md px-4 py-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-md px-6 py-3 hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>

        <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        <div>
          <Link href="/" className="flex items-center text-indigo-900 font-bold text-2xl mb-4">
            Jadoo.
          </Link>
          <p className="text-gray-500 text-sm max-w-[200px]">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div>
          <h3 className="text-gray-800 font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Mobile</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-800 font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Help/FAQ</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Affiliates</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-800 font-bold mb-4">More</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Airlinefees</Link></li>
            <li><Link href="#">Airline</Link></li>
            <li><Link href="#">Low fare tips</Link></li>
          </ul>
        </div>
      </div>

      {/* Socials + Store Badges */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-8 pb-8">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.5v1A10.66 10.66 0 013 4s-4 9 5 13c-2 1-4 1-7 1 9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>

        {/* Store Badges */}
        <div className="flex items-center gap-4">
          <Image src={google} alt="Google Play" width={160} height={50} className="w-[160px]" />
          <Image src={store} alt="App Store" width={160} height={50} className="w-[160px]" />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">All rights reserved © jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}
