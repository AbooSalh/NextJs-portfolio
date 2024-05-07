"use client";

import { socials } from "@/static infos/statics";
import Link from "next/link";
import { useState } from "react";
import "./social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./navLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl ">
      <div className="hidden md:flex gap-5">
        {links.map((link) => {
          return <NavLink link={link} key={link.name}/>;
        })}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex">
        <Link
          href="/"
          className="text-sm logo-link rounded-md p-1 font-semibold  flex items-center justify-center "
        >
          <span className="text-white mr-1  flex items-center justify-center">
            Ahmed
          </span>
          <span className="w-12 h-8 rounded bg-white text-black  flex items-center justify-center">
            Saleh
          </span>
        </Link>
      </div>
      {/* responsive menu */}
      <ul className={`hidden md:flex gap-2 ul`}>
        {/* social media links */}
        {socials.data.map((link) => {
          return (
            <div className="li hidden md:flex " key={link.href}>
              <Link
                href={link.href}
                className="a facebook flex justify-center items-center"
              >
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>
                <span className="span"></span>

                <FontAwesomeIcon
                  icon={link.icon}
                  className="s-icon"
                  width="25px"
                  height="25px"
                />
              </Link>
            </div>
          );
        })}
      </ul>
      <div className="md:hidden">
        {/* menu btn */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* menu list  */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-4xl">
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.title}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
