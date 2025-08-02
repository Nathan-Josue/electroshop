"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { getAllProducts } from "@/lib/products-data"

const AppleFeaturedProducts = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards with staggered delay
            setTimeout(() => setVisibleCards((prev) => [true, prev[1], prev[2]]), 200)
            setTimeout(() => setVisibleCards((prev) => [prev[0], true, prev[2]]), 400)
            setTimeout(() => setVisibleCards((prev) => [prev[0], prev[1], true]), 600)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const allProducts = getAllProducts()
  const featuredProducts = [
    {
      ...allProducts.find((p) => p.id === "iphone-16-pro")!,
      backgroundColor: "bg-black",
      textColor: "text-white",
    },
    {
      ...allProducts.find((p) => p.id === "macbook-pro-m3")!,
      backgroundColor: "bg-gray-50",
      textColor: "text-black",
    },
    {
      ...allProducts.find((p) => p.id === "ipad-air-m2")!,
      backgroundColor: "bg-blue-50",
      textColor: "text-black",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`${product.backgroundColor} rounded-3xl overflow-hidden relative min-h-[300px] flex flex-col justify-between p-8 group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                index === 0 ? "lg:col-span-2" : ""
              } ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className={`${product.textColor} text-center relative z-10`}>
                <h2 className="text-4xl md:text-5xl font-semibold mb-2 transition-transform duration-500 group-hover:scale-105">
                  {product.name}
                </h2>
                <p className="text-xl md:text-2xl font-light mb-4 transition-all duration-500 group-hover:text-opacity-90">
                  {product.tagline}
                </p>
                <p className="text-lg mb-6 opacity-80 transition-all duration-500 group-hover:opacity-100">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-xl font-medium mb-8 transition-transform duration-500 group-hover:scale-105">
                  À partir de {product.price.toLocaleString("fr-FR")} €
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link href={`/products/${product.id}`}>
                    <Button
                      className={`${
                        product.textColor === "text-white"
                          ? "bg-white text-black hover:bg-gray-100 hover:shadow-lg"
                          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
                      } font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 group/btn`}
                    >
                      En savoir plus
                      <div className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">→</div>
                    </Button>
                  </Link>
                  <Link href={`/products/${product.id}`}>
                    <Button
                      variant="link"
                      className={`${product.textColor} font-medium transition-all duration-300 hover:scale-105 group/link`}
                    >
                      Acheter
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center relative">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="max-w-full h-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Floating elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppleFeaturedProducts
