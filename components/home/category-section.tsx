import Link from "next/link"
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2 } from "lucide-react"

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    href: "/categories/smartphones",
    color: "bg-blue-500",
    count: "150+ produits",
  },
  {
    name: "Ordinateurs",
    icon: Laptop,
    href: "/categories/computers",
    color: "bg-purple-500",
    count: "80+ produits",
  },
  {
    name: "Audio",
    icon: Headphones,
    href: "/categories/audio",
    color: "bg-green-500",
    count: "120+ produits",
  },
  {
    name: "Montres",
    icon: Watch,
    href: "/categories/watches",
    color: "bg-orange-500",
    count: "45+ produits",
  },
  {
    name: "Photo",
    icon: Camera,
    href: "/categories/cameras",
    color: "bg-red-500",
    count: "60+ produits",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    href: "/categories/gaming",
    color: "bg-indigo-500",
    count: "90+ produits",
  },
]

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explorez nos catégories</h2>
          <p className="text-lg text-gray-600">
            Trouvez exactement ce que vous cherchez dans nos différentes catégories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
