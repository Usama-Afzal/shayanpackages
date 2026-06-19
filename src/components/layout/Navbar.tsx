"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/business";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Capabilities", href: "/#manufacturing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Samples", href: "/samples" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
        <a href="/" className="no-underline flex items-center">
          <Logo className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-200 no-underline"
            >
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-outline-variant mx-2" />
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#1da851] transition-colors no-underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
            </svg>
            {BUSINESS.phone}
          </a>
          <a
            href={WHATSAPP_LINKS.quote}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-lg hover:brightness-90 transition-all no-underline flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
            </svg>
            Get Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-on-surface p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="md:hidden border-t border-outline-variant bg-surface-container-lowest px-margin-mobile overflow-hidden"
        >
          <div className="pb-8 pt-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-semibold text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant no-underline"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINKS.quote}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded-lg text-center hover:brightness-90 transition-all no-underline mt-2 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
            </svg>
            Get Quote on WhatsApp
          </a>
          <a href={`tel:${BUSINESS.phone}`} className="text-sm text-on-surface-variant text-center no-underline hover:text-primary">
            {BUSINESS.phone}
          </a>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
