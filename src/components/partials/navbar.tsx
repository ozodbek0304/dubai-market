"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageComponents from "./language";
import { useRouter } from "next/router";

const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#services", label: "Xizmatlar" },
  { href: "#mygroup", label: "MyGroup bron qilish" },
  { href: "#reviews", label: "Foydalanuvchilar fikrlari" },
  { href: "#contact", label: "Aloqa" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = router.asPath;


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={cn("fixed w-full z-50 transition-all duration-300", (isScrolled || router.asPath !== "/") ? "bg-white text-slate-800 shadow-md" : "text-white")}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between ${(isScrolled || router.asPath !== "/") ? "items-center" : "items-end"} h-20`}>
        {/* Logo */}
        <Link href="/" className="h-10 w-32">
          <img src={(isScrolled || router.asPath !== "/") ? "logo-dark.png" : "logo.png"} alt="Logo" className="h-full w-full object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-lime-300 font-medium text-sm">
              {link.label}
            </Link>
          ))}
          {/* Language */}
          <div className="w-[110px] flex justify-end">
            <LanguageComponents theme={(isScrolled || router.asPath !== "/")} />
          </div>
        </div>


        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={(isScrolled || router.asPath !== "/") ? "text-slate-800" : "text-white"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm px-3 py-2 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-3 py-2 rounded-md text-white hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
