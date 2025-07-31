"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
  const sectionsRef = useRef<Record<string, HTMLElement>>({})
  const { toast } = useToast()

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section - Apple Style */}
        <section ref={setSectionRef("hero")} className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight">Contactez-nous</h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Vous avez des questions sur nos produits ou services ? Notre équipe est là pour vous aider.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options - Apple Style */}
        <section ref={setSectionRef("options")} className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 ${
                visibleSections.options ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Support */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Support</h2>
                <p className="text-gray-600 mb-6">
                  Besoin d'aide avec un produit existant ? Notre équipe de support est disponible.
                </p>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-6">Contacter le support</Button>
              </div>

              {/* Ventes */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Ventes</h2>
                <p className="text-gray-600 mb-6">
                  Intéressé par nos produits pour votre entreprise ? Parlons de vos besoins.
                </p>
                <Button className="rounded-full bg-green-600 hover:bg-green-700 px-6">Contacter les ventes</Button>
              </div>

              {/* Presse */}
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Presse</h2>
                <p className="text-gray-600 mb-6">
                  Journaliste ou média ? Contactez notre service de presse pour toute demande.
                </p>
                <Button className="rounded-full bg-purple-600 hover:bg-purple-700 px-6">Contact presse</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form - Apple Style */}
        <section ref={setSectionRef("form")} className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  visibleSections.form ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Envoyez-nous un message</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nous apprécions vos commentaires et sommes prêts à répondre à toutes vos questions. Remplissez le
                  formulaire et nous vous répondrons dans les plus brefs délais.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">contact@electroshop.fr</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Adresse</h3>
                      <p className="text-gray-600">123 Rue de la Tech, 75001 Paris</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 delay-500 ${
                  visibleSections.form ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-10">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Nom complet</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Votre nom"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="votre@email.com"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Sujet</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        placeholder="Sujet de votre message"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Comment pouvons-nous vous aider ?"
                        className="min-h-[150px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300"
                    >
                      Envoyer le message
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez notre{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        politique de confidentialité
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Apple Style */}
        <section ref={setSectionRef("faq")} className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                visibleSections.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Questions fréquentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trouvez rapidement des réponses aux questions les plus courantes.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <span className="text-left font-medium">Quels sont les délais de livraison ?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Nous proposons une livraison standard sous 2-3 jours ouvrés et une livraison express sous 24h. La
                    livraison est gratuite pour toute commande supérieure à 50€.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <span className="text-left font-medium">Comment puis-je suivre ma commande ?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pouvez
                    également suivre votre commande dans la section "Mes commandes" de votre compte.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <span className="text-left font-medium">Quelle est votre politique de retour ?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Nous offrons un retour gratuit sous 30 jours pour tous nos produits. Les produits doivent être
                    retournés dans leur emballage d'origine et en parfait état.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <span className="text-left font-medium">Comment contacter le service client ?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Notre service client est disponible par email à support@electroshop.fr, par téléphone au +33 1 23 45
                    67 89 du lundi au vendredi de 9h à 18h, ou via le formulaire de contact sur cette page.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <span className="text-left font-medium">Proposez-vous une garantie sur vos produits ?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Tous nos produits sont couverts par la garantie constructeur standard. Nous proposons également des
                    extensions de garantie pour une tranquillité d'esprit supplémentaire.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Map Section - Apple Style */}
        <section ref={setSectionRef("map")} className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                visibleSections.map ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nous rendre visite</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Venez découvrir nos produits en magasin et rencontrer notre équipe.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                visibleSections.map ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-gray-100 rounded-3xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=1200&text=Carte+Interactive"
                  alt="Carte du magasin"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <h3 className="font-semibold mb-2">Paris</h3>
                  <p className="text-gray-600">
                    123 Rue de la Tech
                    <br />
                    75001 Paris
                    <br />
                    Lun-Sam: 10h-19h
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <h3 className="font-semibold mb-2">Lyon</h3>
                  <p className="text-gray-600">
                    45 Avenue Digitale
                    <br />
                    69002 Lyon
                    <br />
                    Lun-Sam: 10h-19h
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <h3 className="font-semibold mb-2">Marseille</h3>
                  <p className="text-gray-600">
                    78 Boulevard Innovation
                    <br />
                    13001 Marseille
                    <br />
                    Lun-Sam: 10h-19h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Apple Style */}
        <section ref={setSectionRef("cta")} className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Besoin d'aide supplémentaire ?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Notre équipe d'experts est disponible pour vous aider à trouver le produit parfait pour vos besoins.
              </p>
              <Button className="h-12 px-8 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-300">
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
