import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Globe, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              JhurGreens International is a leading export and sourcing agency connecting businesses with quality
              products and reliable manufacturing partners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                JhurGreens International was founded with a vision to simplify global trade and connect businesses with
                quality products and reliable manufacturing partners.
              </p>
              <div className="mt-8 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <p>
                  What began as a small operation has grown into a trusted partner for businesses of all sizes looking
                  to source products and establish manufacturing partnerships globally. Our journey has been marked by a
                  commitment to quality, reliability, and customer satisfaction.
                </p>
                <p>
                  Over the years, we have built a vast network of suppliers and manufacturers across various industries,
                  allowing us to offer comprehensive sourcing solutions to our clients. Our team of experienced
                  professionals works tirelessly to ensure that every client receives personalized service and
                  exceptional value.
                </p>
                <p>
                  Today, JhurGreens International stands as a leader in the export and sourcing industry, known for our
                  integrity, expertise, and dedication to helping businesses succeed in the global marketplace.
                </p>
              </div>
            </div>
            <Image
              src="/images/about/story.jpg"
              alt="JhurGreens International Story"
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <Image
              src="/images/about/mission.jpg"
              alt="JhurGreens International Mission and Values"
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:order-last"
              width={800}
              height={600}
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission & Values</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are driven by a mission to simplify global trade and help businesses thrive in the international
                marketplace.
              </p>
              <div className="mt-10 max-w-xl space-y-8">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Our Mission
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    To connect businesses with quality products and reliable manufacturing partners worldwide,
                    simplifying global trade and fostering sustainable business relationships.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Award className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Our Values
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>
                          <strong>Integrity:</strong> We conduct business with honesty and transparency.
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>
                          <strong>Quality:</strong> We are committed to sourcing high-quality products.
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>
                          <strong>Reliability:</strong> We deliver on our promises and meet deadlines.
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>
                          <strong>Customer Focus:</strong> We prioritize our clients' needs and satisfaction.
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>
                          <strong>Innovation:</strong> We continuously improve our processes and services.
                        </span>
                      </li>
                    </ul>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section - Hidden for now
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced team of professionals is dedicated to providing exceptional service and value to our
              clients.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=400&width=400",
                bio: "With over 20 years of experience in international trade, John leads our team with vision and expertise.",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Sourcing",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Sarah's extensive network and industry knowledge ensure our clients find the perfect manufacturing partners.",
              },
              {
                name: "Michael Chen",
                role: "Quality Control Manager",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Michael's attention to detail and commitment to quality ensure our clients receive products that meet their standards.",
              },
            ].map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="aspect-square w-52 rounded-full object-cover"
                  width={400}
                  height={400}
                />
                <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-primary">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600 text-center">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Global Presence Section - Hidden for now
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Global Presence</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With a network spanning across continents, we connect businesses with opportunities worldwide.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Global Map"
              className="w-full rounded-xl shadow-xl"
              width={1200}
              height={600}
            />
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { region: "North America", partners: "50+ Partners" },
                { region: "Europe", partners: "75+ Partners" },
                { region: "Asia", partners: "100+ Partners" },
                { region: "Africa & Middle East", partners: "40+ Partners" },
              ].map((region) => (
                <div key={region.region} className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{region.region}</h3>
                  <p className="mt-2 text-sm text-gray-600">{region.partners}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to work with us?
            <br />
            Get in touch with our team today.
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
