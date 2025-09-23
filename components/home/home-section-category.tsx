"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCategory from "@/components/home/product-category"

export default function HomeSectionCategory() {
    const products = [
        {
            title: "Athletic Shoe",
            subtitle: "Available in all stores",
            price: "$99.99",
            image: {
                src: "/pub/Group 8.png?height=720&width=960",
                alt: "Athletic shoe product photo",
            },
            cardClassName: "",
            imageClassName: "object-cover bg-white",
        },
        {
            title: "Nike Air Force",
            subtitle: "Available online only",
            price: "$59.99",
            image: {
                src: "/img/apple_intelligence_1.png?height=720&width=960",
                alt: "Nike Air Force sneaker on colorful background",
            },
            // subtle tinted border to echo the screenshot's middle card accent
            cardClassName: "ring-1 ring-pink-200",
            imageClassName: "object-cover",
        },
        {
            title: "Nike Athletic",
            subtitle: "Available online only",
            price: "$29.99",
            image: {
                src: "/img/display_static__d0bsfkqzo6s2_medium_2x.jpg?height=720&width=960",
                alt: "Black Nike athletic shoe on blue background",
            },
            // light sky ring to hint the blue tone from the screenshot
            cardClassName: "ring-1 ring-sky-200",
            imageClassName: "object-cover bg-sky-200",
        },
    ]
    return (
        <main className="min-h-screen w-full py-10 md:py-14">
            <section className="mx-auto max-w-full px-4 md:px-6">
                <div className="rounded-2xl p-5 shadow-lg ring-1 ring-black/5 md:p-8">
                    <div className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-8 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Nos produits préférés pour vous</h2>
                            <p className="text-sm text-muted-foreground">Parcourez nos dernières offres pour vous</p>
                        </div>
                        <div className="w-full md:w-auto">
                            <Button
                                asChild
                                className="w-full rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 md:w-auto"
                                aria-label="Explore all products"
                            >
                                <Link href="/products">
                                    Explore all
                                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                        {products.map((p, idx) => (
                            <ProductCategory
                                key={idx}
                                title={p.title}
                                subtitle={p.subtitle}
                                price={p.price}
                                image={p.image}
                                cardClassName={p.cardClassName}
                                imageClassName={p.imageClassName}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
