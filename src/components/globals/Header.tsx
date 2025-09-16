import { RouterConstantUtil } from "@/lib/RouterContantUtils";
import React from "react";
import { Link } from "react-router";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Header: React.FC = () => (
  <header className="w-full flex items-center justify-center pt-6 z-20 relative">
    <nav
      className="flex justify-between items-center px-8 py-3 rounded-full shadow-xl"
      style={{
        background: "linear-gradient(90deg, #A1004A 0%, #532E8C 100%)",
        border: "1.5px solid rgba(255,255,255,.13)",
        backdropFilter: "blur(8px)",
        minWidth: 320,
        maxWidth: 1100,
        width: "90%",
      }}
    >
      <div className="flex items-center w-auto h-12">
        <img src="/full_logo.png" alt="Oucla" className="w-full h-full mr-2" />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition px-2 py-1 text-base font-medium ${
                  link.active
                    ? "text-[#FFAD00] underline underline-offset-8"
                    : "text-white hover:text-[#FFAD00]"
                }`}
                style={link.active ? { fontWeight: 700 } : {}}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Link
          to={RouterConstantUtil.page.eventOwner.HOME}
          className="ml-4 bg-gradient-to-r from-[#FFB400] to-[#FF8100] text-white font-semibold px-8 py-2 rounded-full shadow-lg border border-[#FFE17A] transition hover:opacity-90"
          style={{
            boxShadow: "0 4px 16px 0 rgba(255,129,0,0.13)",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
