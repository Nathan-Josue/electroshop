import ProductCard from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Données simulées - en production, cela viendrait d'une API
const featuredProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    price: 1229,
    originalPrice: 1299,
    image: "/placeholder.svg?height=300&width=300",
    category: "Smartphones",
    rating: 4.8,
    reviews: 124,
    badge: "Nouveau",
  },
  {
    id: "2",
    name: "MacBook Air M3",
    price: 1299,
    originalPrice: 1499,
    image: "/placeholder.svg?height=300&width=300",
    category: "Ordinateurs",
    rating: 4.9,
    reviews: 89,
    badge: "Promo",
  },
  {
    id: "3",
    name: "AirPods Pro 2",
    price: 279,
    originalPrice: 329,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessoires",
    rating: 4.7,
    reviews: 256,
    badge: "-15%",
  },
  {
    id: "4",
    name: "Samsung Galaxy S24",
    price: 899,
    originalPrice: 999,
    image: "/placeholder.svg?height=300&width=300",
    category: "Smartphones",
    rating: 4.6,
    reviews: 178,
    badge: "Populaire",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produits phares</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection des meilleurs produits électroniques, choisis pour leur qualité et leur
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Voir tous les produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
