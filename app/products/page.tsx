import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const productCategories = [
    {
      id: "agricultural",
      title: "Agricultural Products",
      description: "Fresh and processed agricultural products from trusted farms and producers.",
      image: "/placeholder.svg?height=400&width=600",
      products: ["Fresh Fruits & Vegetables", "Grains & Cereals", "Nuts & Seeds", "Spices & Herbs", "Processed Foods"],
    },
    {
      id: "consumer",
      title: "Consumer Goods",
      description: "High-quality consumer goods from reliable manufacturers worldwide.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        "Home & Kitchen Appliances",
        "Electronics & Gadgets",
        "Furniture & Home Decor",
        "Clothing & Textiles",
        "Personal Care Products",
      ],
    },
    {
      id: "industrial",
      title: "Industrial Equipment",
      description: "Durable industrial equipment and machinery for various business needs.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        "Manufacturing Machinery",
        "Construction Equipment",
        "Electrical Components",
        "Industrial Tools",
        "Safety Equipment",
      ],
    },
    {
      id: "packaging",
      title: "Packaging Materials",
      description: "Innovative and sustainable packaging solutions for different industries.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        "Plastic Packaging",
        "Paper & Cardboard",
        "Glass Containers",
        "Metal Packaging",
        "Biodegradable Options",
      ],
    },
    {
      id: "textiles",
      title: "Textiles & Fabrics",
      description: "Quality textiles and fabrics for fashion and home furnishing industries.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        "Cotton & Natural Fibers",
        "Synthetic Fabrics",
        "Specialty Textiles",
        "Yarn & Thread",
        "Textile Accessories",
      ],
    },
    {
      id: "electronics",
      title: "Electronics & Components",
      description: "Electronic components and finished products for various applications.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        "Consumer Electronics",
        "Electronic Components",
        "Computer Hardware",
        "Communication Devices",
        "Smart Home Products",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Products</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              JhurGreens International sources a wide range of high-quality products from trusted manufacturers and
              suppliers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Categories</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We source products across various categories to meet diverse business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {productCategories.map((category) => (
              <Card key={category.id} id={category.id} className="flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4">{category.description}</CardDescription>
                  <ul className="space-y-2">
                    {category.products.map((product, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-gray-600">{product}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Custom Product Sourcing</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Don't see what you're looking for? We specialize in custom product sourcing to meet your specific
                requirements.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Tailored sourcing solutions.
                  </dt>
                  <dd className="inline">
                    {" "}
                    We work closely with you to understand your specific product requirements and find the perfect
                    match.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Product development support.
                  </dt>
                  <dd className="inline">
                    {" "}
                    We can help you develop new products or modify existing ones to meet your market needs.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Competitive pricing.
                  </dt>
                  <dd className="inline">
                    {" "}
                    We leverage our network to secure the best possible pricing for your custom products.
                  </dd>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">Inquire About Custom Sourcing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Custom Product Sourcing"
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Looking for specific products?
            <br />
            Let us know your requirements.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100">Contact Us</Button>
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-white flex items-center gap-1">
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

