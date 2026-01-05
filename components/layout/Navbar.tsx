"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/components/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Apps", href: "/services/mobile-app-development" },
      { name: "Custom Software", href: "/services/custom-software-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 md:border md:border-primary/10 hover:md:shadow-lg hover:md:shadow-primary/5 backdrop-blur-md md:bg-background/30",
        // scrolled
        //   ? "bg-background/30 backdrop-blur"
        //   : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logos/logo-light.png"
            alt="Xinteck"
            width={80}
            height={80}
            className="dark:hidden "
          />
          <Image
            src="/logos/logo-dark.png"
            alt="Xinteck"
            width={80}
            height={80}
            className="hidden dark:block "
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/item">
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-gold transition-colors flex items-center gap-1",
                  pathname === link.href ? "text-gold" : "text-foreground/70"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {link.submenu && (
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto transition-all duration-200">
                  <div className="bg-background border border-primary/20 rounded-xl shadow-2xl overflow-hidden p-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-foreground/70 hover:text-gold hover:bg-primary/5 rounded-lg transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-primary/20">
            <ThemeToggle />
            <Link
              href="/contact"
              className=""
            >
              <div className="bg-primary text-white dark:text-black px-5 py-2 rounded-full text-sm font-bold ">
                  Get Started
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:text-gold transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-bold hover:text-gold block",
                      pathname === link.href ? "text-gold" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-primary/20">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-foreground/60 hover:text-gold text-sm"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-black text-center py-2 rounded-full font-bold mt-4"
              >
                Estimate Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
