"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart/cart-context"
import SearchBar from "@/components/search/search-bar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Define the structure for navigation items, including optional submenus
interface NavItem {
  href?: string
  label: string
  submenu?: NavItem[]
}

const navItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  {
    label: "Produits",
    submenu: [
      { href: "/products", label: "Tous les produits" },
      { href: "/products/new-arrivals", label: "Nouveautés" },
      { href: "/products/accessories", label: "Accessoires" },
      { href: "/products/deals", label: "Offres spéciales" },
    ],
  },
  {
    label: "Marques",
    submenu: [
      { href: "/", label: "Apple" },
      { href: "/samsung", label: "Samsung" },
      { href: "/infinix", label: "Infinix" },
      { href: "/huawei", label: "Huawei" },
      { href: "/xiaomi", label: "Xiaomi" },
      { href: "/tecno", label: "Tecno" },
      { href: "/itel", label: "Itel" },
    ],
  },
  {
    label: "Ordinateurs",
    submenu: [
      { href: "/computers/hp", label: "HP" },
      { href: "/computers/dell", label: "Dell" },
      { href: "/computers/lenovo", label: "Lenovo" },
      { href: "/computers/asus", label: "Asus" },
      { href: "/computers", label: "Tous les ordinateurs" },
    ],
  },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null) // State for active desktop submenu
  const headerRef = useRef<HTMLElement>(null) // Ref for header to detect clicks outside

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false)
        setActiveMenu(null) // Close active menu on escape
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      // Close search if open and click is outside search container
      if (isSearchOpen && !target.closest(".search-container")) {
        setIsSearchOpen(false)
      }
      // Close active menu if open and click is outside header
      if (activeMenu && headerRef.current && !headerRef.current.contains(target)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isSearchOpen, activeMenu]) // Depend on activeMenu as well

  const handleMouseEnter = (label: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setActiveMenu(label)
    } else {
      setActiveMenu(null) // Close any open submenu if hovering over a non-submenu item
    }
  }

  const handleMouseLeave = () => {
    // Delay closing to allow moving between menu items without flicker
    setTimeout(() => {
      if (!headerRef.current?.querySelector(":hover")) {
        // Check if mouse is still over the header or submenu
        setActiveMenu(null)
      }
    }, 100)
  }

  const currentSubmenu = navItems.find((item) => item.label === activeMenu)?.submenu

  return (
      <header
          ref={headerRef} // Attach ref to header
          className={`search-container sticky top-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg"
                  : "bg-white/80 backdrop-blur-md border-b border-gray-200"
          }`}
          onMouseLeave={handleMouseLeave} // Add mouse leave to header
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={() => setActiveMenu(null)}>
              <img src="/logo/shop.svg" alt="Logo Shop" className="h-12 w-auto" />
              <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-blue-600">
              ElectroShop
            </span>
            </Link>

            {/* Navigation Desktop with hover effects */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) =>
                  item.href ? (
                      <Link
                          key={item.label}
                          href={item.href}
                          className="relative text-gray-700 hover:text-black transition-all duration-300 font-medium group"
                          style={{ animationDelay: `${index * 100}ms` }}
                          onMouseEnter={() => handleMouseEnter(item.label, false)}
                          onClick={() => setActiveMenu(null)} // Close menu on click
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                  ) : (
                      <div
                          key={item.label}
                          className="relative text-gray-700 hover:text-black transition-all duration-300 font-medium group cursor-pointer flex items-center"
                          style={{ animationDelay: `${index * 100}ms` }}
                          onMouseEnter={() => handleMouseEnter(item.label, true)}
                      >
                        {item.label}
                        <ChevronDown
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                        />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </div>
                  ),
              )}
            </nav>

            {/* Actions with hover animations */}
            <div className="flex items-center space-x-4">
              <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen)
                    setActiveMenu(null) // Close any open menu when search is toggled
                  }}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/account" onClick={() => setActiveMenu(null)}>
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/cart" className="relative group" onClick={() => setActiveMenu(null)}>
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                >
                  <ShoppingCart className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  {itemCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-blue-600 animate-pulse">
                        {itemCount}
                      </Badge>
                  )}
                </Button>
              </Link>
              {/* Mobile Menu Button with animation */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-gray-100 transition-all duration-300"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen)
                    setActiveMenu(null) // Close desktop menu when mobile menu is toggled
                  }}
              >
                <div className="relative w-5 h-5">
                  <Menu
                      className={`absolute inset-0 transition-all duration-300 ${
                          isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                      }`}
                  />
                  <X
                      className={`absolute inset-0 transition-all duration-300 ${
                          isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                      }`}
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Desktop Submenu Overlay */}
          {activeMenu && currentSubmenu && (
              <div
                  className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg transition-all duration-300 ease-out ${
                      activeMenu ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
                  }`}
                  onMouseEnter={() => setActiveMenu(activeMenu)} // Keep menu open if mouse enters submenu
                  onMouseLeave={handleMouseLeave} // Allow closing when leaving submenu
              >
                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col space-y-2">
                  {currentSubmenu.map((subItem) => (
                      <Link
                          key={subItem.href}
                          href={subItem.href!}
                          className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                          onClick={() => setActiveMenu(null)} // Close menu on click
                      >
                        {subItem.label}
                      </Link>
                  ))}
                </div>
              </div>
          )}

          {/* Search Bar avec animation fluide */}
          <div
              className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 transition-all duration-500 ease-out ${
                  isSearchOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
              }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="max-w-2xl mx-auto">
                <SearchBar />
              </div>
            </div>
          </div>

          {/* Mobile Menu with slide animation */}
          <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="border-t bg-white/95 backdrop-blur-md">
              <nav className="py-4 space-y-4">
                <div className="px-4 transform transition-all duration-300 hover:scale-105">
                  <SearchBar />
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {navItems.map((item, index) =>
                      item.href ? (
                          <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:translate-x-2 hover:bg-gray-50 rounded-lg mx-4"
                              style={{
                                animationDelay: `${index * 100}ms`,
                                transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                                opacity: isMenuOpen ? 1 : 0,
                                transition: `all 0.3s ease-out ${index * 100}ms`,
                              }}
                              onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                      ) : (
                          <AccordionItem value={item.label} key={item.label} className="border-b-0">
                            <AccordionTrigger className="px-4 py-2 text-gray-700 hover:text-black font-medium transition-all duration-300 hover:translate-x-2 hover:bg-gray-50 rounded-lg mx-4">
                              {item.label}
                            </AccordionTrigger>
                            <AccordionContent className="pb-0">
                              <div className="pl-8 pr-4 py-2 space-y-2">
                                {item.submenu?.map((subItem) => (
                                    <Link
                                        key={subItem.href}
                                        href={subItem.href!}
                                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                      ),
                  )}
                </Accordion>
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}
