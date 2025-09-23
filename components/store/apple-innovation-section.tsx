"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AppleInnovationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Auto-play vidéo quand elle devient visible
            if (videoRef.current) {
              videoRef.current.play().catch(() => {
                console.log("Autoplay prevented")
              })
            }
          } else {
            // Pause vidéo quand elle n'est plus visible
            if (videoRef.current) {
              videoRef.current.pause()
            }
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

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-black animate-gradient-shift"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 25}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-4xl md:text-6xl font-semibold mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              Innovation
              <br />
              <span className="text-gray-400 transition-all duration-1000 delay-200 inline-block">sans limite</span>
            </h2>

            <p
              className={`text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              Chez ElectroShop, nous croyons que la technologie doit améliorer la vie. C'est pourquoi nous sélectionnons
              uniquement les produits les plus innovants et les plus performants du marché.
            </p>

            <div className="space-y-4 mb-8">
              {["Produits certifiés et garantis", "Livraison express gratuite", "Support technique expert"].map(
                (feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 transition-colors duration-300 hover:text-white">{feature}</span>
                  </div>
                ),
              )}
            </div>

            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  Notre histoire
                  <div className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</div>
                </Button>
              </Link>
            </div>
          </div>

          {/* Vidéo verticale */}
          <div
            className={`relative transition-all duration-1500 delay-500 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
            }`}
          >
            <div className="relative group flex justify-center">
              {/* Container pour vidéo verticale */}
              <div className="relative w-64 md:w-80 lg:w-96 aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="https://www.apple.com//105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/small.mp4#t=2.973342"
                    type="video/mp4"
                  />
                  {/* Fallback image si la vidéo ne charge pas */}
                  <img
                    src="/placeholder.svg?height=600&width=400&text=iPhone+Innovation"
                    alt="iPhone Innovation"
                    className="w-full h-full object-cover"
                  />
                </video>

                {/* Overlay gradient subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glow effect autour de la vidéo */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              </div>

              {/* Éléments flottants autour de la vidéo */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute top-1/4 -left-8 w-4 h-4 bg-white/20 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-1/4 -right-8 w-3 h-3 bg-blue-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-800"
                  style={{ animationDelay: "3s" }}
                ></div>
              </div>

              {/* Reflet au sol */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-48 md:w-64 lg:w-80 h-20 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Indicateurs de contrôle vidéo */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Effet de parallax au scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}
