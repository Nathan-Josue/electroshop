"use client"

import {ChevronRight} from "lucide-react";
import {useEffect, useRef, useState} from "react";

export default function CategoriesSectionBentoLayout(){
    const sectionsRef = useRef<Record<string, HTMLElement>>({})
    const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
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
        <section ref={setSectionRef("categories")} className="py-8 md:py-12 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-1000 ${
                        visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">Explorez notre écosystème</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Une gamme complète d'appareils et accéssoires pour tous vos besoins technologiques
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
                                <p className="text-gray-100 mb-2">Samsung, Iphone, Xiaomi, Huawei</p>
                                <p className="text-sm text-gray-200">5k+ articles disponibles</p>
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
                                <p className="text-xs text-gray-200">Et bien plus encore</p>
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
                                <p className="text-gray-100 text-xs mb-1">Galaxy Watch6, Smart Watch</p>
                                <p className="text-xs text-gray-200">Et bien plus encore</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                                <span className="text-xs font-medium">Explorer</span>
                                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                    {/* Game - Medium Card */}

                    <div
                        className={`md:col-span-2 lg:col-span-1 rounded-3xl p-6 text-white relative overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                            visibleSections.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                        style={{
                            transitionDelay: "300ms",
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/produit/112872-nintendo-switch-oled-model-mario-red-edition-front-dock-joy-con-1200x675.avif?height=400&width=300&text=Galaxy+Watch+Background')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-2">Jeux Vidéo</h3>
                                <p className="text-gray-100 text-xs mb-1">Nitendo Switch,PS4, PS5, Jeux</p>
                                <p className="text-xs text-gray-200">Et bien plus encore</p>
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
                                <p className="text-gray-100 text-sm mb-1">Galaxy Buds, casques, AirPods, ecouteur</p>
                                <p className="text-xs text-gray-200">Et bien plus encore </p>
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
                                <p className="text-gray-100 text-sm mb-1">QLED, Neo QLED, The Frame, </p>
                                <p className="text-xs text-gray-200">Et bien plus encore </p>
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
                                <p className="text-gray-100 text-sm mb-1">HP,Lenovo, Azure, Galaxy Book3, Chromebook, Mac ,iMac</p>
                                <p className="text-xs text-gray-200">Et bien plus encore </p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                                <span className="text-sm font-medium">Travailler</span>
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
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/img/accessoires.png?height=400&width=600&text=Galaxy+Book+Background')`,
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
                                <h3 className="text-xl md:text-2xl font-bold mb-2">Accessoires</h3>
                                <p className="text-gray-100 text-sm mb-1">Clés USB, Adaptateurs, Claviers et souris sans fils, Câbles de connexion</p>
                                <p className="text-xs text-gray-200">Et bien plus encore </p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                                <span className="text-sm font-medium">Acheter</span>
                                <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}