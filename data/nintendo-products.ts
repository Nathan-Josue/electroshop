import {Product} from "@/app/type/all-product";

export const nintendoProducts  : Product[] = [
    {
    id: "nintendo-switch-oled",
        brand: "Nintendo",

        name: "Nintendo Switch OLED",
        tagline: "Play has no limits.",
        price: 650*349.99,
        originalPrice: 650*399.99,
        images: [
        "/img/produit/115461-switch-oled-white-boxart-1200x675.avif?height=600&width=600&text=Switch+OLED+Console",
        "/img/produit/hand-dock-photo.avif?height=600&width=600&text=Switch+OLED+Dock",
        "/img/produit/photo01.avif?height=600&width=600&text=Switch+OLED+Handheld",
        "/img/produit/photo02.avif?height=600&width=600&text=Switch+OLED+Games",
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
]