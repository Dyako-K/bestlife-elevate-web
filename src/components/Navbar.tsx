import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/best-life-logo.png.asset.json";
import { useState } from "react";
import { PreHeader } from "@/components/PreHeader";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <PreHeader />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Best Life Hospital - Home">
          <img
            src={logoAsset.url}
            alt="Best Life Hospital logo"
            className="h-11 w-11 object-contain"
          />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-bold tracking-tight text-navy">Best Life</span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
              Hospital
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-background/95 px-6 pb-4 backdrop-blur-xl md:hidden animate-fade-in">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
