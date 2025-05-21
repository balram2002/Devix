"use client";

import Link from "next/link";
import { Blocks, Code2, Menu, X } from "lucide-react";
import { SignedIn } from "@clerk/nextjs";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative z-10">
      <div
        className="flex items-center justify-between bg-[#0a0a0f]/80 backdrop-blur-xl px-4 py-3 sm:px-6 sm:py-4 lg:px-6 lg:py-6 mb-4 rounded-lg"
      >
        {/* Logo and Navigation for larger screens */}
        <div className="flex items-center gap-4 lg:gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
            <div
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all"
            >
              <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="block text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                Devix
              </span>
              <span className="block text-xs text-blue-400/60 font-medium hidden sm:block">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          {/* Navigation for larger screens */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/snippets"
              className="relative group flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Code2 className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Right-side controls */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Tooltip title="Select Theme" arrow>
              <ThemeSelector />
            </Tooltip>
            <Tooltip title="Select Language" arrow>
              <LanguageSelector />
            </Tooltip>
          </div>
          <SignedIn>
            <RunButton />
          </SignedIn>
          <div className="pl-3 border-l border-gray-800">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[4.5rem] sm:top-[5rem] bg-[#0a0a0f]/95 backdrop-blur-xl p-4 border-t border-gray-800"
          role="navigation"
        >
          <nav className="flex flex-col space-y-4">
            <Link
              href="/snippets"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">Snippets</span>
            </Link>
            <div className="flex flex-col gap-4">
              <Tooltip title="Select Theme" arrow>
                <ThemeSelector />
              </Tooltip>
              <Tooltip title="Select Language" arrow>
                <LanguageSelector />
              </Tooltip>
              <SignedIn>
                <RunButton />
              </SignedIn>
              <div className="pt-3 border-t border-gray-800">
                <HeaderProfileBtn />
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;