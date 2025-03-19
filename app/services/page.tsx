import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, TrendingUp, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "product-sourcing",
      title: "Product Sourcing",
      description: "We identify and connect you with the best suppliers for your product needs.",
      icon: <Globe className="h-12 w-12 text-primary" />,
      content: "Our product sourcing service helps you find the right suppliers for your specific product requirements. We leverage our extensive network of manufacturers and suppliers across various industries to identify the best options for your business. Our team conducts thorough research and vetting to ensure that you are connected with reliable partners who can deliver quality products at competitive prices.",
      features: [
        "Supplier identification and verification",
        "Product specification development",
        "Sample coordination and evaluation",
        "Price negotiation and comparison",
        "Supplier relationship management"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "manufacturing-partnership",
      title: "Manufacturing Partnership",
      description: "We establish reliable manufacturing partnerships to ensure quality production.",
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      content: "Our manufacturing partnership service helps you establish long-term relationships with reliable manufacturers. We work closely with you to understand your production requirements and find manufacturers who can meet your quality standards, volume needs, and timeline expectations. We facilitate communication, negotiate terms, and ensure that your manufacturing partnerships are successful and sustainable.",
      features: [
        "Manufacturer capability assessment",
        "Production capacity planning",
        "Technical specification development",
        "Contract negotiation and management",
        "Ongoing relationship management"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "quality-inspection",
      title: "Quality Inspection",
      description: "We conduct thorough quality inspections to ensure products meet your standards.",
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      content: "Our quality inspection service ensures that the products you receive meet your quality standards. We conduct comprehensive inspections at various stages of production, from pre-production to final inspection before shipment. Our inspectors use detailed checklists and industry standards to verify product quality, functionality, and compliance with your specifications.",
      features: [
        "Pre-production inspection",
        "During production inspection",
        "Pre-shipment inspection",
        "Defect identification and resolution",
        "Quality control documentation"
      ],
      image: "/placeholder.svg?height=600&width=800"
    },
    {
      id: "shipping-logistics",
      title: "Shipping and Logistics",
      description: "We handle all aspects of shipping and logistics to ensure timely delivery.",
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      content: "Our shipping and logistics service takes care of all the complexities involved in transporting your products from the manufacturer to your desired destination. We handle documentation, customs clearance, freight forwarding, and other logistics requirements to ensure that your products are delivered safely and on time. We work with reliable shipping partners to provide cost-effective solutions for your specific needs.",
      features: [
        "Freight forwarding and coordination",
        "Customs documentation and clearance",
        "Shipping method selection and optimization",
        "Cargo insurance arrangement",
        "Delivery tracking and management"
      ],
      image: "/placeholder.svg?height=600&width=800"
    }
  ]

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              JhurGreens International offers comprehensive export and sourcing solutions to help your business thrive in the global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprehensive Export & Sourcing Solutions</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We provide end-to-end services to streamline your global sourcing and export operations, helping you save time, reduce costs, and minimize risks.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {services.map((service) => (
                  <div key={service.id} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-1 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      {service.title}.
                    </dt>
                    <dd className="inline"> {service.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="JhurGreens Services"
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-24 sm:py-32 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${index % 2 === 1 ? 'lg:items-center' : 'lg:items-start'}`}>
            <div className={index % 2 === 1 ? 'order-2' : 'order-1'}>
              <div className="flex items-center gap-x-2">
                {service.icon}
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h2>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {service.content}
              </p>
              <ul className="mt-8 space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex gap-x-3">
                    <CheckCircle className="h-6 w-6 flex-none text-primary" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Inquire About This Service
                  </Button>
                </Link>
              </div>
            </div>
            <div className={index % 2 === 1 ? 'order-1' : 'order-2'}>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>
      ))}

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
              <Button className="bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/products" className="text-sm font-semibold leading-6 text-white flex items-center gap-1">
              View Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

