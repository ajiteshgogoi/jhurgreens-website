import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, ShieldCheck, Globe, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Global Sourcing & Export Partner
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                JhurGreens International connects businesses worldwide with quality products and reliable manufacturing
                partners. We handle everything from sourcing to shipping.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/services">
                  <Button className="bg-primary hover:bg-primary/90">Our Services</Button>
                </Link>
                <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="/placeholder.svg?height=800&width=1200"
              alt="JhurGreens International"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive solutions for businesses looking to source products and establish manufacturing
              partnerships globally.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {[
                {
                  name: "Product Sourcing",
                  description: "We identify and connect you with the best suppliers for your product needs.",
                  icon: <Globe className="h-6 w-6 text-primary" />,
                  href: "/services#product-sourcing",
                },
                {
                  name: "Manufacturing Partnership",
                  description: "We establish reliable manufacturing partnerships to ensure quality production.",
                  icon: <TrendingUp className="h-6 w-6 text-primary" />,
                  href: "/services#manufacturing-partnership",
                },
                {
                  name: "Quality Inspection",
                  description: "We conduct thorough quality inspections to ensure products meet your standards.",
                  icon: <ShieldCheck className="h-6 w-6 text-primary" />,
                  href: "/services#quality-inspection",
                },
                {
                  name: "Shipping & Logistics",
                  description: "We handle all aspects of shipping and logistics to ensure timely delivery.",
                  icon: <CheckCircle className="h-6 w-6 text-primary" />,
                  href: "/services#shipping-logistics",
                },
              ].map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {service.icon}
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        href={service.href}
                        className="text-sm font-semibold leading-6 text-primary flex items-center gap-1"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover the wide range of products we can source for your business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Agricultural Products",
                description: "Fresh and processed agricultural products from trusted farms and producers.",
                imageSrc: "/placeholder.svg?height=400&width=600",
              },
              {
                name: "Consumer Goods",
                description: "High-quality consumer goods from reliable manufacturers worldwide.",
                imageSrc: "/placeholder.svg?height=400&width=600",
              },
              {
                name: "Industrial Equipment",
                description: "Durable industrial equipment and machinery for various business needs.",
                imageSrc: "/placeholder.svg?height=400&width=600",
              },
            ].map((product) => (
              <Card key={product.name} className="flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" className="mt-10">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose JhurGreens</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We pride ourselves on delivering exceptional service and value to our clients.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  name: "Global Network",
                  description: "Access to a vast network of suppliers and manufacturers across the globe.",
                },
                {
                  name: "Quality Assurance",
                  description: "Rigorous quality control processes to ensure products meet your standards.",
                },
                {
                  name: "Competitive Pricing",
                  description: "Leverage our relationships to secure the best possible pricing for your products.",
                },
                {
                  name: "End-to-End Service",
                  description: "Comprehensive support from sourcing to delivery, simplifying your supply chain.",
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to streamline your sourcing?
            <br />
            Get in touch with our team today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100">Contact Us</Button>
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-white flex items-center gap-1">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

