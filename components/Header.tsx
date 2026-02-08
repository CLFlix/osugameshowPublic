"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [{ href: "/", label: "Home" }];

  return (
    <header className="bg-gradient-to-r from-amber-700 to-green-500 py-1">
      <nav className="text-2xl">
        <ul className="flex gap-8 justify-center">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={`text-[rgba(255,255,255,.5)] ${
                pathname === link.href ? "font-bold text-white" : ""
              } hover:scale-103 hover:text-yellow-300 hover:underline transition duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
