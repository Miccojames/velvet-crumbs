import React from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Mail, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#D8C6BA]/20 pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Centered Logo Badge */}
        <div className="mb-6">
          <Logo size="md" />
        </div>

        {/* Brand Titles & Tagline */}
        <h3 className="font-serif-editorial text-2xl tracking-[0.2em] text-[#D8C6BA] uppercase font-light mb-1">
          VELVET & CRUMBS
        </h3>
        <p className="font-sans-clean text-xs tracking-[0.3em] text-[#B4A59D] uppercase font-light mb-3">
          POP CAN CAKES
        </p>
        <p className="font-script-accent text-xl text-[#C9AE9E] mb-8">
          "Small Can, Big Indulgence."
        </p>

        {/* Thin Separator Line */}
        <div className="w-full max-w-md h-[1px] bg-[#D8C6BA]/20 mb-8" />

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8">
          {[
            { name: "HOME", href: "/" },
            { name: "MENU", href: "/menu" },
            { name: "ABOUT", href: "/about" },
            { name: "GALLERY", href: "/gallery" },
            { name: "FAQ", href: "/#faq" },
            { name: "CONTACT", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] tracking-[0.2em] text-[#B4A59D] hover:text-[#D8C6BA] transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social & Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#B4A59D] mb-10">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D8C6BA] transition-colors"
          >
            <svg
              className="h-4 w-4 text-[#C9AE9E]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@velvetandcrumbs</span>
          </a>

          <a
            href={SITE.facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D8C6BA] transition-colors"
          >
            <svg
              className="h-4 w-4 text-[#C9AE9E]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span>Velvet & Crumbs Facebook</span>
          </a>

          <a
            href={`tel:+${SITE.whatsappNumber}`}
            className="flex items-center gap-2 hover:text-[#D8C6BA] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#C9AE9E]" />
            <span>{SITE.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 hover:text-[#D8C6BA] transition-colors"
          >
            <Mail className="h-4 w-4 text-[#C9AE9E]" />
            <span>{SITE.email}</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[10px] tracking-widest text-[#81756E] uppercase border-t border-[#D8C6BA]/15 pt-6 w-full max-w-2xl">
          © 2026 Velvet & Crumbs. All rights reserved. Pop Can Cakes is a registered dessert brand.
        </div>
      </div>
    </footer>
  );
}
