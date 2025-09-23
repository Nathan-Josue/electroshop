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
