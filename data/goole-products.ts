import {Product} from "@/app/type/all-product";

export const googleProducts: Product[] = [
    {
        id: "google-pixel-9-pro",
        brand: "Google",
        name: "Google Pixel 9 Pro",
        tagline: "Made to help you do more",
        price: 650*999,
        originalPrice: 650*1099,
        images: [
            "/img/google/pixel-9-pro-front.png",
            "/img/google/pixel-9-pro-back.png",
        ],
        category: "Smartphones",
        rating: 4.6,
        reviews: 150,
        colors: ["Noir", "Blanc", "Vert"],
        storage: ["128 Go", "256 Go", "512 Go"],
        description: "Le Pixel 9 Pro offre un appareil photo de qualité professionnelle et des fonctionnalités Google AI intégrées.",
        features: [
            "Appareil photo 50 Mpx avec zoom optique",
            "Processeur Google Tensor G3",
            "Écran OLED 6,7 pouces 120Hz",
            "Batterie 5000 mAh avec charge rapide",
            "Android 15 avec mises à jour garanties 5 ans",
        ],
        specifications: {
            Écran: "OLED 6,7 pouces 120Hz",
            Processeur: "Google Tensor G3",
            Stockage: "128 Go à 512 Go",
            Caméra: "50 Mpx + 48 Mpx téléobjectif + 12 Mpx ultra grand-angle",
            Batterie: "5000 mAh",
            Connectivité: "5G, Wi-Fi 6E, Bluetooth 5.3",
            Résistance: "IP68",
        },
        inStock: true,
    },
    // ajoute d'autres produits Google ici
];