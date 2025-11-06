"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ContactModal from "@/components/QuoteModal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Transfers", href: "/transfers" },
    { name: "Shuttles", href: "/shuttles" }, // ✅ Added new Shuttles page link
    { name: "School trips", href: "/school-trips" },
    { name: "Corporate events", href: "/corporate-events" },
    { name: "About Us", href: "/about-us" }
  ];

  const linkClasses = (href: string) => {
    const base = "px-3 py-2 rounded-md text-base font-medium";
    const isActive = pathname === href;
    return isActive
      ? `${base} text-primary underline`
      : `${base} text-gray-700 hover:text-primary hover:underline`;
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo2.png"
            width={150}
            height={49}
            alt="Belgium Buses Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center">
          <ContactModal />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  linkClasses(item.href).replace("text-base", "text-sm") +
                  " block w-full"
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2">
              <ContactModal />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
