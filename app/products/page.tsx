"use client"

import {useEffect, useState} from "react";
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductCard from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Grid, List } from "lucide-react"
import {getAllProducts, getProductsByBrand} from "@/lib/products-data"
import Publicit from "@/components/products/publicite";
import {Product} from "@/app/type/all-product";
import {ProductFilterSidebar} from "@/components/product-filter-sidebar";
import { motion } from "motion/react";

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const brand = params.get("brand") // Récupère "Samsung", "Apple", etc.

        const filteredProducts = brand
            ? getProductsByBrand(brand)
            : getAllProducts()

        setProducts(filteredProducts)
    }, [])
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-5 h-[60vh] rounded-3xl overflow-hidden">
          <Publicit />
        </div>

        <div className="text-center py-16 mb-5">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-4">Tous nos produits</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits électroniques premium
          </p>
        </div>

        {/* Filtres et tri */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
            </Button>

            <Select defaultValue="all">
              <SelectTrigger className="w-48 border-gray-300">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                <SelectItem value="smartphones">Smartphones</SelectItem>
                <SelectItem value="computers">Ordinateurs</SelectItem>
                <SelectItem value="audio">Audio</SelectItem>
                <SelectItem value="watches">Montres</SelectItem>
                <SelectItem value="gaming">Gaming</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-4">
            <Select defaultValue="featured">
              <SelectTrigger className="w-48 border-gray-300">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Mis en avant</SelectItem>
                <SelectItem value="price-low">Prix croissant</SelectItem>
                <SelectItem value="price-high">Prix décroissant</SelectItem>
                <SelectItem value="rating">Mieux notés</SelectItem>
                <SelectItem value="newest">Plus récents</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border border-gray-300 rounded-lg">
              <Button variant="ghost" size="icon" className="rounded-r-none border-r">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-l-none">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="col-span-1">
                <ProductFilterSidebar/>
            </div>

            <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>

        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <Button variant="outline" className="border-gray-300 bg-transparent">
              Précédent
            </Button>
            <Button variant="outline" className="bg-blue-600 text-white border-blue-600">
              1
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              2
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              3
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              Suivant
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
