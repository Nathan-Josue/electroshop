import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: 'ElectroShop',
    description: "Découvrez notre sélection de smartphones, ordinateurs, accessoires et gadgets électroniques. Livraison rapide et paiement sécurisé.",
    keywords: ['ElectroShop', 'électronique', 'smartphone', 'ordinateur', 'accessoires', 'gadgets', 'technologie'],
    openGraph: {
        title: 'ElectroShop - Boutique Électronique Moderne',
        description: "Découvrez notre sélection de produits électroniques",
        url: 'https://electroshopci.vercel.app',
        siteName: 'ElectroShop',
        images: [
            {
                url: 'https://electroshopci.vercel.app/preview.png', // ajoute une image de prévisualisation adaptée
                width: 1200,
                height: 630,
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    // verification: {
    //     google: 'TON_CODE_GOOGLE_VERIFICATION_ICI', // ajoute ton code Search Console
    // },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: 'ElectroShop' }],
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
