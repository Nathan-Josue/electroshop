"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductCard from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Smartphone, Tablet, Watch, Headphones, Tv, Laptop, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/badge"
import {xiaomiProducts} from "@/data/xiaomi-products"; // Using the user's specified Badge import

const categories = [
    {
        name: "Smartphones",
        icon: Smartphone,
        description: "Xiaomi 14 Series, Redmi Note, POCO",
        image: "/img/xiaomi/category-smartphone.png?height=100&width=100&query=Minimalist+icon+for+smartphone+category",
    },
    {
        name: "Tablettes",
        icon: Tablet,
        description: "Xiaomi Pad Series",
        image: "/img/xiaomi/category-tablet.png?height=100&width=100&query=Minimalist+icon+for+tablet+category",
    },
    {
        name: "Montres",
        icon: Watch,
        description: "Xiaomi Watch, Redmi Watch",
        image: "/img/xiaomi/montre.png?height=100&width=100&query=Minimalist+icon+for+smartwatch+category",
    },
    {
        name: "Audio",
        icon: Headphones,
        description: "Xiaomi Buds, Redmi Buds",
        image: "/img/xiaomi/category-audio.png?height=100&width=100&query=Minimalist+icon+for+audio+category",
    },
    {
        name: "TV & Écrans",
        icon: Tv,
        description: "Xiaomi TV, Redmi TV",
        image: "/img/xiaomi/category-tv.png?height=100&width=100&query=Minimalist+icon+for+TV+category",
    },
    {
        name: "Ordinateurs",
        icon: Laptop,
        description: "Xiaomi Book, RedmiBook",
        image: "/img/xiaomi/category-laptop.png?height=100&width=100&query=Minimalist+icon+for+laptop+category",
    },
]

export default function XiaomiPageRedesign() {
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
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <main>
                {/* Hero Section - Xiaomi Style */}
                <section
                    ref={setSectionRef("hero")}
                    className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100 overflow-hidden"
                >

                    <div className="relative z-10 text-center max-w-3xl px-4">
                        <Image
                            src={"/img/xiaomi/xiaomi-Logo.png"}
                            alt={"Logo Xiaomi"}
                            width={200}
                            height={60}
                            className={`mx-auto mb-6 transition-all duration-1000 delay-200 ease-out ${
                                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        />
                        <h1
                            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 ease-out ${
                                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            L'innovation à portée de main.
                        </h1>
                        <p
                            className={`text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed transition-all duration-1000 delay-400 ease-out ${
                                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            Découvrez la gamme complète de produits Xiaomi, conçus pour une vie plus intelligente.
                        </p>
                        <div
                            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ease-out ${
                                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <Link href="/products?brand=xiaomi">
                                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-8 py-3">
                                    Explorer les produits
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/xiaomi-14-ultra">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-300 text-gray-800 hover:bg-gray-200 rounded-full px-8 py-3 bg-white"
                                >
                                    Découvrir le Xiaomi 14 Ultra
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories Section - Clean Grid */}
                <section ref={setSectionRef("categories")} className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div
                            className={`text-center mb-16 transition-all duration-1000 ${
                                visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explorez l'écosystème Xiaomi</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Une gamme complète d'appareils pour tous vos besoins technologiques.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                            {categories.map((category, index) => (
                                <Link
                                    href={`/categories/${category.name.toLowerCase().replace(/\s/g, "-")}`}
                                    key={category.name}
                                    className={`block p-6 bg-gray-50 rounded-xl text-center transition-all duration-500 hover:bg-gray-100 hover:shadow-lg group ${
                                        visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="mb-4 flex justify-center">
                                        <Image
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.name}
                                            width={64}
                                            height={64}
                                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                                    <p className="text-gray-600 text-sm">{category.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section ref={setSectionRef("products")} className="py-16 md:py-24 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4">
                        <div
                            className={`text-center mb-16 transition-all duration-1000 ${
                                visibleSections.products ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produits Xiaomi populaires</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Découvrez notre sélection des meilleurs produits Xiaomi disponibles chez ElectroShop.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {xiaomiProducts.map((product, index) => (
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
                            <Link href="/products?brand=Xiaomi">
                                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-3">
                                    Voir tous les produits Xiaomi
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Xiaomi 14 Ultra Spotlight */}
                <section ref={setSectionRef("spotlight")} className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div
                                className={`transition-all duration-1000 ${
                                    visibleSections.spotlight ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                                }`}
                            >
                                <Badge className="bg-orange-600 text-white mb-4">Nouveau</Badge>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Xiaomi 14 Ultra</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Le fleuron de Xiaomi avec un système de caméra Leica révolutionnaire, des performances inégalées et un
                                    design élégant.
                                </p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        "Système de caméra Leica Summilux",
                                        "Processeur Snapdragon® 8 Gen 3",
                                        "Écran AMOLED WQHD+ 120Hz",
                                        "Batterie longue durée avec HyperCharge",
                                        "Design premium en cuir vegan",
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/products/xiaomi-14-ultra">
                                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-3">
                                            À partir de 1 099€
                                        </Button>
                                    </Link>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full border-gray-300 text-gray-800 hover:bg-gray-200 px-8 py-3 bg-white"
                                    >
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
                                    <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center">
                                        <img
                                            src="/img/xiaomi/phone/xiaomi-14-ultra.png?height=500&width=500&query=Xiaomi+14+Ultra+smartphone"
                                            alt="Xiaomi 14 Ultra"
                                            className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Xiaomi at ElectroShop */}
                <section ref={setSectionRef("why")} className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div
                            className={`text-center mb-16 transition-all duration-1000 ${
                                visibleSections.why ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Pourquoi choisir Xiaomi chez ElectroShop ?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                En tant que revendeur agréé, nous vous garantissons authenticité et service premium.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "✨",
                                    title: "Innovation et Qualité",
                                    description: "Des produits à la pointe de la technologie, conçus pour durer et impressionner.",
                                },
                                {
                                    icon: "🚀",
                                    title: "Performances Exceptionnelles",
                                    description: "Des appareils puissants pour une expérience utilisateur fluide et rapide.",
                                },
                                {
                                    icon: "💰",
                                    title: "Excellent Rapport Qualité/Prix",
                                    description: "La meilleure technologie accessible, sans compromis sur la qualité.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`text-center p-8 bg-white rounded-xl shadow-sm transition-all duration-700 hover:shadow-md ${
                                        visibleSections.why ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className="text-4xl mb-6 text-orange-600">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section ref={setSectionRef("cta")} className="py-16 md:py-24 bg-gray-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div
                            className={`transition-all duration-1000 ${
                                visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à découvrir Xiaomi ?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Explorez notre gamme complète de produits Xiaomi et trouvez l'appareil parfait pour vous.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/products?brand=xiaomi">
                                    <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700 rounded-full px-8 py-3">
                                        Voir tous les produits
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8 py-3 bg-transparent"
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
