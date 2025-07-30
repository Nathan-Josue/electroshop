export interface Product {
  id: string
  name: string
  tagline: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  rating: number
  reviews: number
  badge?: string
  colors: string[]
  storage?: string[]
  sizes?: string[]
  description: string
  features: string[]
  specifications: Record<string, string>
  inStock: boolean
  color?: string
}

export const productsDatabase: Record<string, Product> = {
  "iphone-16-pro": {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    tagline: "Titanium. So strong. So light. So Pro.",
    price: 1229,
    originalPrice: 1299,
    images: [
      "/img/hero_startframe__apple_16_pro.jpg?height=600&width=600&text=iPhone+16+Pro+Front",
      "/img/apple_intelligence.jpg?height=600&width=600&text=iPhone+16+Pro+Back",
      "/img/apple_16_pro.jpg?height=600&width=600&text=iPhone+16+Pro+Side",
      "/img/apple_16_pro_taouch.jpg.jpg?height=600&width=600&text=iPhone+16+Pro+Colors",

    ],
    category: "Smartphones",
    rating: 4.8,
    reviews: 324,
    badge: "Nouveau",
    colors: ["Titane naturel", "Titane bleu", "Titane blanc", "Titane noir"],
    storage: ["128 Go", "256 Go", "512 Go", "1 To"],
    description:
      "L'iPhone 16 Pro redéfinit ce qu'un smartphone peut être. Avec son châssis en titane de qualité aérospatiale, la puce A17 Pro révolutionnaire et le système de caméra Pro le plus avancé jamais conçu.",
    features: [
      "Châssis en titane de qualité aérospatiale",
      "Puce A17 Pro avec GPU 6 cœurs",
      "Système de caméra Pro 48 Mpx",
      "Écran Super Retina XDR 6,1 pouces",
      "Bouton Action personnalisable",
      "USB-C avec USB 3 pour des transferts ultra-rapides",
    ],
    specifications: {
      Écran: "Super Retina XDR OLED 6,1 pouces",
      Processeur: "Puce A17 Pro",
      Stockage: "128 Go à 1 To",
      Caméra: "48 Mpx Principal, 12 Mpx Ultra grand-angle, 12 Mpx Téléobjectif",
      Batterie: "Jusqu'à 23h de lecture vidéo",
      Connectivité: "5G, Wi-Fi 6E, Bluetooth 5.3",
      Résistance: "IP68",
    },
    inStock: true,
    color: "bg-black",
  },
  "macbook-pro-m3": {
    id: "macbook-pro-m3",
    name: 'MacBook Pro 14"',
    tagline: "Mind-blowing. Head-turning.",
    price: 2199,
    originalPrice: 2399,
    images: [
      "/img/promo_macbook_air.jpg?height=600&width=600&text=MacBook+Pro+M3+Open",
      "img/macbook_pro_16.jpg?height=600&width=600&text=MacBook+Pro+M3+Closed",
      "/placeholder.svg?height=600&width=600&text=MacBook+Pro+M3+Side",
      "/placeholder.svg?height=600&width=600&text=MacBook+Pro+M3+Ports",
    ],
    category: "Ordinateurs",
    rating: 4.9,
    reviews: 189,
    badge: "Promo",
    colors: ["Gris sidéral", "Argent"],
    storage: ["512 Go", "1 To", "2 To", "4 To"],
    description:
      "Le MacBook Pro 14 pouces avec puce M3 Pro offre des performances révolutionnaires pour les professionnels les plus exigeants.",
    features: [
      "Puce M3 Pro avec CPU 11 cœurs et GPU 14 cœurs",
      "Écran Liquid Retina XDR 14,2 pouces",
      "Jusqu'à 18 heures d'autonomie",
      "Système audio à 6 haut-parleurs",
      "Caméra FaceTime HD 1080p",
      "Ports Thunderbolt 4, HDMI, lecteur de cartes SD",
    ],
    specifications: {
      Écran: "Liquid Retina XDR 14,2 pouces",
      Processeur: "Puce M3 Pro",
      Mémoire: "18 Go de mémoire unifiée",
      Stockage: "512 Go à 4 To SSD",
      Autonomie: "Jusqu'à 18 heures",
      Connectivité: "Wi-Fi 6E, Bluetooth 5.3",
      Ports: "3x Thunderbolt 4, HDMI, lecteur SD",
    },
    inStock: true,
  },
  "samsung-galaxy-s24": {
    id: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24 Ultra",
    tagline: "Galaxy AI is here. Epic just got easier.",
    price: 1299,
    originalPrice: 1399,
    images: [
      "/placeholder.svg?height=600&width=600&text=Galaxy+S24+Ultra+Front",
      "/placeholder.svg?height=600&width=600&text=Galaxy+S24+Ultra+Back",
      "/placeholder.svg?height=600&width=600&text=Galaxy+S24+Ultra+S-Pen",
      "/placeholder.svg?height=600&width=600&text=Galaxy+S24+Ultra+Colors",
    ],
    category: "Smartphones",
    rating: 4.7,
    reviews: 256,
    badge: "Populaire",
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    storage: ["256 Go", "512 Go", "1 To"],
    description:
      "Le Galaxy S24 Ultra redéfinit l'innovation mobile avec Galaxy AI, un châssis en titane premium et le S Pen le plus avancé.",
    features: [
      "Galaxy AI intégré pour une productivité révolutionnaire",
      "Châssis en titane premium",
      "Écran Dynamic AMOLED 2X 6,8 pouces",
      "Système de caméra 200 Mpx avec zoom 100x",
      "S Pen intégré avec nouvelles fonctionnalités AI",
      "Batterie 5000 mAh avec charge rapide 45W",
    ],
    specifications: {
      Écran: "Dynamic AMOLED 2X 6,8 pouces",
      Processeur: "Snapdragon 8 Gen 3",
      Stockage: "256 Go à 1 To",
      Caméra: "200 Mpx Principal, 50 Mpx Téléobjectif, 10 Mpx Téléobjectif, 12 Mpx Ultra grand-angle",
      Batterie: "5000 mAh avec charge rapide 45W",
      Connectivité: "5G, Wi-Fi 7, Bluetooth 5.3",
      Résistance: "IP68",
    },
    inStock: true,
  },
  "macbook-air-m2": {
    id: "macbook-air-m2",
    name: 'MacBook Air 13"',
    tagline: "Supercharged by M2. Redesigned around the chip.",
    price: 1299,
    originalPrice: 1499,
    images: [
      "/placeholder.svg?height=600&width=600&text=MacBook+Air+M2+Open",
      "/placeholder.svg?height=600&width=600&text=MacBook+Air+M2+Closed",
      "/placeholder.svg?height=600&width=600&text=MacBook+Air+M2+Side",
      "/placeholder.svg?height=600&width=600&text=MacBook+Air+M2+Colors",
    ],
    category: "Ordinateurs",
    rating: 4.8,
    reviews: 234,
    colors: ["Gris sidéral", "Argent", "Lumière stellaire", "Minuit"],
    storage: ["256 Go", "512 Go", "1 To", "2 To"],
    description:
      "Le MacBook Air M2 combine design iconique et performances révolutionnaires dans un châssis ultra-fin et léger.",
    features: [
      "Puce M2 avec CPU 8 cœurs et GPU jusqu'à 10 cœurs",
      "Design repensé avec écran Liquid Retina 13,6 pouces",
      "Jusqu'à 18 heures d'autonomie",
      "Caméra FaceTime HD 1080p",
      "Système audio à 4 haut-parleurs avec son spatial",
      "Charge MagSafe 3, 2 ports Thunderbolt",
    ],
    specifications: {
      Écran: "Liquid Retina 13,6 pouces",
      Processeur: "Puce M2",
      Mémoire: "8 Go à 24 Go de mémoire unifiée",
      Stockage: "256 Go à 2 To SSD",
      Autonomie: "Jusqu'à 18 heures",
      Connectivité: "Wi-Fi 6, Bluetooth 5.0",
      Ports: "2x Thunderbolt, MagSafe 3, prise casque",
    },
    inStock: true,
  },
  "ipad-air-m2": {
    id: "ipad-air-m2",
    name: "iPad Air",
    tagline: "Light. Bright. Full of might.",
    price: 699,
    originalPrice: 799,
    images: [
      "/img/slide_3B_medium.jpg?height=600&width=600&text=iPad+Air+M2+Front",
      "/img/all_ipad_aire.jpg?height=600&width=600&text=iPad+Air+M2+Back",
      "/img/ipad.png?height=600&width=600&text=iPad+Air+M2+Pencil",
      "/img/pencil__medium.jpg?height=600&width=600&text=iPad+Air+M2+Colors",
    ],
    category: "Tablettes",
    rating: 4.6,
    reviews: 142,
    badge: "-12%",
    colors: ["Gris sidéral", "Lumière stellaire", "Rose", "Violet", "Bleu"],
    storage: ["128 Go", "256 Go", "512 Go", "1 To"],
    description:
      "L'iPad Air avec puce M2 offre des performances incroyables dans un design fin et léger, parfait pour la créativité et la productivité.",
    features: [
      "Puce M2 avec CPU 8 cœurs et GPU 10 cœurs",
      "Écran Liquid Retina 10,9 pouces",
      "Compatible Apple Pencil (2e génération)",
      "Compatible Magic Keyboard",
      "Caméra arrière 12 Mpx avec grand-angle",
      "USB-C avec support Thunderbolt / USB 4",
    ],
    specifications: {
      Écran: "Liquid Retina IPS 10,9 pouces",
      Processeur: "Puce M2",
      Stockage: "128 Go à 1 To",
      Caméra: "12 Mpx arrière, 12 Mpx avant ultra grand-angle",
      Autonomie: "Jusqu'à 10 heures",
      Connectivité: "Wi-Fi 6E, Bluetooth 5.3, 5G (modèles cellulaires)",
      Ports: "USB-C avec Thunderbolt / USB 4",
    },
    inStock: true,
  },
  "apple-watch-series-9": {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    tagline: "Smarter. Brighter. Mightier.",
    price: 449,
    originalPrice: 499,
    images: [
      "/placeholder.svg?height=600&width=600&text=Apple+Watch+S9+Face",
      "/placeholder.svg?height=600&width=600&text=Apple+Watch+S9+Side",
      "/placeholder.svg?height=600&width=600&text=Apple+Watch+S9+Bands",
      "/placeholder.svg?height=600&width=600&text=Apple+Watch+S9+Colors",
    ],
    category: "Montres",
    rating: 4.7,
    reviews: 234,
    colors: ["Aluminium Rose", "Aluminium Lumière stellaire", "Aluminium Minuit", "Aluminium (PRODUCT)RED"],
    sizes: ["41 mm", "45 mm"],
    description:
      "L'Apple Watch Series 9 avec puce S9 offre des fonctionnalités de santé avancées et une expérience utilisateur révolutionnaire.",
    features: [
      "Puce S9 avec Neural Engine 4 cœurs",
      "Écran Always-On Retina le plus lumineux",
      "Double tap pour contrôler sans toucher",
      "Suivi avancé de la santé et du fitness",
      "Résistance à l'eau jusqu'à 50 mètres",
      "Autonomie jusqu'à 18 heures",
    ],
    specifications: {
      Écran: "Always-On Retina LTPO OLED",
      Processeur: "Puce S9 avec Neural Engine 4 cœurs",
      Stockage: "64 Go",
      Capteurs: "ECG, Oxygène sanguin, Température",
      Autonomie: "Jusqu'à 18 heures",
      Connectivité: "Wi-Fi, Bluetooth 5.3, GPS",
      Résistance: "Étanche jusqu'à 50 mètres",
    },
    inStock: true,
  },
  "airpods-pro-2": {
    id: "airpods-pro-2",
    name: "AirPods Pro (2e génération)",
    tagline: "Adaptive Audio. Now playing.",
    price: 279,
    originalPrice: 329,
    images: [
      "/placeholder.svg?height=600&width=600&text=AirPods+Pro+2+Case",
      "/placeholder.svg?height=600&width=600&text=AirPods+Pro+2+Earbuds",
      "/placeholder.svg?height=600&width=600&text=AirPods+Pro+2+Features",
      "/placeholder.svg?height=600&width=600&text=AirPods+Pro+2+Usage",
    ],
    category: "Audio",
    rating: 4.8,
    reviews: 567,
    badge: "-15%",
    colors: ["Blanc"],
    description:
      "Les AirPods Pro (2e génération) offrent une expérience audio révolutionnaire avec l'Audio adaptatif et une réduction de bruit de niveau professionnel.",
    features: [
      "Puce H2 pour un son haute fidélité",
      "Réduction active du bruit jusqu'à 2x plus efficace",
      "Audio adaptatif qui s'ajuste automatiquement",
      "Audio spatial personnalisé",
      "Jusqu'à 6 heures d'écoute avec réduction de bruit",
      "Boîtier de charge MagSafe avec haut-parleur intégré",
    ],
    specifications: {
      Processeur: "Puce H2",
      Autonomie: "Jusqu'à 6h (écouteurs) + 30h (boîtier)",
      Connectivité: "Bluetooth 5.3",
      Résistance: "IPX4 (écouteurs et boîtier)",
      Charge: "Lightning, MagSafe, Qi",
      Capteurs: "Capteur de force, capteur de mouvement",
      Audio: "Audio spatial, Dolby Atmos",
    },
    inStock: true,
  },
  "google-pixel-8": {
    id: "google-pixel-8",
    name: "Google Pixel 8 Pro",
    tagline: "The most helpful Pixel yet.",
    price: 899,
    originalPrice: 999,
    images: [
      "/placeholder.svg?height=600&width=600&text=Pixel+8+Pro+Front",
      "/placeholder.svg?height=600&width=600&text=Pixel+8+Pro+Back",
      "/placeholder.svg?height=600&width=600&text=Pixel+8+Pro+Camera",
      "/placeholder.svg?height=600&width=600&text=Pixel+8+Pro+Colors",
    ],
    category: "Smartphones",
    rating: 4.6,
    reviews: 189,
    colors: ["Obsidian", "Porcelain", "Bay"],
    storage: ["128 Go", "256 Go", "512 Go", "1 To"],
    description:
      "Le Pixel 8 Pro avec Google Tensor G3 et IA avancée offre la meilleure expérience photographique et Android pure.",
    features: [
      "Google Tensor G3 avec IA avancée",
      "Écran Super Actua 6,7 pouces 120 Hz",
      "Système de caméra Pro avec IA photographique",
      "Magic Eraser et Face Unblur",
      "7 ans de mises à jour Android",
      "Batterie adaptative avec charge rapide",
    ],
    specifications: {
      Écran: "Super Actua LTPO OLED 6,7 pouces",
      Processeur: "Google Tensor G3",
      Stockage: "128 Go à 1 To",
      Caméra: "50 Mpx Principal, 48 Mpx Téléobjectif, 48 Mpx Ultra grand-angle",
      Batterie: "5050 mAh avec charge rapide 30W",
      Connectivité: "5G, Wi-Fi 7, Bluetooth 5.3",
      Résistance: "IP68",
    },
    inStock: true,
  },
  "nintendo-switch-oled": {
    id: "nintendo-switch-oled",
    name: "Nintendo Switch OLED",
    tagline: "Play has no limits.",
    price: 349,
    originalPrice: 399,
    images: [
      "/placeholder.svg?height=600&width=600&text=Switch+OLED+Console",
      "/placeholder.svg?height=600&width=600&text=Switch+OLED+Dock",
      "/placeholder.svg?height=600&width=600&text=Switch+OLED+Handheld",
      "/placeholder.svg?height=600&width=600&text=Switch+OLED+Games",
    ],
    category: "Gaming",
    rating: 4.5,
    reviews: 423,
    badge: "Gaming",
    colors: ["Blanc", "Néon"],
    description:
      "La Nintendo Switch OLED offre une expérience de jeu hybride unique avec un écran OLED vibrant de 7 pouces.",
    features: [
      "Écran OLED vibrant de 7 pouces",
      "Support ajustable large et robuste",
      "Dock avec port LAN filaire",
      "64 Go de stockage interne",
      "Audio amélioré en mode portable",
      "Compatible avec tous les jeux Nintendo Switch",
    ],
    specifications: {
      Écran: "OLED capacitif multi-touch 7 pouces",
      Processeur: "NVIDIA Tegra X1 personnalisé",
      Stockage: "64 Go interne + microSD",
      Autonomie: "4,5 à 9 heures selon le jeu",
      Connectivité: "Wi-Fi, Bluetooth 4.1",
      Ports: "USB-C, lecteur microSD, prise casque",
      Résolution: "1280x720 (portable), 1920x1080 (TV)",
    },
    inStock: true,
  },
  "sony-wh-1000xm5": {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    tagline: "The best noise canceling, now with better call quality.",
    price: 399,
    originalPrice: 449,
    images: [
      "/placeholder.svg?height=600&width=600&text=Sony+WH1000XM5+Front",
      "/placeholder.svg?height=600&width=600&text=Sony+WH1000XM5+Side",
      "/placeholder.svg?height=600&width=600&text=Sony+WH1000XM5+Folded",
      "/placeholder.svg?height=600&width=600&text=Sony+WH1000XM5+Colors",
    ],
    category: "Audio",
    rating: 4.7,
    reviews: 312,
    colors: ["Noir", "Argent"],
    description:
      "Le casque Sony WH-1000XM5 offre la meilleure réduction de bruit au monde avec une qualité audio exceptionnelle.",
    features: [
      "Réduction de bruit leader de l'industrie",
      "Processeur V1 et puce QN1",
      "30 heures d'autonomie avec réduction de bruit",
      "Charge rapide : 3 min = 3h d'écoute",
      "Audio haute résolution et LDAC",
      "Appels cristallins avec 8 microphones",
    ],
    specifications: {
      Autonomie: "30 heures avec réduction de bruit",
      Connectivité: "Bluetooth 5.2, NFC, jack 3,5mm",
      Charge: "USB-C avec charge rapide",
      Poids: "250 grammes",
      Codecs: "SBC, AAC, LDAC",
      Microphones: "8 microphones pour appels",
      Contrôles: "Tactiles sur écouteur droit",
    },
    inStock: true,
  },
}

// Fonction helper pour obtenir un produit par ID
export function getProductById(id: string): Product | null {
  return productsDatabase[id] || null
}

// Fonction helper pour obtenir tous les produits
export function getAllProducts(): Product[] {
  return Object.values(productsDatabase)
}

// Fonction helper pour obtenir les produits par catégorie
export function getProductsByCategory(category: string): Product[] {
  return Object.values(productsDatabase).filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

// Fonction helper pour rechercher des produits
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return Object.values(productsDatabase).filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery),
  )
}
