import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="JhurGreens Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-600 max-w-xs">
              JhurGreens International is a leading export and sourcing agency connecting businesses with quality
              products and reliable manufacturing partners.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/jhurgreens/" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.linkedin.com/company/jhurgreens/" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/jhurgreens/" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Product Sourcing", href: "/services#product-sourcing" },
                { name: "Manufacturing Partnership", href: "/services#manufacturing-partnership" },
                { name: "Quality Inspection", href: "/services#quality-inspection" },
                { name: "Shipping and Logistics", href: "/services#shipping-logistics" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact Information</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">F No 1A, Dishant Palace, Wireless, Guwahati 781028, Assam, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">+91-9395877156</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm text-gray-600">info@jhurgreens.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} JhurGreens International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
