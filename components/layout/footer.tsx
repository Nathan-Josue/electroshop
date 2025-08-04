import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Navigation principale */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Boutique */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Boutique</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories/smartphones" className="text-sm font-semibold text-gray-800">
                  Smartphones
                </Link>
                <ul className="ml-4 space-y-2 text-gray-600">
                  <li><Link href="/categories/smartphones/iphone" className="hover:text-gray-900">iPhone</Link></li>
                  <li><Link href="/categories/smartphones/samsung" className="hover:text-gray-900">Samsung</Link></li>
                  <li><Link href="/categories/smartphones/huawei" className="hover:text-gray-900">Huawei</Link></li>
                  <li><Link href="/categories/smartphones/xiaomi" className="hover:text-gray-900">Xiaomi</Link></li>
                  <li><Link href="/categories/smartphones/techno" className="hover:text-gray-900">Techno</Link></li>
                  <li><Link href="/categories/smartphones/itel" className="hover:text-gray-900">Itel</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/categories/computers" className="text-sm font-semibold text-gray-800">
                  Ordinateurs
                </Link>
                <ul className="ml-4 space-y-2 text-gray-600">
                  <li><Link href="/categories/computers/mac" className="hover:text-gray-900">Mac</Link></li>
                  <li><Link href="/categories/computers/hp" className="hover:text-gray-900">HP</Link></li>
                  <li><Link href="/categories/computers/lenovo" className="hover:text-gray-900">Lenovo</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/categories/tablets" className="text-sm font-semibold text-gray-800">
                  Tablettes
                </Link>
                <ul className="ml-4 space-y-2 text-gray-600">
                  <li><Link href="/categories/tablets/ipad" className="hover:text-gray-900">IPad</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/categories/watches" className="text-sm font-semibold text-gray-800">
                  Montres connectées
                </Link>
                <ul className="ml-4 space-y-2 text-gray-600">
                  <li><Link href="/categories/audio/airpods" className="hover:text-gray-900">Apple Watch</Link></li>
                  <li><Link href="/categories/audio/sony" className="hover:text-gray-900">Smart Watch</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/categories/audio" className="text-sm font-semibold text-gray-800">
                  Audio
                </Link>
                <ul className="ml-4 space-y-2 text-gray-600">
                  <li><Link href="/categories/audio/airpods" className="hover:text-gray-900">AirPods</Link></li>
                  <li><Link href="/categories/audio/sony" className="hover:text-gray-900">Sony</Link></li>
                </ul>
              </li>

              <li>
                <Link href="/categories/accessories" className="text-sm font-semibold text-gray-800">
                  Accessoires
                </Link>
              </li>
            </ul>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Support technique
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Garantie
                </Link>
              </li>
              <li>
                <Link href="/repairs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Réparations
                </Link>
              </li>
              <li>
                <Link href="/trade-in" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Reprise
                </Link>
              </li>
              <li>
                <Link href="/financing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Financement
                </Link>
              </li>
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Compte</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Mon compte
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Mes commandes
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Liste de souhaits
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Retours
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">ElectroShop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Presse
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Investisseurs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Accessibilité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-xs text-gray-500">
                Plus de moyens de faire ses achats :
                <Link href="/stores" className="text-blue-600 hover:underline ml-1">
                  Trouvez un magasin
                </Link>{" "}
                ou
                <Link href="/resellers" className="text-blue-600 hover:underline ml-1">
                  un revendeur
                </Link>{" "}
                près de chez vous.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <p className="text-xs text-gray-500">France</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              Copyright © 2024 ElectroShop Inc. Tous droits réservés.
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:underline">
                Politique de confidentialité
              </Link>
              <span className="mx-2">|</span>
              <Link href="/terms" className="hover:underline">
                Conditions d'utilisation
              </Link>
              <span className="mx-2">|</span>
              <Link href="/legal" className="hover:underline">
                Mentions légales
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
