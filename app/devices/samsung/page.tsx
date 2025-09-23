"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductCard from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { ChevronRight, Smartphone, Tablet, Watch, Headphones, Tv, Laptop } from "lucide-react"
import Image from "next/image";
import {Badge} from "@/components/badge"
import {samsungProducts} from "@/data/samsung-products";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    count: "15+ modèles",
    description: "Galaxy S24 + S25, A-Series, Note",
    color: "bg-blue-500",
  },
  {
    name: "Tablettes",
    icon: Tablet,
    count: "8+ modèles",
    description: "Galaxy Tab S9, Tab A",
    color: "bg-purple-500",
  },
  {
    name: "Montres",
    icon: Watch,
    count: "6+ modèles",
    description: "Galaxy Watch6, Watch FE",
    color: "bg-green-500",
  },
  {
    name: "Audio",
    icon: Headphones,
    count: "10+ modèles",
    description: "Galaxy Buds, casques",
    color: "bg-orange-500",
  },
  {
    name: "TV & Écrans",
    icon: Tv,
    count: "20+ modèles",
    description: "QLED, Neo QLED, The Frame",
    color: "bg-red-500",
  },
  {
    name: "Ordinateurs",
    icon: Laptop,
    count: "5+ modèles",
    description: "Galaxy Book3, Chromebook",
    color: "bg-indigo-500",
  },
]

