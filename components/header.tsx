"use client";

import { useState } from "react";
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

  const navigationItems = [
    { name: "Lösungen", href: "#solutions", hasDropdown: true },
    { name: "Features", href: "#features", hasDropdown: true },
    { name: "Preise", href: "#pricing" },
    { name: "Über uns", href: "#about" },
    { name: "Support", href: "#support" },
    { name: "Kontakt", href: "#contact" },
  ];

  const solutionsDropdownItems = [
    { name: "Büro & Verwaltung", href: "#office" },
    { name: "Produktion & Fertigung", href: "#production" },
    { name: "Handwerk & Service", href: "#craft" },
    { name: "Logistik & Transport", href: "#logistics" },
  ];

  const featuresDropdownItems = [
    { name: "Gefährdungsbeurteilungen (GBU)", href: "#gbu" },
    { name: "Begehungsprotokolle", href: "#protocols" },
    { name: "Aktionsplan", href: "#action-plan" },
    { name: "Reporting & Analytics", href: "#analytics" },
    { name: "Gefahrstoffmanagement", href: "#hazards" },
    { name: "Unfall Management", href: "#accidents" },
  ];

  return (
    <header className="relative z-50 bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="border-2 border-white px-4 py-2">
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
                      <button className="text-white hover:text-gray-300 transition-colors duration-200 font-normal flex items-center gap-1 bg-transparent border-none cursor-pointer">
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      {item.name === "Lösungen" &&
                        solutionsDropdownItems.map((dropdownItem) => (
                          <DropdownMenuItem
                            key={dropdownItem.name}
                            className="text-white hover:bg-slate-700"
                          >
                            {dropdownItem.name}
                          </DropdownMenuItem>
                        ))}
                      {item.name === "Features" &&
                        featuresDropdownItems.map((dropdownItem) => (
                          <DropdownMenuItem
                            key={dropdownItem.name}
                            className="text-white hover:bg-slate-700"
                          >
                            {dropdownItem.name}
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors duration-200 font-normal"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white hover:text-gray-300 transition-colors duration-200 font-normal flex items-center gap-1 bg-transparent border-none cursor-pointer">
                  <Globe className="h-4 w-4" />
                  DE
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700">
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
            className="lg:hidden text-white"
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
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 py-2 font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
