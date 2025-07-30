"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AppleHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoScale, setVideoScale] = useState(1)
  const [videoOpacity, setVideoOpacity] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Calculer la position relative de la section dans la viewport
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))

      // Effet de scale : la vidéo grandit quand on scroll vers elle
      if (sectionTop > windowHeight) {
        // Section pas encore visible
        setVideoScale(0.8)
        setVideoOpacity(0.7)
      } else if (sectionTop <= 0 && sectionTop >= -sectionHeight) {
        // Section visible et en cours de scroll
        const progress = Math.abs(sectionTop) / sectionHeight
        const scale = 1 + progress * 0.3 // Scale de 1 à 1.3
        const opacity = Math.max(0.3, 1 - progress * 0.7) // Opacity de 1 à 0.3

        setVideoScale(scale)
        setVideoOpacity(opacity)
      } else if (sectionTop < -sectionHeight) {
        // Section complètement scrollée
        setVideoScale(1.3)
        setVideoOpacity(0.3)
      } else {
        // Section au centre
        setVideoScale(1)
        setVideoOpacity(1)
      }
    }

    // Throttle scroll events pour les performances
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [])

  // Auto-play vidéo quand elle devient visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Fallback si autoplay échoue
              console.log("Autoplay prevented")
            })
          } else if (videoRef.current) {
            videoRef.current.pause()
          }
        })
      },
      { threshold: 0.3 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black animate-gradient-shift"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated badge */}
          <div
            className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Nouvelle collaboration 2025</span>
          </div>

          {/* Main title with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
            <span
              className={`block transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              MacBook Pro
            </span>
          </h1>

          <p
            className={`text-2xl md:text-3xl font-light mb-8 text-gray-300 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mind-blowing. Head-turning.
          </p>

          {/* Animated buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/products/macbook-pro-m3">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
              >
                En savoir plus
                <div className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</div>
              </Button>
            </Link>
            <Link href="/products/macbook-pro-m3">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black font-medium px-8 py-3 rounded-full text-lg bg-transparent transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                Acheter
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Video with scroll-based scaling */}
          <div
            className={`relative transition-all duration-1500 delay-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div
              className="relative group"
              style={{
                transform: `scale(${videoScale})`,
                opacity: videoOpacity,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out",
              }}
            >
              <video
                ref={videoRef}
                className="mx-auto max-w-full h-auto rounded-2xl shadow-2xl"
                width="800"
                height="600"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  maxHeight: "80vh",
                  objectFit: "cover",
                }}
              >
                <source src="/videos/apple-hero.mp4" type="video/mp4" />
                {/* Fallback image si la vidéo ne charge pas */}
                <img
                  src="/placeholder.svg?height=600&width=800&text=MacBook+Pro"
                  alt="MacBook Pro"
                  className="mx-auto max-w-full h-auto"
                />
              </video>

              {/* Glow effect qui s'intensifie avec le scale */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent rounded-2xl transition-opacity duration-500 blur-xl"
                style={{
                  opacity: (videoScale - 1) * 2, // Plus la vidéo est grande, plus le glow est intense
                }}
              ></div>

              {/* Overlay interactif */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Indicateurs de scroll */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div
                className="w-2 h-2 bg-white/40 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: videoScale > 1.1 ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.4)",
                }}
              ></div>
              <div
                className="w-2 h-2 bg-white/40 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    videoScale >= 1 && videoScale <= 1.1 ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.4)",
                }}
              ></div>
              <div
                className="w-2 h-2 bg-white/40 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: videoScale < 1 ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.4)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator avec animation basée sur la position */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300"
        style={{
          opacity: videoScale < 1.2 ? 1 : 0,
          transform: `translateX(-50%) translateY(${(videoScale - 1) * 20}px)`,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
