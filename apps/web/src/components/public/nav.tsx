import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@coequipattes/ui/components/button";

const links = [
  { hash: "about", label: "Qui suis-je" },
  { hash: "services", label: "Services" },
  { hash: "galerie", label: "Galerie" },
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
  const pathname = useLocation({ select: (l) => l.pathname });
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
      className={`fixed top-0 w-full z-50 border-b border-border backdrop-blur-[20px] transition-all duration-400 ${
        scrolled
          ? "bg-background/95 shadow-[0_4px_30px_rgba(58,46,38,0.08)]"
          : "bg-background/80"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link
          to="/"
          className="font-display text-[1.4rem] font-bold text-primary tracking-[0.5px]"
        >
          Co'équi'pattes
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link.hash}>
              {isHome ? (
                <a
                  href={`#${link.hash}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.hash);
                  }}
                  className="text-foreground text-[0.88rem] font-medium tracking-[0.5px] uppercase relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={hrefFor(link.hash)}
                  className="text-foreground text-[0.88rem] font-medium tracking-[0.5px] uppercase relative hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <Button asChild size="sm">
              <a href={hrefFor("contact")}>Réserver</a>
            </Button>
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
            className={`w-7 h-[2px] bg-foreground transition-all duration-300 pointer-events-none origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-7 h-[2px] bg-foreground transition-all duration-300 pointer-events-none ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-7 h-[2px] bg-foreground transition-all duration-300 pointer-events-none origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Mobile menu */}
        <ul
          className={`md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-background/98 backdrop-blur-[30px] flex flex-col items-center justify-center gap-10 list-none transition-[transform,visibility] duration-400 z-50 ${
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
                  className="text-foreground text-[1.2rem] font-medium uppercase tracking-[0.5px] hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={hrefFor(link.hash)}
                  onClick={() => setMenuOpen(false)}
                  className="text-foreground text-[1.2rem] font-medium uppercase tracking-[0.5px] hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <Button asChild size="lg">
              <a href={hrefFor("contact")} onClick={() => setMenuOpen(false)}>
                Réserver
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
