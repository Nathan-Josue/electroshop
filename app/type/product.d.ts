

export interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    images: string[]
    category: string
    rating: number
    reviews: number
    badge?: string
    color?: string
}
