"use client";

import { socials } from "../static infos/statics";
import Link from "next/link";
import { useState } from "react";
import "./social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./navLink";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const topVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
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
          return <NavLink link={link} key={link.name} />;
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
                target="_blank"
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
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list  */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="open"
            style={{ width: "100%" }}
            className="absolute top-0 left-0 h-screen bg-black text-white flex flex-col items-center justify-center gap-9 text-4xl z-40 "
          >
            {links.map((link) => {
              return (
                <motion.div key={link.title} variants={listItemVariants}>
                  <Link
                    onClick={() => setOpen((prev) => !prev)}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
