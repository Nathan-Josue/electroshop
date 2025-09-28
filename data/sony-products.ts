import {Product} from "@/app/type/all-product";

export const sonyProducts  : Product[] = [
    {
    id: "sony-wh-1000xm5",
        brand: "Sony",
        name: "Sony WH-1000XM5",
        tagline: "The best noise canceling, now with better call quality.",
        price: 650*399,
        originalPrice: 650*449,
        images: [
        "/img/76cc571af39ddbe23d060c00ac7d7a8b.avif?height=600&width=600&text=Sony+WH1000XM5+Front",
        "/img/8d55bb90f843724704c6ddc13d7663c5.avif?height=600&width=600&text=Sony+WH1000XM5+Side",
        "/img/6145c1d32e6ac8e63a46c912dc33c5bb.avif?height=600&width=600&text=Sony+WH1000XM5+Colors",
        "/img/9-762869-7-SNY-What-s-In-The-Box-BLK-WH-1000XM5-Headphones-2000x2000px-FR-min.jpg?height=600&width=600&text=Sony+WH1000XM5+Folded",
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

]