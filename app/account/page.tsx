"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  MapPin,
  Package,
  CreditCard,
  Settings,
  Eye,
  EyeOff,
  Edit,
  Plus,
  Truck,
  CheckCircle,
  Clock,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Données simulées
const userData = {
  name: "Marie Dubois",
  email: "marie.dubois@email.com",
  phone: "+33 6 12 34 56 78",
  avatar: "/placeholder.svg?height=100&width=100&text=MD",
  memberSince: "2022",
  totalOrders: 12,
  totalSpent: 4567,
}

const orders = [
  {
    id: "CMD-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: 1229,
    items: [
      { name: "iPhone 15 Pro", quantity: 1, price: 1229, image: "/placeholder.svg?height=60&width=60&text=iPhone" },
    ],
  },
  {
    id: "CMD-2024-002",
    date: "2024-01-10",
    status: "shipped",
    total: 2199,
    items: [
      { name: "MacBook Pro M3", quantity: 1, price: 2199, image: "/placeholder.svg?height=60&width=60&text=MacBook" },
    ],
  },
  {
    id: "CMD-2023-045",
    date: "2023-12-20",
    status: "delivered",
    total: 279,
    items: [
      { name: "AirPods Pro 2", quantity: 1, price: 279, image: "/placeholder.svg?height=60&width=60&text=AirPods" },
    ],
  },
]

