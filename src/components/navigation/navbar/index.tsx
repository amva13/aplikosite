import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-white sticky top-0 border-b border-black">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Apliko</h1>
            <ul className="hidden md:flex gap-x-6 text-gray-900 font-sans">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/jobs">
                  <p>Jobs</p>
                </Link>
              </li> */}
              <li>
                <Link href="/blog">
                  <p>Blog 1</p>
                </Link>
                <Link href="/blog-2">
                  <p>Blog 2</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;