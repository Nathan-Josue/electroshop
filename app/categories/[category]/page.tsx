import { notFound } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductCard from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, Grid, List } from "lucide-react"
import { getProductsByCategory } from "@/lib/products-data"

// Mapping des catégories
const categoryMapping = {
  smartphones: "Smartphones",
  computers: "Ordinateurs",
  tablets: "Tablettes",
  watches: "Montres",
  audio: "Audio",
  accessories: "Accessoires",
  gaming: "Gaming",
}

const categoryDescriptions = {
  smartphones: "Découvrez notre sélection de smartphones dernière génération",
  computers: "MacBook, PC portables et ordinateurs de bureau haute performance",
  tablets: "iPad et tablettes Android pour tous vos besoins",
  watches: "Apple Watch et montres intelligentes",
  audio: "Écouteurs, casques et enceintes premium",
  accessories: "Coques, chargeurs et accessoires Apple",
  gaming: "Consoles et accessoires gaming",
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = categoryMapping[params.category as keyof typeof categoryMapping]
  const categoryDescription = categoryDescriptions[params.category as keyof typeof categoryDescriptions]

  if (!categoryName) {
    notFound()
  }

  const products = getProductsByCategory(categoryName)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête de catégorie - Style Apple */}
        <div className="text-center py-16 mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-4">{categoryName}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{categoryDescription}</p>
        </div>

        {/* Filtres et tri - Style Apple */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pb-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-black">
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
            </Button>

            <Select defaultValue="all">
              <SelectTrigger className="w-48 border-gray-300">
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les prix</SelectItem>
                <SelectItem value="0-500">0€ - 500€</SelectItem>
                <SelectItem value="500-1000">500€ - 1000€</SelectItem>
                <SelectItem value="1000+">1000€+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-4">
            <Select defaultValue="featured">
              <SelectTrigger className="w-48 border-gray-300">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Recommandés</SelectItem>
                <SelectItem value="price-low">Prix croissant</SelectItem>
                <SelectItem value="price-high">Prix décroissant</SelectItem>
                <SelectItem value="rating">Mieux notés</SelectItem>
                <SelectItem value="newest">Nouveautés</SelectItem>
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
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bientôt disponible</h3>
            <p className="text-gray-600">Nous travaillons à enrichir cette catégorie avec les meilleurs produits.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryMapping).map((category) => ({
    category,
  }))
}
