"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type NavItem = { name: string; section: string };

const navigationItems: NavItem[] = [
  { name: "Software", section: "web-app" },
  { name: "KI-Features", section: "ai-section" },
  { name: "Roadmap", section: "roadmap" },
  { name: "Integration", section: "solutions" },
  { name: "Kontakt", section: "contact" },
];

const moduleNavItems = [
  { name: "Gefährdungsbeurteilungen", href: "/gefaehrdungsbeurteilungen" },
  { name: "Betriebsanweisungen", href: "/betriebsanweisungen" },
  { name: "Begehungsprotokolle", href: "/begehungsprotokolle" },
  { name: "Aktionsplan", href: "/aktionsplan" },
  { name: "Besuchermanagement", href: "/besuchermanagement" },
  { name: "Gefahrstoffmanagement", href: "/gefahrstoffmanagement" },
] as const;

const industryNavItems = [
  { name: "Automotive", href: "/automotive" },
  { name: "Co-Innovation", href: "/co-innovation" },
  { name: "Amsel.io vs Excel", href: "/amsel-vs-excel" },
] as const;

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 360,
      damping: 28,
    },
  },
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to section after navigation from other pages
  useEffect(() => {
    if (pathname === "/") {
      // Check sessionStorage for a section to scroll to
      const sectionId = sessionStorage.getItem("scrollToSection");
      if (sectionId) {
        sessionStorage.removeItem("scrollToSection");
        // Wait for the page to fully render before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    }
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      router.push("/");
    }
  };

  const handleNavItem = (item: NavItem) => {
    scrollToSection(item.section);
  };

  const moduleNavActive = moduleNavItems.some((item) => pathname === item.href);

  const industryNavActive =
    pathname === "/automotive" ||
    pathname === "/co-innovation" ||
    pathname === "/amsel-vs-excel";

  const navigateToMainPage = () => {
    router.push("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="mx-auto max-w-[1200px] px-4 pt-5"
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: shouldReduceMotion
            ? { duration: 0.2 }
            : { type: "spring" as const, stiffness: 180, damping: 20 },
        }}
      >
        <div
          className={[
            "relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 px-5 py-3 shadow-lg shadow-orange-950/30 backdrop-blur-2xl transition-all duration-300",
            isScrolled ? "border-white/20 shadow-orange-900/40" : "",
          ].join(" ")}
          style={{ backgroundColor: "#000000" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.1),_transparent_55%)]" />
          <div className="absolute -left-28 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-orange-500/14 blur-3xl sm:block" />
          <div className="absolute -right-20 top-0 hidden h-32 w-32 rounded-full bg-orange-400/10 blur-3xl sm:block" />

          <div className="relative flex items-center gap-3">
            <button
              onClick={navigateToMainPage}
              className="group relative flex items-center transition hover:opacity-80"
            >
              <Image
                src="/amsel-header-logo.png"
                alt="Amsel.io"
                width={1000}
                height={249}
                className="h-9 w-auto max-h-11 sm:h-10 md:h-11"
                priority
              />
            </button>
          </div>

          <motion.nav
            className="relative hidden items-center gap-8 text-sm font-medium text-white lg:flex"
            variants={navContainer}
            initial="hidden"
            animate="visible"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  variants={navItem}
                  className={[
                    "group relative flex items-center gap-1 overflow-hidden rounded-full px-3 py-1 transition will-change-transform",
                    moduleNavActive ? "text-orange-200" : "",
                  ].join(" ")}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 1.2, y: -2, scale: 1.02 }
                  }
                >
                  <span className="relative z-10">Module</span>
                  <ChevronDown
                    className="relative z-10 h-3.5 w-3.5 shrink-0 opacity-70"
                    aria-hidden
                  />
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
                  <motion.span
                    className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[14rem] border border-white/10 bg-black/95 text-white backdrop-blur-md"
              >
                {moduleNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    className={
                      pathname === item.href
                        ? "cursor-pointer text-orange-200 focus:bg-white/10 focus:text-orange-100"
                        : "cursor-pointer text-white focus:bg-white/10 focus:text-white"
                    }
                    onSelect={() => router.push(item.href)}
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigationItems.slice(0, -1).map((item) => (
              <motion.button
                key={item.name}
                variants={navItem}
                className="group relative overflow-hidden rounded-full px-3 py-1 transition will-change-transform"
                onClick={() => handleNavItem(item)}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: 1.2, y: -2, scale: 1.02 }
                }
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
                <motion.span
                  className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                  layoutId="nav-underline"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  variants={navItem}
                  className={[
                    "group relative flex items-center gap-1 overflow-hidden rounded-full px-3 py-1 transition will-change-transform [&[data-state=open]_.nav-image.png-bg]:opacity-100",
                    industryNavActive ? "text-orange-200" : "",
                  ].join(" ")}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 1.2, y: -2, scale: 1.02 }
                  }
                >
                  <span className="relative z-10">Lösungen</span>
                  <ChevronDown
                    className="relative z-10 h-3.5 w-3.5 shrink-0 opacity-70"
                    aria-hidden
                  />
                  <span className="nav-branchen-bg absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
                  <motion.span
                    className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[12rem] border border-white/10 bg-black/95 text-white backdrop-blur-md"
              >
                {industryNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    className={
                      pathname === item.href
                        ? "cursor-pointer text-orange-200 focus:bg-white/10 focus:text-orange-100"
                        : "cursor-pointer text-white focus:bg-white/10 focus:text-white"
                    }
                    onSelect={() => router.push(item.href)}
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigationItems.slice(-1).map((item) => (
              <motion.button
                key={item.name}
                variants={navItem}
                className="group relative overflow-hidden rounded-full px-3 py-1 transition will-change-transform"
                onClick={() => handleNavItem(item)}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { rotate: 1.2, y: -2, scale: 1.02 }
                }
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
                <motion.span
                  className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                  layoutId="nav-underline"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:border-white/20 hover:text-white"
                  whileHover={
                    shouldReduceMotion ? undefined : { rotate: -2, scale: 1.02 }
                  }
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="h-4 w-4" />
                  DE
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 backdrop-blur-md">
                <DropdownMenuItem className="text-white">
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.nav>

          <div className="relative flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            key="mobileNav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.15 }
                : { duration: 0.2, ease: "easeOut" }
            }
            className="mx-auto mt-2 w-full max-w-[720px] px-4"
            style={{ willChange: "opacity, transform" }}
          >
            <div
              className="overflow-hidden rounded-2xl border border-white/10 px-4 py-6 text-white shadow-2xl shadow-orange-950/30"
              style={{ backgroundColor: "#000000" }}
            >
              <div className="flex flex-col gap-4">
                <motion.div
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <p className="mb-2 px-1 text-xs font-medium uppercase tracking-[0.25em] text-orange-200/85">
                    Module
                  </p>
                  <div className="flex flex-col gap-2">
                    {moduleNavItems.map((item) => (
                      <button
                        key={item.href}
                        type="button"
                        className={[
                          "rounded-lg border px-4 py-2.5 text-left text-base font-medium tracking-wide transition-colors",
                          pathname === item.href
                            ? "border-orange-400/40 bg-orange-500/15 text-orange-100"
                            : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10",
                        ].join(" ")}
                        onClick={() => {
                          router.push(item.href);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {navigationItems.slice(0, -1).map((item, index) => (
                  <motion.button
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-base font-medium tracking-wide transition-colors hover:border-white/20 hover:bg-white/10"
                    onClick={() => {
                      handleNavItem(item);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.03 * index,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    style={{ willChange: "opacity, transform" }}
                  >
                    <span>{item.name}</span>
                  </motion.button>
                ))}

                <motion.div
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion
                      ? 0
                      : 0.03 * (navigationItems.length - 1),
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <p className="mb-2 px-1 text-xs font-medium uppercase tracking-[0.25em] text-orange-200/85">
                    Lösungen
                  </p>
                  <div className="flex flex-col gap-2">
                    {industryNavItems.map((item) => (
                      <button
                        key={item.href}
                        type="button"
                        className={[
                          "rounded-lg border px-4 py-2.5 text-left text-base font-medium tracking-wide transition-colors",
                          pathname === item.href
                            ? "border-orange-400/40 bg-orange-500/15 text-orange-100"
                            : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10",
                        ].join(" ")}
                        onClick={() => {
                          router.push(item.href);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {navigationItems.slice(-1).map((item, index) => (
                  <motion.button
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-base font-medium tracking-wide transition-colors hover:border-white/20 hover:bg-white/10"
                    onClick={() => {
                      handleNavItem(item);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion
                        ? 0
                        : 0.03 * (navigationItems.length + index),
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    style={{ willChange: "opacity, transform" }}
                  >
                    <span>{item.name}</span>
                  </motion.button>
                ))}

                <Button
                  size="lg"
                  className="mt-2 w-full"
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Projekt anfragen
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