const addresses = [
  {
    id: 1,
    type: "Domicile",
    name: "Marie Dubois",
    street: "123 Rue de la Paix",
    city: "75001 Paris",
    country: "France",
    isDefault: true,
  },
  {
    id: 2,
    type: "Bureau",
    name: "Marie Dubois",
    street: "456 Avenue des Champs",
    city: "75008 Paris",
    country: "France",
    isDefault: false,
  },
]

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    last4: "4242",
    expiry: "12/26",
    isDefault: true,
  },
  {
    id: 2,
    type: "Mastercard",
    last4: "8888",
    expiry: "09/25",
    isDefault: false,
  },
]

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Simuler un utilisateur connecté
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simuler une connexion
    setTimeout(() => {
      setIsLoggedIn(true)
      setIsLoading(false)
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur votre compte ElectroShop !",
      })
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700"
      case "shipped":
        return "bg-blue-100 text-blue-700"
      case "processing":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4" />
      case "shipped":
        return <Truck className="h-4 w-4" />
      case "processing":
        return <Clock className="h-4 w-4" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Livré"
      case "shipped":
        return "Expédié"
      case "processing":
        return "En cours"
      default:
        return "Inconnu"
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md shadow-2xl border-0">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-semibold">Connexion</CardTitle>
              <p className="text-gray-600">Accédez à votre compte ElectroShop</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="votre@email.com" className="h-12" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mot de passe</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-12 pr-12"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Pas encore de compte ?{" "}
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    Créer un compte
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header utilisateur - Responsive */}
        <div className="bg-white rounded-3xl shadow-sm p-4 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="w-16 h-16 md:w-20 md:h-20">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback className="text-lg md:text-xl font-semibold bg-blue-100 text-blue-700">
                {userData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">Bonjour, {userData.name}</h1>
              <p className="text-gray-600 mb-4">Membre depuis {userData.memberSince}</p>
              <div className="flex justify-center md:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">{userData.totalOrders}</div>
                  <div className="text-xs md:text-sm text-gray-600">Commandes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">
                    {userData.totalSpent.toLocaleString("fr-FR")}€
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">Total dépensé</div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="rounded-full bg-transparent w-full md:w-auto">
              <Edit className="h-4 w-4 mr-2" />
              Modifier
            </Button>
          </div>
        </div>

        {/* Onglets - Responsive */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white rounded-2xl p-2 shadow-sm">
            <TabsTrigger value="profile" className="rounded-xl text-xs md:text-sm">
              <User className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Profil</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="rounded-xl text-xs md:text-sm">
              <Package className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Commandes</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="rounded-xl text-xs md:text-sm">
              <MapPin className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Adresses</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="rounded-xl text-xs md:text-sm">
              <CreditCard className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Paiement</span>
            </TabsTrigger>
          </TabsList>

          {/* Onglet Profil */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Informations personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet</label>
                    <Input defaultValue={userData.name} className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input defaultValue={userData.email} className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input defaultValue={userData.phone} className="h-12" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-full h-12">
                    Sauvegarder les modifications
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Paramètres du compte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Mot de passe actuel</label>
                    <Input type="password" placeholder="••••••••" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nouveau mot de passe</label>
                    <Input type="password" placeholder="••••••••" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirmer le mot de passe</label>
                    <Input type="password" placeholder="••••••••" className="h-12" />
                  </div>
                  <Button variant="outline" className="w-full rounded-full h-12 bg-transparent">
                    Changer le mot de passe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Onglet Commandes - Mobile Optimized */}
          <TabsContent value="orders">
            <Card className="shadow-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg md:text-xl">
                  <Package className="h-5 w-5 mr-2" />
                  Historique des commandes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 md:space-y-6">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 space-y-2 md:space-y-0">
                        <div>
                          <h3 className="font-semibold text-base md:text-lg">{order.id}</h3>
                          <p className="text-gray-600 text-sm">
                            Commandé le {new Date(order.date).toLocaleDateString("fr-FR")}
                          </p>
                        </div>
                        <div className="flex items-center justify-between md:text-right md:block">
                          <Badge className={`${getStatusColor(order.status)} mb-0 md:mb-2`}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1">{getStatusText(order.status)}</span>
                          </Badge>
                          <p className="font-semibold text-lg">{order.total.toLocaleString("fr-FR")}€</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 md:space-x-4">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover bg-gray-100"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm md:text-base truncate">{item.name}</p>
                              <p className="text-gray-600 text-xs md:text-sm">Quantité: {item.quantity}</p>
                            </div>
                            <p className="font-semibold text-sm md:text-base">{item.price.toLocaleString("fr-FR")}€</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-4 pt-4 border-t">
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent w-full md:w-auto">
                          Voir les détails
                        </Button>
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm" className="rounded-full bg-transparent w-full md:w-auto">
                            Racheter
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Adresses - Mobile Optimized */}
          <TabsContent value="addresses">
            <Card className="shadow-sm border-0">
              <CardHeader className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <CardTitle className="flex items-center text-lg md:text-xl">
                  <MapPin className="h-5 w-5 mr-2" />
                  Adresses de livraison
                </CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter une adresse
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow relative"
                    >
                      {address.isDefault && (
                        <Badge className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs">Par défaut</Badge>
                      )}
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg mb-1">{address.type}</h3>
                        <p className="text-gray-600">{address.name}</p>
                      </div>
                      <div className="space-y-1 text-gray-600 mb-4">
                        <p>{address.street}</p>
                        <p>{address.city}</p>
                        <p>{address.country}</p>
                      </div>
                      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent w-full md:w-auto">
                          Modifier
                        </Button>
                        {!address.isDefault && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full text-red-600 hover:text-red-700 bg-transparent w-full md:w-auto"
                          >
                            Supprimer
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Paiement - Mobile Optimized */}
          <TabsContent value="payment">
            <Card className="shadow-sm border-0">
              <CardHeader className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <CardTitle className="flex items-center text-lg md:text-xl">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Moyens de paiement
                </CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full w-full md:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter une carte
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow relative"
                    >
                      {method.isDefault && (
                        <Badge className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs">Par défaut</Badge>
                      )}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{method.type}</p>
                          <p className="text-gray-600 text-sm">•••• •••• •••• {method.last4}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">Expire le {method.expiry}</p>
                      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent w-full md:w-auto">
                          Modifier
                        </Button>
                        {!method.isDefault && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full text-red-600 hover:text-red-700 bg-transparent w-full md:w-auto"
                          >
                            Supprimer
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
