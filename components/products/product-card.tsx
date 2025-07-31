"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart/cart-context"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group bg-[#F4F4F4] rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
      <Link href={`/products/${product.id}`}>
        <div className="relative bg-[#F4F4F4] aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
          />

          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-red-500 text-white font-medium">{product.badge}</Badge>
          )}

          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs font-medium bg-gray-100 text-gray-700">
            {product.category}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors text-lg leading-tight line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-gray-900">{product.price.toLocaleString("fr-FR")} €</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString("fr-FR")} €
              </span>
            )}
            {discount > 0 && (
              <Badge variant="destructive" className="text-xs font-medium">
                -{discount}%
              </Badge>
            )}
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition-all duration-300"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}
