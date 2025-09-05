"use client";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function NavbarDemo() {
  const pathname = usePathname(); // ✅ get current path

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/team" },
    { name: "Events", link: "/events" },
    { name: "Projects", link: "/projects" },
    { name: "About Us", link: "/aboutus" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },


  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md border-b-2 border-gray-300">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
          <NavItems
            items={navItems}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-black text-white px-4 py-6"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg py-3 border-b ${
                  pathname === item.link
                    ? "text-blue-400 font-semibold"
                    : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
