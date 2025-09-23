"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

type ProductCardProps = {
    title: string
    subtitle: string
    price: string
    image: {
        src: string
        alt: string
    }
    cardClassName?: string
    imageClassName?: string
}

export default function ProductCategory({
                                        title = "Product name",
                                        subtitle = "Availability details",
                                        price = "$00.00",
                                        image = {
                                            src: "/placeholder.svg?height=720&width=960",
                                            alt: "Product image",
                                        },
                                        cardClassName,
                                        imageClassName,
                                    }: ProductCardProps) {
    return (
        <article
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-md",
                cardClassName,
            )}
        >
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl sm:h-[420px]">
                <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={960}
                    height={720}
                    className={cn("h-full w-full", imageClassName)}
                    priority={false}
                />

                <div className="pointer-events-none absolute inset-x-4 bottom-4">
                    <div className="pointer-events-auto rounded-lg border bg-white p-4 shadow-sm">
                        <h3 className="text-sm font-medium leading-none">{title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
                        <p className="mt-2 text-sm font-semibold">{price}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
