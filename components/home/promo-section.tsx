import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Gift } from "lucide-react"

export default function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Gift className="h-4 w-4 mr-2" />
              Offre limitée
            </Badge>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Jusqu'à -50% sur une sélection
            <br />
            de produits premium
          </h2>

          <p className="text-xl mb-8 text-blue-100">
            Profitez de nos promotions exceptionnelles sur les dernières innovations technologiques. Stocks limités, ne
            manquez pas cette opportunité !
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <Timer className="h-5 w-5" />
            <span className="text-lg font-semibold">Offre valable jusqu'au 31 décembre 2024</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/promotions">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                Voir les promotions
              </Button>
            </Link>
            <Link href="/newsletter">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 bg-transparent"
              >
                S'abonner aux alertes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
