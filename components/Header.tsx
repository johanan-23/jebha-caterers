"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showNavigation?: boolean;
  activeSection?: string;
  onSectionClick?: (section: string) => void;
  sections?: string[];
}

export default function Header({
  showNavigation = false,
  activeSection = "",
  onSectionClick = () => {},
  sections = [],
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/jebha.svg"
              alt="Jebha Caterers Logo"
              width={24}
              height={24}
            />
            <h1 className="text-xl font-bold">Jebha Caterers</h1>
          </Link>
        </motion.div>

        {showNavigation && (
          <>
            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex gap-8"
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                    />
                  )}
                </button>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {showNavigation && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border-b"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => handleSectionClick(section)}
                    className={`text-left py-2 text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === section
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}
