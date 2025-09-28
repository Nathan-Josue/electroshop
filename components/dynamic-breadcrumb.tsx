"use client"

import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Mapping slug → nom lisible
const categoryMapping: Record<string, string> = {
    smartphones: "Smartphones",
    computers: "Ordinateurs",
    tablets: "Tablettes",
    watches: "Montres",
    audio: "Audio",
    accessories: "Accessoires",
    gaming: "Gaming",
}

interface BreadcrumbProps {
    productName?: string
    categoryName?: string // nom lisible ou reçu dynamiquement
}

export default function ProductBreadcrumb({ productName, categoryName }: BreadcrumbProps) {
    // Chercher le slug correspondant si possible
    const categorySlug =
        categoryName &&
        Object.entries(categoryMapping).find(
            ([, name]) => name.toLowerCase() === categoryName.toLowerCase()
        )?.[0]

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Accueil */}
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-xl">Accueil</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                {/* Produits */}
                <BreadcrumbItem>
                    <BreadcrumbLink href="/products" className="text-xl">Produits</BreadcrumbLink>
                </BreadcrumbItem>

                {/* Catégorie si existante */}
                {categoryName && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href={categorySlug ? `/categories/${categorySlug}` : "#"}
                                className="text-xl"
                            >
                                {categoryName}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </>
                )}

                {/* Produit */}
                {productName && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-xl">{productName}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
