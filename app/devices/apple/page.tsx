import { Suspense } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AppleHeroSection from "@/components/store/apple-hero-section"
import AppleFeaturedProducts from "@/components/store/apple-featured-products"
import AppleCategoryShowcase from "@/components/store/apple-category-showcase"
import AppleInnovationSection from "@/components/store/apple-innovation-section"
import { Skeleton } from "@/components/ui/skeleton"
import Banner from "@/components/store/banner";

export default function ApplePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
        <Banner/>
      <main>
        <AppleHeroSection />
        <Suspense fallback={<ProductsSkeleton />}>
          <AppleFeaturedProducts />
        </Suspense>
        <AppleCategoryShowcase />
        <AppleInnovationSection />
      </main>
      <Footer />
    </div>
  )
}

function ProductsSkeleton() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-6 w-3/4 mx-auto" />
              <Skeleton className="h-4 w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
