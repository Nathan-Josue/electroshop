"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart/cart-context"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()
  const [promoCode, setPromoCode] = useState("")

  const shipping = total > 50 ? 0 : 9.99
  const finalTotal = total + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <ShoppingBag className="h-12 w-12 md:h-16 md:w-16 text-gray-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-4">Votre panier est vide</h1>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Découvrez notre sélection de produits premium et ajoutez-les à votre panier
            </p>
            <Link href="/products">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 md:px-8 w-full md:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Découvrir nos produits
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6 md:py-8">
        {/* En-tête - Mobile optimized */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">Mon panier</h1>
          <p className="text-gray-600 text-sm md:text-base">
            {items.length} article{items.length > 1 ? "s" : ""} dans votre panier
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Articles du panier - Mobile First */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 md:p-6 ${index !== items.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  {/* Mobile Layout */}
                  <div className="flex space-x-4">
                    {/* Image produit */}
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl object-cover bg-gray-50"
                      />
                    </div>

                    {/* Informations produit */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-black text-sm md:text-base leading-tight pr-2">
                          {item.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full flex-shrink-0 h-8 w-8 md:h-10 md:w-10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-gray-500 text-xs md:text-sm mb-3">En stock • Livraison gratuite</p>

                      {/* Prix et contrôles - Mobile Stack */}
                      <div className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0">
                        {/* Prix */}
                        <div className="order-2 md:order-1">
                          <p className="text-lg md:text-xl font-semibold text-black">
                            {(item.price * item.quantity).toLocaleString("fr-FR")} €
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs md:text-sm text-gray-500">
                              {item.price.toLocaleString("fr-FR")} € × {item.quantity}
                            </p>
                          )}
                        </div>

                        {/* Contrôles quantité - Mobile Friendly */}
                        <div className="order-1 md:order-2 flex items-center">
                          <div className="flex items-center bg-gray-100 rounded-full p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:bg-white"
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            >
                              <Minus className="h-3 w-3 md:h-4 md:w-4" />
                            </Button>
                            <div className="w-12 md:w-16 text-center">
                              <span className="font-medium text-sm md:text-base">{item.quantity}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:bg-white"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3 md:h-4 md:w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton continuer les achats - Mobile */}
            <div className="mt-6 md:mt-8">
              <Link href="/products">
                <Button variant="outline" className="bg-white border-gray-200 rounded-full w-full md:w-auto" size="lg">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continuer mes achats
                </Button>
              </Link>
            </div>
          </div>

          {/* Résumé de commande - Mobile Optimized */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm p-4 md:p-6 lg:sticky lg:top-4">
              <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Résumé de commande</h2>

              {/* Détails prix */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{total.toLocaleString("fr-FR")} €</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratuite</span>
                    ) : (
                      `${shipping.toLocaleString("fr-FR")} €`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs md:text-sm text-gray-500 bg-blue-50 p-3 rounded-xl">
                    💡 Livraison gratuite dès 50€ d'achat
                  </p>
                )}
                <div className="border-t border-gray-200 pt-3 md:pt-4">
                  <div className="flex justify-between font-semibold text-lg md:text-xl">
                    <span>Total</span>
                    <span>{finalTotal.toLocaleString("fr-FR")} €</span>
                  </div>
                </div>
              </div>

              {/* Code promo - Mobile Friendly */}
              <div className="mb-6 md:mb-8">
                <label className="block text-sm font-medium mb-3">Code promo</label>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                  <Input
                    placeholder="Entrez votre code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 h-12 rounded-xl"
                  />
                  <Button variant="outline" className="h-12 rounded-xl bg-transparent w-full md:w-auto">
                    Appliquer
                  </Button>
                </div>
              </div>

              {/* Bouton principal */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full h-12 md:h-14 text-base md:text-lg font-medium mb-4 md:mb-6">
                <CreditCard className="h-5 w-5 mr-2" />
                Procéder au paiement
              </Button>

              {/* Avantages - Mobile Stack */}
              <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Livraison express</div>
                    <div className="text-xs md:text-sm text-gray-500">Gratuite dès 50€</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Paiement sécurisé</div>
                    <div className="text-xs md:text-sm text-gray-500">SSL & 3D Secure</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowLeft className="h-4 w-4 text-purple-600 rotate-180" />
                  </div>
                  <div>
                    <div className="font-medium text-sm md:text-base">Retour 30 jours</div>
                    <div className="text-xs md:text-sm text-gray-500">Satisfait ou remboursé</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions produits - Mobile Hidden, Desktop Visible */}
        <div className="hidden md:block mt-16">
          <h2 className="text-2xl font-semibold text-black mb-8 text-center">Vous pourriez aussi aimer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-xl mb-4">
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=Produit+${i}`}
                    alt={`Produit ${i}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2">Produit suggéré {i}</h3>
                <p className="text-lg font-semibold">299 €</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
