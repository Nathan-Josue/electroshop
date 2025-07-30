import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ElectroShop - Boutique Électronique Moderne",
  description:
    "Découvrez notre sélection de smartphones, ordinateurs, accessoires et gadgets électroniques. Livraison rapide et paiement sécurisé.",
  keywords: "électronique, smartphone, ordinateur, accessoires, gadgets, technologie",
  authors: [{ name: "ElectroShop" }],
  openGraph: {
    title: "ElectroShop - Boutique Électronique Moderne",
    description: "Découvrez notre sélection de produits électroniques",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
