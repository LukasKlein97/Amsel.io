"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInHeader, setIsMouseInHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const navigationItems = [
    { name: "Lösungen", href: "#solutions", hasDropdown: false },
    { name: "Features", href: "#features", hasDropdown: false },
    { name: "Preise", href: "#pricing" },
    { name: "Über uns", href: "#about" },
    { name: "Support", href: "#support" },
    { name: "Kontakt", href: "#contact" },
  ];

  // const solutionsDropdownItems = [
  //   { name: "Büro & Verwaltung", href: "#office" },
  //   { name: "Produktion & Fertigung", href: "#production" },
  //   { name: "Handwerk & Service", href: "#craft" },
  //   { name: "Logistik & Transport", href: "#logistics" },
  // ];

  // const featuresDropdownItems = [
  //   { name: "Gefährdungsbeurteilungen (GBU)", href: "#gbu" },
  //   { name: "Begehungsprotokolle", href: "#protocols" },
  //   { name: "Aktionsplan", href: "#action-plan" },
  //   { name: "Reporting & Analytics", href: "#analytics" },
  //   { name: "Gefahrstoffmanagement", href: "#hazards" },
  //   { name: "Unfall Management", href: "#accidents" },
  // ];

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsMouseInHeader(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    if (headerRef.current) {
      headerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    const currentHeaderRef = headerRef.current;

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (currentHeaderRef) {
        currentHeaderRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToMainPage = () => {
    router.push("/");
  };

  return (
    <header
      ref={headerRef}
      className="relative z-50 text-white bg-transparent overflow-hidden"
      style={{
        background: isMouseInHeader
          ? `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)`
          : "transparent",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/40"></div>

      {/* Taschenlampen-Effekt */}
      {isMouseInHeader && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x - 75,
            top: mousePosition.y - 75,
            width: "150px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 40%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(1px)",
            zIndex: 5,
          }}
        />
      )}

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="border-2 border-white px-4 py-2 cursor-pointer hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
              onClick={navigateToMainPage}
            >
              <span className="text-xl font-bold tracking-wider">AMS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="text-white hover:text-gray-200 transition-colors duration-200 font-normal flex items-center gap-1 bg-transparent border-none cursor-pointer backdrop-blur-sm"
                        onClick={() => {
                          if (item.name === "Lösungen") {
                            scrollToSection("solutions");
                          } else if (item.name === "Features") {
                            scrollToSection("features");
                          }
                        }}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    {/* <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      {item.name === "Lösungen" &&
                        solutionsDropdownItems.map((dropdownItem) => (
                          <DropdownMenuItem
                            key={dropdownItem.name}
                            className="text-white hover:bg-slate-700 cursor-pointer"
                            onClick={() =>
                              scrollToSection(dropdownItem.href.substring(1))
                            }
                          >
                            {dropdownItem.name}
                          </DropdownMenuItem>
                        ))}
                      {item.name === "Features" &&
                        featuresDropdownItems.map((dropdownItem) => (
                          <DropdownMenuItem
                            key={dropdownItem.name}
                            className="text-white hover:bg-slate-700 cursor-pointer"
                            onClick={() =>
                              scrollToSection(dropdownItem.href.substring(1))
                            }
                          >
                            {dropdownItem.name}
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent> */}
                  </DropdownMenu>
                ) : (
                  <button
                    className="text-white hover:text-gray-200 transition-colors duration-200 font-normal bg-transparent border-none cursor-pointer backdrop-blur-sm"
                    onClick={() => {
                      if (item.name === "Lösungen") {
                        scrollToSection("solutions");
                      } else if (item.name === "Features") {
                        scrollToSection("features");
                      } else if (item.name === "Kontakt") {
                        scrollToSection("contact");
                      } else if (item.name === "Preise") {
                        scrollToSection("pricing");
                      }
                    }}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white hover:text-gray-200 transition-colors duration-200 font-normal flex items-center gap-1 bg-transparent border-none cursor-pointer backdrop-blur-sm">
                  <Globe className="h-4 w-4" />
                  DE
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800/90 backdrop-blur-sm border-slate-700">
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-slate-700">
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4 backdrop-blur-sm bg-slate-900/20 rounded-lg">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className="text-white hover:text-gray-200 transition-colors duration-200 py-2 font-normal text-left bg-transparent border-none cursor-pointer"
                  onClick={() => {
                    if (item.name === "Lösungen") {
                      scrollToSection("solutions");
                    } else if (item.name === "Features") {
                      scrollToSection("features");
                    } else if (item.name === "Kontakt") {
                      scrollToSection("contact");
                    } else if (item.name === "Preise") {
                      scrollToSection("pricing");
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
