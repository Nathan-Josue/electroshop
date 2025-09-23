"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRef } from "react"

type CategoryRailSectionProps = {
    className?: string
}

type Category = {
    title: string
    subtitle: string
    href: string
    image: { src: string; alt: string }
    accent: string
}

function CategoryPill({ title, subtitle, href, image, accent }: Category) {
    return (
        <Link
            href={href}
            aria-label={`Découvrir la catégorie ${title}`}
            className={cn("group block shrink-0 snap-start", "w-[280px] sm:w-[320px]")}
        >
            <article
                className={cn(
                    "flex items-center gap-4 rounded-full border bg-white px-4 py-3 transition-all",
                    "hover:shadow-md ring-1",
                    accent,
                )}
            >
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-1 ring-black/5">
                    <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={112}
                        height={112}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-neutral-900">{title}</h3>
                    <p className="truncate text-xs text-neutral-600">{subtitle}</p>
                </div>
                <div
                    className={cn(
                        "ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full",
                        "bg-neutral-900 text-white transition-transform group-hover:translate-x-0.5",
                    )}
                    aria-hidden="true"
                >
                    <ChevronRightSmall />
                </div>
            </article>
        </Link>
    )
}

function ChevronRightSmall() {
    return <ChevronRight className="h-4 w-4" />
}

export default function CategoryRailSection({ className = "" }: CategoryRailSectionProps) {
    const ref = useRef<HTMLDivElement>(null)

    const scroll = (dir: "left" | "right") => {
        const el = ref.current
        if (!el) return
        const amount = Math.max(280, Math.min(560, el.clientWidth * 0.9))
        el.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        })
    }

    const categories: Category[] = [
        {
            title: "High‑Tech",
            subtitle: "Smartphones, audio, accessoires…",
            href: "#",
            accent: "ring-emerald-200",
            image: {
                src: "/img/hero_iphone_family.jpg?height=400&width=400",
                alt: "Aperçu High‑Tech: smartphone et casque",
            },
        },
        {
            title: "À moins de 20 000 fcfa",
            subtitle: "Petits prix, grandes idées",
            href: "#",
            accent: "ring-amber-200",
            image: {
                src: "/pub/pexels-karolina-grabowska-5650017.jpg?height=400&width=400",
                alt: "Sélection d’articles à petit prix",
            },
        },
        {
            title: "Jeux vidéos",
            subtitle: "Consoles, manettes et plus",
            href: "#",
            accent: "ring-violet-200",
            image: {
                src: "/pub/pexels-michael-adeleye-1879043-6993182.jpg?height=400&width=400",
                alt: "Manette de jeu",
            },
        },
        {
            title: "Bureau",
            subtitle: "Organisation et accessoires",
            href: "#",
            accent: "ring-slate-200",
            image: {
                src: "/pub/pexels-cottonbro-5076520.jpg?height=400&width=400",
                alt: "Espace de travail",
            },
        },
    ]
    return (
        <section className={cn("w-full", className)}>
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-4 flex items-end justify-between">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Nos catégorie</h2>
                        <p className="text-sm text-muted-foreground">Un aperçu rapide de nos univers</p>
                    </div>
                    <div className="hidden gap-2 md:flex">
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Faire défiler vers la gauche"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Faire défiler vers la droite"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div ref={ref} className={cn("flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2", "md:gap-4")}>
                        {categories.map((c) => (
                            <CategoryPill key={c.title} {...c} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
