"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">JhurGreens International</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JhurGreens%20Logo%20Final-0Esq8r8sBYwe6fBdMil1hT7NWysb0p.png"
              alt="JhurGreens Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors",
                pathname === item.href && "text-primary font-bold",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90">Get in Touch</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">JhurGreens International</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JhurGreens%20Logo%20Final-0Esq8r8sBYwe6fBdMil1hT7NWysb0p.png"
                  alt="JhurGreens Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                        pathname === item.href && "bg-gray-50 text-primary",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-primary hover:bg-primary/90 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

