import {xiaomiProducts} from "@/data/xiaomi-products";
import {samsungProducts} from '@/data/samsung-products';
import {appleProducts} from '@/data/apple-products';
import {googleProducts} from '@/data/goole-products';
import {nintendoProducts} from '@/data/nintendo-products';
import {sonyProducts} from '@/data/sony-products';
import {Product} from "@/app/type/all-product";

function arrayToRecord(products: Product[]): Record<string, Product> {
    return products.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {} as Record<string, Product>);
}

const xiaomiProductsRecord = arrayToRecord(xiaomiProducts);
const samsungProductsRecord = arrayToRecord(samsungProducts);
const appleProductsRecord = arrayToRecord(appleProducts);
const googleProductsRecord = arrayToRecord(googleProducts);
const nintendoProductsRecord = arrayToRecord(nintendoProducts);
const sonyProductsRecord = arrayToRecord(sonyProducts);


const allProductsDatabase: Record<string, Product> = {
    ...xiaomiProductsRecord,
    ...samsungProductsRecord,
    ...appleProductsRecord,
    ...googleProductsRecord,
    ...nintendoProductsRecord,
    ...sonyProductsRecord,
};


// Helper pour obtenir un produit par ID
export function getProductById(id: string): Product | null {
    return allProductsDatabase[id] || null
}

// Helper pour obtenir tous les produits
export function getAllProducts(): Product[] {
    return Object.values(allProductsDatabase)
}

// Helper pour obtenir les produits par catégorie
export function getProductsByCategory(category: string): Product[] {
    return Object.values(allProductsDatabase).filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    )
}

// Helper pour obtenir les produits par marque
export function getProductsByBrand(brand: string): Product[] {
    return Object.values(allProductsDatabase).filter(
        (product) => product.brand.toLowerCase() === brand.toLowerCase()
    )
}


// Helper pour rechercher des produits
export function searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase()
    return Object.values(allProductsDatabase).filter(
        (product) =>
            product.name.toLowerCase().includes(lowercaseQuery) ||
            product.category.toLowerCase().includes(lowercaseQuery) ||
            product.description.toLowerCase().includes(lowercaseQuery)
    )
}

