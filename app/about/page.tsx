"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

const values = [
  {
    title: "Accessibilité",
    description: "La technologie la plus puissante est celle que tout le monde peut utiliser.",
    image: "/placeholder.svg?height=400&width=600&text=Accessibilité",
  },
  {
    title: "Environnement",
    description: "Nous nous engageons pour une planète plus verte avec des produits durables.",
    image: "/placeholder.svg?height=400&width=600&text=Environnement",
  },
  {
    title: "Confidentialité",
    description: "Vos données personnelles vous appartiennent. Point final.",
    image: "/placeholder.svg?height=400&width=600&text=Confidentialité",
  },
  {
    title: "Inclusion",
    description: "Nous créons des produits qui reflètent la diversité du monde.",
    image: "/placeholder.svg?height=400&width=600&text=Inclusion",
  },
]

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
  const sectionsRef = useRef<Record<string, HTMLElement>>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    Object.keys(sectionsRef.current).forEach((key) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({ ...prev, [key]: true }))
            }
          })
        },
        { threshold: 0.1 },
      )

      if (sectionsRef.current[key]) {
        observer.observe(sectionsRef.current[key])
        observers.push(observer)
      }
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const setSectionRef = (key: string) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[key] = el
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - Style Apple */}
        <section className="pt-24 pb-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              ref={setSectionRef("hero")}
            >
              <h1 className="text-5xl md:text-7xl font-semibold text-black mb-8 tracking-tight leading-none">
                Nous pensons différemment.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Chez ElectroShop, nous croyons que la technologie doit être accessible, intuitive et respectueuse de
                l'environnement. C'est cette vision qui guide chacune de nos décisions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                visibleSections.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              ref={setSectionRef("mission")}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 leading-tight">
                  Notre mission est simple.
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                  Rendre la technologie accessible à tous, partout dans le monde. Nous sélectionnons les meilleurs
                  produits et les rendons disponibles avec un service exceptionnel.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Depuis 2018, nous avons aidé plus de 500 000 personnes à découvrir et adopter les technologies qui
                  transforment leur quotidien.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600&text=Mission"
                  alt="Notre mission"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Sections */}
        {values.map((value, index) => (
          <section key={index} className={`py-32 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="max-w-6xl mx-auto px-4">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                  visibleSections[`value-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                ref={setSectionRef(`value-${index}`)}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 leading-tight">{value.title}</h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">{value.description}</p>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Stats Section */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              ref={setSectionRef("stats")}
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-16 leading-tight">Quelques chiffres</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                  <div className="text-5xl md:text-6xl font-light mb-4">500K+</div>
                  <div className="text-lg text-gray-300 font-light">Clients dans le monde</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-light mb-4">15</div>
                  <div className="text-lg text-gray-300 font-light">Pays desservis</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-light mb-4">99.9%</div>
                  <div className="text-lg text-gray-300 font-light">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`text-center mb-20 transition-all duration-1000 ${
                visibleSections.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              ref={setSectionRef("team")}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 leading-tight">
                L'équipe qui rend tout possible
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Des experts passionnés qui partagent une vision commune : rendre la technologie accessible à tous.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Marie Dubois", role: "CEO", image: "/placeholder.svg?height=300&width=300&text=Marie" },
                { name: "Thomas Martin", role: "CTO", image: "/placeholder.svg?height=300&width=300&text=Thomas" },
                { name: "Sophie Chen", role: "Design", image: "/placeholder.svg?height=300&width=300&text=Sophie" },
                { name: "Lucas Moreau", role: "Operations", image: "/placeholder.svg?height=300&width=300&text=Lucas" },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${
                    visibleSections.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-light">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              ref={setSectionRef("cta")}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 leading-tight">
                Prêt à découvrir l'avenir ?
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Explorez notre sélection de produits soigneusement choisis pour leur innovation et leur qualité.
              </p>
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-lg font-medium"
              >
                Découvrir nos produits
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
