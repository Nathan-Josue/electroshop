"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Share, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useToast } from "@/hooks/use-toast"
import { getProductById } from "@/lib/products-data"
import ProductBreadcrumb from "@/components/dynamic-breadcrumb";
interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedStorage, setSelectedStorage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(0)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    let productName = product.name

    // Ajouter les options sélectionnées au nom
    if (product.storage && product.storage.length > 0) {
      productName += ` ${product.storage[selectedStorage]}`
    }
    if (product.sizes && product.sizes.length > 0) {
      productName += ` ${product.sizes[selectedSize]}`
    }
    if (product.colors && product.colors.length > 0) {
      productName += ` ${product.colors[selectedColor]}`
    }

    addItem({
      id: `${product.id}-${selectedColor}-${selectedStorage}-${selectedSize}`,
      name: productName,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })
    toast({
      title: "Produit ajouté au panier",
      description: `${productName} a été ajouté à votre panier.`,
    })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
          <ProductBreadcrumb  categoryName={product.category} productName={product.name} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Galerie d'images - Style Apple */}
          <div className="space-y-4">
              <div
                  className={`aspect-square ${product.color} rounded-3xl overflow-hidden flex items-center justify-center`}
              >
                  <Image
                      src={product.images[selectedImage] || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain p-8"
                  />
              </div>


              <div className="grid grid-cols-4 gap-4">
              {product.images && product.images.length > 0 ? (
                product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    title={`Voir l'image ${index + 1} de ${product.name}`}
                    className={`aspect-square ${product.color} rounded-2xl overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-blue-500" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-contain p-2"
                    />
                  </button>
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-500 py-8">
                  Aucune image disponible
                </div>
              )}
            </div>
          </div>

          {/* Informations produit - Style Apple */}
          <div className="space-y-8">
            <div>
              {product.badge && <Badge className="mb-4 bg-red-500 text-white">{product.badge}</Badge>}

              <h1 className="text-4xl md:text-5xl font-semibold text-black mb-4">{product.name}</h1>

              <p className="text-xl text-gray-600 mb-6">{product.tagline}</p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-semibold text-black">{product.price.toLocaleString("fr-FR")} €</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice.toLocaleString("fr-FR")} €
                    </span>
                    <Badge variant="destructive">-{discount}%</Badge>
                  </>
                )}
              </div>

              {!product.inStock && (
                <Badge variant="destructive" className="mb-4">
                  Rupture de stock
                </Badge>
              )}
            </div>

            {/* Options de couleur */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Couleur</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors && product.colors.length > 0 ? (
                    product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`px-4 py-2 rounded-full border-2 transition-all ${
                          selectedColor === index
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {color}
                      </button>
                    ))
                  ) : (
                    <span className="text-gray-500">Aucune couleur disponible</span>
                  )}
                </div>
              </div>
            )}

            {/* Options de stockage */}
            {product.storage && product.storage.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Capacité</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.storage && product.storage.length > 0 ? (
                    product.storage.map((storage, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedStorage(index)}
                        className={`p-4 rounded-2xl border-2 transition-all text-center ${
                          selectedStorage === index
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="font-semibold">{storage}</div>
                      </button>
                    ))
                  ) : (
                    <span className="text-gray-500">Aucune option de stockage disponible</span>
                  )}
                </div>
              </div>
            )}

            {/* Options de taille */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Taille</h3>
                <div className="flex gap-3">
                  {product.sizes && product.sizes.length > 0 ? (
                    product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(index)}
                        className={`px-6 py-3 rounded-full border-2 transition-all ${
                          selectedSize === index
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))
                  ) : (
                    <span className="text-gray-500">Aucune taille disponible</span>
                  )}
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-full text-lg disabled:bg-gray-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? "Ajouter au panier" : "Rupture de stock"}
              </Button>

              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="flex-1 rounded-full bg-transparent">
                  <Heart className="h-5 w-5 mr-2" />
                  Favoris
                </Button>
                <Button variant="outline" size="lg" className="flex-1 rounded-full bg-transparent">
                  <Share className="h-5 w-5 mr-2" />
                  Partager
                </Button>
              </div>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">Livraison gratuite</div>
                  <div className="text-sm text-gray-600">Dès 25 000 FCFA d'achat</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">Garantie 2 ans</div>
                  <div className="text-sm text-gray-600">Constructeur</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="font-medium">Retour 30 jours</div>
                  <div className="text-sm text-gray-600">Satisfait ou remboursé</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Onglets d'informations détaillées */}
        <div className="mt-20">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description" className="text-lg">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="text-lg">
                Caractéristiques
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-lg">
                Avis ({product.reviews})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{product.description}</p>

                <h3 className="text-2xl font-semibold mb-4">Caractéristiques principales</h3>
                <ul className="space-y-3">
                  {product.features && product.features.length > 0 ? (
                    product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500">Aucune caractéristique disponible</li>
                  )}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.specifications && Object.keys(product.specifications).length > 0 ? (
                  Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-4 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-700 text-right">{value}</span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center text-gray-500 py-8">
                    Aucune spécification disponible
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="text-center py-12">
                <p className="text-gray-600">Les avis clients seront bientôt disponibles.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
