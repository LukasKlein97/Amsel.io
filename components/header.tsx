"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navigationItems = [
  { name: "Module", section: "features" },
  { name: "Software", section: "web-app" },
  { name: "KI-Features", section: "ai-section" },
  { name: "Roadmap", section: "roadmap" },
  { name: "Integration", section: "solutions" },
  { name: "Kontakt", section: "contact" },
];

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
    // If we're not on the main page, navigate to it first
    if (pathname !== "/") {
      // Store the section ID in sessionStorage to scroll after navigation
      sessionStorage.setItem("scrollToSection", sectionId);
      router.push("/");
      return;
    }

    // If we're on the main page, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                src="/amsel-schriftzug.png"
                alt="Amsel.io"
                width={140}
                height={44}
                className="h-11 w-auto"
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
            {navigationItems.map((item) => (
              <motion.button
                key={item.name}
                variants={navItem}
                className="group relative overflow-hidden rounded-full px-3 py-1 transition will-change-transform"
                onClick={() => scrollToSection(item.section)}
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
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-base font-medium tracking-wide transition-colors hover:border-white/20 hover:bg-white/10"
                    onClick={() => {
                      scrollToSection(item.section);
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
