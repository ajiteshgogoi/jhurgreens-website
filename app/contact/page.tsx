import { Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with our team to discuss your sourcing and export needs. We're here to help your business
              thrive in the global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our team is available to assist you with any inquiries or requests.
                </p>

                <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-primary" href="tel:+919395877156">
                        +91-9395877156
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a 
                        className="hover:text-primary" 
                        href="mailto:info@jhurgreens.com?subject=Business%20Inquiry&body=Hello%20Jhurgreens%20Team%2C%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20products%2Fservices.%0D%0A%0D%0ARegards"
                      >
                        info@jhurgreens.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Connect on WhatsApp</h3>
                <p className="mt-2 text-gray-600">For quick responses, connect with us on WhatsApp.</p>
                <div className="mt-6 flex flex-col space-y-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-[#25D366] rounded-full p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Sales Team</h4>
                        <p className="text-sm text-gray-500">For product inquiries and orders</p>
                      </div>
                      <a href="https://wa.me/919395877156" target="_blank" rel="noopener noreferrer" className="ml-auto">
                        <Button className="bg-[#25D366] hover:bg-[#25D366]/90">Chat Now</Button>
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="bg-[#25D366] rounded-full p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Support Team</h4>
                        <p className="text-sm text-gray-500">For ongoing orders and support</p>
                      </div>
                      <a href="https://wa.me/919395877156" target="_blank" rel="noopener noreferrer" className="ml-auto">
                        <Button className="bg-[#25D366] hover:bg-[#25D366]/90">Chat Now</Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
