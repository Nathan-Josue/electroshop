"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    name: "iPhone",
    href: "/categories/smartphones",
    image: "/img/apple/iphone_16pro.png?height=300&width=300&text=iPhone",
    description: "Le smartphone le plus personnel au monde",
  },
  {
    name: "Mac",
    href: "/categories/computers",
    image: "/img/apple/macbook_pro_16.png?height=300&width=300&text=Mac",
    description: "Puissance et performance redéfinies",
  },
  {
    name: "iPad",
    href: "/categories/tablets",
    image: "/img/apple/ipad.png?height=300&width=300&text=iPad",
    description: "Votre prochain ordinateur n'est pas un ordinateur",
  },
  {
    name: "Apple Watch",
    href: "/categories/watches",
    image: "/img/apple/apple_wacht.png?height=300&width=300&text=Apple+Watch",
    description: "L'avenir de la santé sur votre poignet",
  },
  {
    name: "AirPods",
    href: "/categories/audio",
    image: "/img/apple/airpods_max.png?height=300&width=300&text=AirPods",
    description: "Audio magique à portée d'oreille",
  },
  {
    name: "Accessoires",
    href: "/categories/accessories",
    image: "/img/apple/accessoires.png?height=300&width=300&text=Accessoires",
    description: "Explorez les accessoires Apple",
  },
]

export default function AppleCategoryShowcase() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(categories.length).fill(false))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items with staggered delay
            categories.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 transition-all duration-1000">
            Découvrez l'univers Apple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200">
            Des produits conçus pour fonctionner ensemble de manière parfaitement fluide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className={`group bg-white rounded-3xl p-8 text-center transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 relative overflow-hidden ${
                visibleItems[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 delay-200 group-hover:scale-150"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-6 relative">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="mx-auto w-32 h-32 object-contain transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>

                <h3 className="text-2xl font-semibold text-black mb-3 transition-all duration-300 group-hover:text-blue-600">
                  {category.name}
                </h3>

                <p className="text-gray-600 mb-6 transition-all duration-300 group-hover:text-gray-700">
                  {category.description}
                </p>

                <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">Découvrir</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                </div>
              </div>

              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-pulse"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
