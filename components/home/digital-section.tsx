"use client";

import { useRef } from "react";
import Image from "next/image";

const categories = [
    {
        title: "Ordinateurs portables",
        img: "/img/produit/pc/71K7JlLfwIL._AC_SL1500_.png",
    },
    {
        title: "Smartphones & Tablettes",
        img: "/img/produit/tablette /Group 10.png",
    },
    {
        title: "Accessoires PC",
        img: "/images/accessoires-pc.png",
    },
    {
        title: "Stockage & Cloud",
        img: "/images/stockage-cloud.png",
    },
    {
        title: "Périphériques & Audio",
        img: "/images/peripheriques-audio.png",
    },
    {
        title: "Gadgets connectés",
        img: "/images/gadgets-connectes.png",
    },
];

export default function DigitalSection() {
    const scrollRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Tout pour réussir en informatique
                </h2>
                <a href="#" className="text-blue-500 hover:underline">
                    Acheter
                </a>
            </div>

            <div className="relative">
                {/* Bouton flèche gauche */}
                <button
                    onClick={() => scroll(-200)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-600"
                    aria-label="Scroll gauche"
                >
                    &#10094;
                </button>

                {/* Conteneur scrollable */}
                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center min-w-[12rem]"
                        >
                            <div className="w-48 h-48 rounded-xl bg-indigo-100 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={cat.img}
                                    alt={cat.title}
                                    width={300}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <span className="mt-2 text-sm font-semibold">{cat.title}</span>
                        </div>
                    ))}
                </div>

                {/* Bouton flèche droite */}
                <button
                    onClick={() => scroll(200)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-500 text-white rounded-full p-2 hover:bg-indigo-600"
                    aria-label="Scroll droite"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
}
