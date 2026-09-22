"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "ABOUT", href: "/about" },
  { name: "GALLERY", href: "/gallery" },
  { name: "REVIEWS", href: "/#reviews" },
  { name: "FAQ", href: "/#faq" },
  { name: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-700 border-b ${
        isScrolled
          ? "bg-[#0B0B0B]/90 backdrop-blur-md border-[#D8C6BA]/20 py-3 shadow-2xl"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Name */}
        <Link
          href="/"
          className="font-serif-editorial text-lg md:text-xl tracking-[0.25em] text-[#D8C6BA] hover:text-[#F4EEE9] transition-colors uppercase font-medium group flex items-center gap-2"
        >
          <span className="transition-transform duration-500 group-hover:scale-105 inline-block">
            VELVET & CRUMBS
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] font-medium uppercase relative py-1 group transition-colors duration-500 ${
                  isActive ? "text-[#D8C6BA]" : "text-[#B4A59D] hover:text-[#D8C6BA]"
                }`}
              >
                <span className="relative z-10 transition-transform duration-300 inline-block group-hover:-translate-y-[1px]">
                  {link.name}
                </span>

                {/* Animated Champagne Line on Hover / Active */}
                {isActive ? (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D8C6BA]"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      mass: 0.8,
                    }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9AE9E] transition-all duration-500 ease-out group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Inquire Button */}
        <div className="hidden lg:flex items-center">
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="px-6 py-2 transition-transform duration-500 hover:scale-105 active:scale-95"
            >
              INQUIRE
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#D8C6BA] border border-[#D8C6BA]/30 px-3 py-1.5 rounded-none hover:border-[#D8C6BA] transition-all duration-500 active:scale-95"
            aria-label="Open navigation menu"
          >
            <MenuIcon className="h-4 w-4" />
            <span>MENU</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <Sheet isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.07 + 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif-editorial text-2xl tracking-[0.15em] text-[#D8C6BA] hover:text-[#F4EEE9] transition-all py-2 border-b border-[#D8C6BA]/10 uppercase block hover:pl-3 duration-500"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-6"
          >
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="solid" className="w-full py-3">
                INQUIRE NOW
              </Button>
            </Link>
          </motion.div>
        </div>
      </Sheet>
    </header>
  );
}
