"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { getAllProducts } from "@/lib/products-data"
import Publicit from "@/components/products/publicite";
import Frequent from "@/components/home/best-buy";
import CategoriesSectionBentoLayout from "@/components/home/categories-section-bento-layout";
import DigitalSection from "@/components/home/digital-section";

export default function ProductsPage() {
  const products = getAllProducts()

  // @ts-ignore
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-5 h-[60vh] rounded-3xl overflow-hidden">
          <Publicit />
        </div>
          <CategoriesSectionBentoLayout/>
          <DigitalSection />
          <Frequent />
      </main>

      <Footer />
    </div>
  )
}
