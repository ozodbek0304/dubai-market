"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarRange, ChevronRight, CircleCheck, Info, Menu, PhoneCall, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageComponents from "./language";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from "next/image";



const navLinks = [
  { href: "/", label: "Bosh sahifa" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#services", label: "Xizmatlar" },
  { href: "#mygroup", label: "MyGroup bron qilish" },
  { href: "#reviews", label: "Foydalanuvchilar fikrlari" },
  { href: "#contact", label: "Aloqa" },
];

const navLinksMobile = [
  { href: "#about", label: "Biz haqimizda", icon: <Info className="w-4 h-4" /> },
  { href: "#services", label: "Xizmatlar", icon: <CalendarRange className="w-4 h-4" /> },
  { href: "#mygroup", label: "MyGroup bron qilish", icon: <CircleCheck className="w-4 h-4" /> },
  { href: "#reviews", label: "Foydalanuvchilar fikrlari", icon: <Users className="w-4 h-4" /> },
  { href: "#contact", label: "Aloqa", icon: <PhoneCall className="w-4 h-4" /> },
];

export default function Navbar({ navbarTheme = false }: { navbarTheme: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);






  return (
    <nav className={cn("fixed w-full z-50 transition-all lg:px-0 px-6 duration-300", (isScrolled || navbarTheme || isMenuOpen) ? "bg-white text-slate-800 shadow-md" : "text-white")}>
      <div className={`2xl:max-w-7xl max-w-[1000px] mx-auto  flex justify-between ${(isScrolled || navbarTheme || isMenuOpen) ? "items-center   border-b lg:border-none " : "items-end "} h-20`}>
        {/* Logo */}
        <Link href="/" className=" lg:w-40 w-32">
          <Image priority height={79} width={192} src={(isScrolled || navbarTheme || isMenuOpen) ? "/logo-dark.png" : "/logo.png"} alt="Logo" className="h-full w-full object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`hover:text-[#FFD700] ${`/${link.href}` == (`/#${activeSection}` || router.asPath) ? "text-[#FFD700]" : ""} font-medium text-sm sm:text-md 2xl:text-lg`}>
              {t(link.label)}
            </Link>
          ))}
          {/* Language */}
          <div className="w-[110px] flex justify-end">
            <LanguageComponents theme={(isScrolled || navbarTheme || isMenuOpen)} />
          </div>
        </div>


        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => { setIsMenuOpen(!isMenuOpen) }} className={(isScrolled || navbarTheme || isMenuOpen) ? "text-slate-800 " : "text-white"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden transition-all duration-100  ">
          {navLinksMobile.map((link) => (
            <Link key={link.href} href={link.href}
              className={`border-b ${`/${link.href}` == (`/#${activeSection}` || router.asPath) ? "text-[#FFD700]" : ""}  w-full items-center justify-between flex py-3   hover:text-[#FFD700`}
              onClick={() => setIsMenuOpen(false)}>
              <div className="flex items-center gap-2">
                <span>{link.icon}</span>
                <span className="text-sm">{t(link.label)}</span>
              </div>
              <span className="w-9 flex justify-center">
                <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
          <div className="w-full px-2 pt-4 pb-12">
            <Button type="button" className="bg-yellow-400  hover:bg-yellow-500 w-full h-[40px] 2xl:h-[59px] 2xl:rounded-[16px] xl:px-8 xl:text-md text-black font-medium">
              {t("Xabar Yuborish")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
