"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { hash: "about", label: "Qui suis-je" },
  { hash: "services", label: "Services" },
  { hash: "galerie", label: "Galerie" },
  { hash: "tarifs", label: "Tarifs" },
  { hash: "temoignages", label: "Témoignages" },
];

function scrollToSection(hash: string) {
  const el = document.getElementById(hash);
  if (!el) return;
  const navHeight = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hrefFor = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-pink/10 backdrop-blur-[20px] transition-all duration-400 ${
        scrolled
          ? "bg-black/98 shadow-[0_4px_30px_rgba(255,165,201,0.08)]"
          : "bg-black/92"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="font-display text-[1.4rem] font-bold text-pink tracking-[0.5px]"
        >
          Co'équi'pattes
        </Link>

        <ul className={`hidden md:flex gap-8 list-none ${menuOpen ? "" : ""}`}>
          {links.map((link) => (
            <li key={link.hash}>
              {isHome ? (
                <a
                  href={`#${link.hash}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.hash);
                  }}
                  className="text-white text-[0.88rem] font-medium tracking-[0.5px] uppercase relative hover:text-pink transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-pink after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={hrefFor(link.hash)}
                  className="text-white text-[0.88rem] font-medium tracking-[0.5px] uppercase relative hover:text-pink transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-pink after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              href={hrefFor("contact")}
              className="bg-pink text-black px-6 py-2.5 rounded-full font-semibold uppercase text-[0.82rem] tracking-[1px] hover:bg-white hover:-translate-y-[1px] hover:shadow-[0_4px_15px_var(--pink-glow)] transition-all duration-300"
            >
              Réserver
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex md:hidden flex-col gap-[5px] cursor-pointer z-[1001] p-3 -mr-3 touch-manipulation select-none"
          onClick={() => setMenuOpen((v) => !v)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setMenuOpen((v) => !v);
          }}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-7 h-[2px] bg-white transition-all duration-300 pointer-events-none origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-7 h-[2px] bg-white transition-all duration-300 pointer-events-none ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-7 h-[2px] bg-white transition-all duration-300 pointer-events-none origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Mobile menu */}
        <ul
          className={`md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black/98 backdrop-blur-[30px] flex flex-col items-center justify-center gap-10 list-none transition-[transform,visibility] duration-400 z-50 ${
            menuOpen
              ? "translate-x-0 visible pointer-events-auto"
              : "-translate-x-full invisible pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <li key={link.hash}>
              {isHome ? (
                <a
                  href={`#${link.hash}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => scrollToSection(link.hash), 350);
                  }}
                  className="text-white text-[1.2rem] font-medium uppercase tracking-[0.5px] hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={hrefFor(link.hash)}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-[1.2rem] font-medium uppercase tracking-[0.5px] hover:text-pink transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              href={hrefFor("contact")}
              className="bg-pink text-black px-8 py-3 rounded-full font-semibold uppercase text-[0.95rem] tracking-[1px]"
              onClick={() => setMenuOpen(false)}
            >
              Réserver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