export default function SamsungPage() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
  const sectionsRef = useRef<Record<string, HTMLElement>>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    Object.keys(sectionsRef.current).forEach((key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [key]: true }))
            }
          })
        },
        { threshold: 0.1 },
      )

      if (sectionsRef.current[key]) {
        observer.observe(sectionsRef.current[key])
        observers.push(observer)
      }
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const setSectionRef = (key: string) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[key] = el
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - Samsung Style */}
        <section ref={setSectionRef("hero")} className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
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
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.hero ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="flex flex-col items-start space-x-3 mb-6 racking-tight">
                  <div className="w-auto h-auto rounded-xl flex items-center justify-center">
                    <Image src={"/logo/samsung.svg"} alt={"Logo samsung"} width={300} height={100}/>
                  </div>
                  <div className="w-auto h-auto rounded-xl flex items-center justify-center">
                    <Image src={"/logo/logo_galaxy_ai.svg"} alt={"Logo galaxy ai"} width={200} height={100}/>
                    <Image src={"/logo/ia.webp"} alt={"Logo galaxy ai"} width={100} height={500}/>
                    {/*<div>
                      <video
                          className="w-[60px] h-[60px] rounded-xl"
                          autoPlay
                          muted
                          loop
                          playsInline
                      >
                        <source src="/videos/ia.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la balise vidéo.
                      </video>
                    </div>*/}

                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Découvrez l'univers Samsung chez ElectroShop. Des smartphones Galaxy S24 aux nouvelles innovations{" "}
                  <span className="text-blue-400 font-semibold">Galaxy IA</span>, en passant par les montres connectées, tablettes et
                  écouteurs, trouvez tous vos équipements Samsung préférés.
                </p>


                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
                    Voir tous les produits
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
                  >
                    Galaxy S24 Ultra
                  </Button>
                </div>
              </div>

              <div
                  className={`transition-all duration-1500 delay-500 ${
                      visibleSections.hero
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 translate-x-8 scale-95"
                  }`}
              >
                <div className="relative group max-w-2xl mx-auto">
                  <video
                      src="/videos/Ultra-Unfolds-Galaxy-Z-Fold7-Samsung.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full max-h-[500px] object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>



            </div>
          </div>
        </section>

        {/* Categories Section - Bento Layout */}
        <section ref={setSectionRef("categories")} className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div
                className={`text-center mb-16 transition-all duration-1000 ${
                    visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Explorez l'écosystème Samsung</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une gamme complète d'appareils Samsung pour tous vos besoins technologiques
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto md:h-[800px]">
              {/* Smartphones - Large Card */}
              <div
                  className={`md:col-span-2 lg:col-span-3 md:row-span-2 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "0ms",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/samsung/NEW_PCD_Galaxy-S_Curation-KV_720x1080.webp?height=600&width=800&text=Galaxy+S24+Ultra+Background')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Smartphones</h3>
                    <p className="text-gray-100 mb-2">Galaxy S24, A-Series, Note</p>
                    <p className="text-sm text-gray-200">15+ modèles disponibles</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">Découvrir</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablettes - Medium Card */}
              <div
                  className={`md:col-span-2 lg:col-span-2 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "150ms",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/samsung/Galaxy_Tab_PCD_Curation_Card_01_S_Series_1440x640_PC.avif?height=400&width=600&text=Galaxy+Tab+S9+Background')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full -translate-y-10 translate-x-10"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Tablettes</h3>
                    <p className="text-gray-100 text-sm mb-1">Galaxy Tab S9, Tab A</p>
                    <p className="text-xs text-gray-200">8+ modèles</p>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Voir plus</span>
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Montres - Medium Card */}
              <div
                  className={`md:col-span-2 lg:col-span-1 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "300ms",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/samsung/PF_Vetical-Banner_Galaxy-Watch8-Combo_312x1012_pc.jpg?height=400&width=300&text=Galaxy+Watch+Background')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Montres</h3>
                    <p className="text-gray-100 text-xs mb-1">Galaxy Watch6</p>
                    <p className="text-xs text-gray-200">6+ modèles</p>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-xs font-medium">Explorer</span>
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Audio - Medium Card */}
              <div
                  className={`md:col-span-2 lg:col-span-2 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "450ms",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/samsung/galaxy-buds3-pro-kv-pc.webp?height=400&width=600&text=Galaxy+Buds+Background')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-full translate-y-8 translate-x-8"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Audio</h3>
                    <p className="text-gray-100 text-sm mb-1">Galaxy Buds, casques</p>
                    <p className="text-xs text-gray-200">10+ modèles</p>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Écouter</span>
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* TV & Écrans - Large Card */}
              <div
                  className={`md:col-span-2 lg:col-span-2 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "600ms",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/samsung/image 1.png?height=400&width=600&text=Samsung+QLED+TV+Background')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full -translate-y-12 -translate-x-12"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">TV & Écrans</h3>
                    <p className="text-gray-100 text-sm mb-1">QLED, Neo QLED, The Frame</p>
                    <p className="text-xs text-gray-200">20+ modèles</p>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Regarder</span>
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Ordinateurs - Medium Card */}
              <div
                  className={`md:col-span-2 lg:col-span-2 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: "750ms",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/samsung/01_Odyssey_Category_1008x312_PC_1.png?height=400&width=600&text=Galaxy+Book+Background')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-full translate-y-10 -translate-x-10"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Ordinateurs</h3>
                    <p className="text-gray-100 text-sm mb-1">Galaxy Book3, Chromebook</p>
                    <p className="text-xs text-gray-200">5+ modèles</p>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Travailler</span>
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section ref={setSectionRef("products")} className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleSections.products ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Produits Samsung populaires</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez notre sélection des meilleurs produits Samsung disponibles chez ElectroShop
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {samsungProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`transition-all duration-700 ${
                    visibleSections.products ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/products?brand=samsung">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
                  Voir tous les produits Samsung
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Galaxy S24 Spotlight */}
        <section ref={setSectionRef("spotlight")} className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.spotlight ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <Badge />
                <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                  Galaxy S25 Ultra
                </h2>
                <Image src={"/logo/logo_galaxy_ai 1.svg"} alt={"Logo galaxy ai"} width={200} height={100}/>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Le smartphone le plus avancé de Samsung avec l'intelligence artificielle intégrée, un appareil photo
                  révolutionnaire et le S Pen le plus précis jamais conçu.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Intelligence artificielle Galaxy AI intégrée",
                    "Appareil photo 200 Mpx avec zoom 100x",
                    "S Pen intégré avec nouvelles fonctionnalités",
                    "Châssis en titane premium",
                    "Écran Dynamic AMOLED 2X 6,8 pouces",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products/samsung-galaxy-s24-ultra">
                    <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
                      À partir de 1 299€
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                    En savoir plus
                  </Button>
                </div>
              </div>

              <div
                className={`transition-all duration-1500 delay-500 ${
                  visibleSections.spotlight ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
                }`}
              >
                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl overflow-hidden">
                    <img
                      src="/logo/galaxy_ai_1.svg?height=500&width=500&text=Galaxy+S24+Ultra+Hero"
                      alt="Galaxy S24 Ultra"
                      className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div
                      className="absolute bottom-1/4 -right-4 w-6 h-6 bg-purple-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ animationDelay: "10s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Samsung at ElectroShop */}
        <section ref={setSectionRef("why")} className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleSections.why ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                Pourquoi choisir Samsung chez ElectroShop ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                En tant que revendeur agréé Samsung, nous vous garantissons authenticité et service premium
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "Revendeur agréé",
                  description: "Produits Samsung authentiques avec garantie constructeur officielle",
                },
                {
                  icon: "🚚",
                  title: "Livraison express",
                  description: "Livraison gratuite et rapide pour tous vos produits Samsung",
                },
                {
                  icon: "🔧",
                  title: "Support expert",
                  description: "Équipe spécialisée Samsung pour vous conseiller et vous accompagner",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`text-center p-8 transition-all duration-700 ${
                    visibleSections.why ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={setSectionRef("cta")} className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Prêt à découvrir Samsung ?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explorez notre gamme complète de produits Samsung et trouvez l'appareil parfait pour vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products?brand=samsung">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
                    Voir tous les produits
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent"
                  >
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
