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
import { moduleNavItems } from "@/lib/modules";

type NavItem = { name: string; section: string };

const navigationItems: NavItem[] = [{ name: "Kontakt", section: "contact" }];

const roadmapNavItem = { name: "Roadmap", href: "/roadmap" } as const;
const preiseNavItem = { name: "Preise", href: "/preise" } as const;
const ueberUnsNavItem = { name: "Über uns", href: "/ueber-uns" } as const;

const modulePageHref = "/module" as const;

const softwarePageHref = "/software" as const;

const softwareNavItems = [
  { name: "Web-App", section: "web-app" },
  { name: "Mobile App", section: "mobile-app" },
  { name: "KI-Features", section: "ki-features" },
  { name: "Integration", section: "integration" },
] as const;

const industryNavItems = [
  { name: "Automotive", href: "/automotive" },
  { name: "Co-Innovation", href: "/co-innovation" },
  { name: "AMS Go vs Excel", href: "/amsel-vs-excel" },
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
    const scrollToStoredSection = (pagePath: string) => {
      if (pathname !== pagePath) return;

      const hashSection = window.location.hash.slice(1);
      const sectionId =
        hashSection || sessionStorage.getItem("scrollToSection") || null;

      if (!sectionId) return;

      sessionStorage.removeItem("scrollToSection");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    };

    scrollToStoredSection("/");
    scrollToStoredSection(softwarePageHref);
    scrollToStoredSection(modulePageHref);
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

  const scrollToPageSection = (pageHref: string, sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && pathname === pageHref) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `${pageHref}#${sectionId}`);
      return;
    }

    sessionStorage.setItem("scrollToSection", sectionId);
    router.push(`${pageHref}#${sectionId}`);
  };

  const scrollToSoftwareSection = (sectionId: string) => {
    scrollToPageSection(softwarePageHref, sectionId);
  };

  const scrollToModuleSection = (sectionId: string) => {
    scrollToPageSection(modulePageHref, sectionId);
  };

  const handleNavItem = (item: NavItem) => {
    scrollToSection(item.section);
  };

  const moduleNavActive = pathname === modulePageHref;

  const softwareNavActive = pathname === softwarePageHref;

  const industryNavActive =
    pathname === "/automotive" ||
    pathname === "/co-innovation" ||
    pathname === "/amsel-vs-excel";

  const roadmapNavActive = pathname === roadmapNavItem.href;
  const preiseNavActive = pathname === preiseNavItem.href;
  const ueberUnsNavActive = pathname === ueberUnsNavItem.href;

  const navigateToMainPage = () => {
    router.push("/");
  };

  const headerSpring = shouldReduceMotion
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 320, damping: 32 };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl"
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.97)"
          : "rgba(255, 255, 255, 0)",
        borderBottomColor: isScrolled
          ? "rgba(229, 231, 235, 1)"
          : "rgba(229, 231, 235, 0)",
      }}
      transition={headerSpring}
      style={{ borderBottomWidth: 1, borderBottomStyle: "solid" }}
    >
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1200px]"
        initial={{ y: -40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          paddingTop: isScrolled ? 0 : 20,
          paddingLeft: isScrolled ? 0 : 16,
          paddingRight: isScrolled ? 0 : 16,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : { type: "spring" as const, stiffness: 180, damping: 20 }
        }
      >
        <motion.div
          className={[
            "relative flex items-center justify-between overflow-hidden border border-border bg-white px-5 py-3 backdrop-blur-2xl",
            isScrolled
              ? "rounded-none border-x-0 border-t-0 border-orange-200/80 py-2.5 shadow-md shadow-orange-200/30"
              : "rounded-2xl shadow-lg shadow-orange-200/40",
          ].join(" ")}
          transition={headerSpring}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(25,159,103,0.1),_transparent_55%)]" />
          <div className="absolute -left-28 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-orange-500/14 blur-3xl sm:block" />
          <div className="absolute -right-20 top-0 hidden h-32 w-32 rounded-full bg-orange-400/10 blur-3xl sm:block" />

          <div className="relative flex items-center gap-3">
            <button
              onClick={navigateToMainPage}
              className="group relative flex items-center transition hover:opacity-80"
            >
              <Image
                src="/ams-go-logo.png"
                alt="AMS GO"
                width={1024}
                height={263}
                className="h-9 w-auto max-h-11 sm:h-10 md:h-11"
                priority
              />
            </button>
          </div>

          <motion.nav
            className="relative hidden items-center gap-8 text-sm font-medium text-foreground lg:flex"
            variants={navContainer}
            initial="hidden"
            animate="visible"
          >
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <motion.button
                  variants={navItem}
                  className={[
                    "group relative flex items-center gap-1 overflow-hidden rounded-full px-3 py-1 transition will-change-transform",
                    moduleNavActive ? "text-orange-600" : "",
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
                  <span className="absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
                  <motion.span
                    className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[14rem] border border-border bg-white/95 text-foreground backdrop-blur-md shadow-lg"
              >
                {moduleNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.section}
                    className="cursor-pointer text-foreground focus:bg-orange-50 focus:text-foreground"
                    onSelect={() => scrollToModuleSection(item.section)}
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <motion.button
                  variants={navItem}
                  className={[
                    "group relative flex items-center gap-1 overflow-hidden rounded-full px-3 py-1 transition will-change-transform",
                    softwareNavActive ? "text-orange-600" : "",
                  ].join(" ")}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 1.2, y: -2, scale: 1.02 }
                  }
                >
                  <span className="relative z-10">Software</span>
                  <ChevronDown
                    className="relative z-10 h-3.5 w-3.5 shrink-0 opacity-70"
                    aria-hidden
                  />
                  <span className="absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
                  <motion.span
                    className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[14rem] border border-border bg-white/95 text-foreground backdrop-blur-md shadow-lg"
              >
                {softwareNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.section}
                    className="cursor-pointer text-foreground focus:bg-orange-50 focus:text-foreground"
                    onSelect={() => scrollToSoftwareSection(item.section)}
                  >
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.button
              variants={navItem}
              className={[
                "group relative overflow-hidden rounded-full px-3 py-1 transition will-change-transform",
                roadmapNavActive ? "text-orange-600" : "",
              ].join(" ")}
              onClick={() => router.push(roadmapNavItem.href)}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { rotate: 1.2, y: -2, scale: 1.02 }
              }
            >
              <span className="relative z-10">{roadmapNavItem.name}</span>
              <span className="absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
              <motion.span
                className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                layoutId="nav-underline"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>

            <motion.button
              variants={navItem}
              className={[
                "group relative overflow-hidden rounded-full px-3 py-1 transition will-change-transform",
                preiseNavActive ? "text-orange-600" : "",
              ].join(" ")}
              onClick={() => router.push(preiseNavItem.href)}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { rotate: 1.2, y: -2, scale: 1.02 }
              }
            >
              <span className="relative z-10">{preiseNavItem.name}</span>
              <span className="absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
              <motion.span
                className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>

            <motion.button
              variants={navItem}
              className={[
                "group relative overflow-hidden rounded-full px-3 py-1 transition will-change-transform",
                ueberUnsNavActive ? "text-orange-600" : "",
              ].join(" ")}
              onClick={() => router.push(ueberUnsNavItem.href)}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { rotate: 1.2, y: -2, scale: 1.02 }
              }
            >
              <span className="relative z-10">{ueberUnsNavItem.name}</span>
              <span className="absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
              <motion.span
                className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <motion.button
                  variants={navItem}
                  className={[
                    "group relative flex items-center gap-1 overflow-hidden rounded-full px-3 py-1 transition will-change-transform [&[data-state=open]_.nav-image.png-bg]:opacity-100",
                    industryNavActive ? "text-orange-600" : "",
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
                  <span className="nav-branchen-bg absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
                  <motion.span
                    className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[12rem] border border-border bg-white/95 text-foreground backdrop-blur-md shadow-lg"
              >
                {industryNavItems.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    className={
                      pathname === item.href
                        ? "cursor-pointer text-orange-700 focus:bg-orange-50 focus:text-orange-800"
                        : "cursor-pointer text-foreground focus:bg-orange-50 focus:text-foreground"
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
                <span className="absolute inset-0 rounded-full bg-orange-100 opacity-0 transition group-hover:opacity-100" />
                <motion.span
                  className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-orange-400/90"
                  layoutId="nav-underline"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            ))}

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="flex items-center gap-2 rounded-full border border-border bg-orange-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:border-orange-200 hover:text-foreground"
                  whileHover={
                    shouldReduceMotion ? undefined : { rotate: -2, scale: 1.02 }
                  }
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="h-4 w-4" />
                  DE
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-md border border-border shadow-lg">
                <DropdownMenuItem className="text-foreground">
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.nav>

          <div className="relative flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-orange-50"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </motion.div>
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
            className="relative z-10 mx-auto mt-2 w-full max-w-[720px] px-4"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-white/95 px-4 py-6 text-foreground shadow-2xl shadow-orange-200/40">
              <div className="flex flex-col gap-4">
                <motion.div
                  className="rounded-xl border border-border bg-orange-50/50 px-3 py-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <p className="mb-2 px-1 text-xs font-medium uppercase tracking-[0.25em] text-orange-700">
                    Module
                  </p>
                  <div className="flex flex-col gap-2">
                    {moduleNavItems.map((item) => (
                      <button
                        key={item.section}
                        type="button"
                        className="rounded-lg border border-border bg-white px-4 py-2.5 text-left text-base font-medium tracking-wide text-foreground transition-colors hover:border-orange-200 hover:bg-orange-50"
                        onClick={() => {
                          scrollToModuleSection(item.section);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-xl border border-border bg-orange-50/50 px-3 py-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.03,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <p className="mb-2 px-1 text-xs font-medium uppercase tracking-[0.25em] text-orange-700">
                    Software
                  </p>
                  <div className="flex flex-col gap-2">
                    {softwareNavItems.map((item) => (
                      <button
                        key={item.section}
                        type="button"
                        className="rounded-lg border border-border bg-white px-4 py-2.5 text-left text-base font-medium tracking-wide text-foreground transition-colors hover:border-orange-200 hover:bg-orange-50"
                        onClick={() => {
                          scrollToSoftwareSection(item.section);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.button
                  className={[
                    "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-base font-medium tracking-wide transition-colors",
                    roadmapNavActive
                      ? "border-orange-400/40 bg-orange-100 text-orange-800"
                      : "border-border bg-white hover:border-orange-200 hover:bg-orange-50",
                  ].join(" ")}
                  onClick={() => {
                    router.push(roadmapNavItem.href);
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <span>{roadmapNavItem.name}</span>
                </motion.button>

                <motion.button
                  className={[
                    "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-base font-medium tracking-wide transition-colors",
                    preiseNavActive
                      ? "border-orange-400/40 bg-orange-100 text-orange-800"
                      : "border-border bg-white hover:border-orange-200 hover:bg-orange-50",
                  ].join(" ")}
                  onClick={() => {
                    router.push(preiseNavItem.href);
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.03,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <span>{preiseNavItem.name}</span>
                </motion.button>

                <motion.button
                  className={[
                    "flex items-center justify-between rounded-xl border px-4 py-3 text-left text-base font-medium tracking-wide transition-colors",
                    ueberUnsNavActive
                      ? "border-orange-400/40 bg-orange-100 text-orange-800"
                      : "border-border bg-white hover:border-orange-200 hover:bg-orange-50",
                  ].join(" ")}
                  onClick={() => {
                    router.push(ueberUnsNavItem.href);
                    setIsMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.06,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <span>{ueberUnsNavItem.name}</span>
                </motion.button>

                <motion.div
                  className="rounded-xl border border-border bg-orange-50/50 px-3 py-3"
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
                  <p className="mb-2 px-1 text-xs font-medium uppercase tracking-[0.25em] text-orange-700">
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
                            ? "border-orange-400/40 bg-orange-100 text-orange-800"
                            : "border-border bg-white text-foreground hover:border-orange-200 hover:bg-orange-50",
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
                    className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-left text-base font-medium tracking-wide transition-colors hover:border-orange-200 hover:bg-orange-50"
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
    </motion.header>
  );
}
