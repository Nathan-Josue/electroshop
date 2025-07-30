"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart/cart-context"
import SearchBar from "@/components/search/search-bar"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isSearchOpen && !target.closest(".search-container")) {
        setIsSearchOpen(false)
      }
    }

    if (isSearchOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isSearchOpen])

  return (
      <header
          className={`search-container sticky top-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg"
                  : "bg-white/80 backdrop-blur-md border-b border-gray-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with animation */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 relative rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Image src="/logo/shop.svg" alt="Logo ElectroShop" fill />
              </div>
              <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-blue-600">
              ElectroShop
            </span>
            </Link>

            {/* Navigation Desktop with hover effects */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { href: "/", label: "Accueil" },
                { href: "/products", label: "Produits" },
                { href: "/categories/smartphones", label: "iPhone" },
                { href: "/categories/computers", label: "Mac" },
                { href: "/categories/tablets", label: "iPad" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                  <Link
                      key={item.href}
                      href={item.href}
                      className="relative text-gray-700 hover:text-black transition-all duration-300 font-medium group"
                      style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
              ))}
            </nav>

            {/* Search Bar with animation */}
            {/* <div className="hidden lg:block flex-1 max-w-md mx-8">
            <div className="transform transition-all duration-300 hover:scale-105">
              <SearchBar />
            </div>
          </div> */}

            {/* Actions with hover animations */}
            <div className="flex items-center space-x-4">
              <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/account">
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                >
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/cart" className="relative group">
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
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="border-t bg-white/95 backdrop-blur-md">
              <nav className="py-4 space-y-4">
                <div className="px-4 transform transition-all duration-300 hover:scale-105">
                  <SearchBar />
                </div>
                {[
                  { href: "/", label: "Accueil" },
                  { href: "/products", label: "Produits" },
                  { href: "/categories/smartphones", label: "iPhone" },
                  { href: "/categories/computers", label: "Mac" },
                  { href: "/contact", label: "Contact" },
                ].map((item, index) => (
                    <Link
                        key={item.href}
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
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}
