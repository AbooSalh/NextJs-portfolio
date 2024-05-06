"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-1 active  ${
        pathName === link.href ? "bg-black text-white" : "hover:bg-gray-300"
      }`}
      href={link.href}
      style={{ transition: "background-color 0.5s" }}
    >
      {link.name}
    </Link>
  );
}
