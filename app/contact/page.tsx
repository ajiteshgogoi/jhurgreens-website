"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

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

      {/* Contact Form & Info */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Fill out the form below, and our team will get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-lg bg-green-50 p-6 border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
                  </div>
                  <p className="mt-2 text-green-700">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-2.5">
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                        Company
                      </label>
                      <div className="mt-2.5">
                        <Input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                        Phone
                      </label>
                      <div className="mt-2.5">
                        <Input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          value={formState.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <Textarea
                          name="message"
                          id="message"
                          rows={4}
                          required
                          value={formState.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="space-y-10 lg:pl-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Information</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our team is available to assist you with any inquiries or requests.
                </p>

                <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                    </dt>
                    <dd>
                      123 Business Avenue, Suite 456
                      <br />
                      City, Country
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-primary" href="tel:+12345678901">
                        +1 (234) 567-8901
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-primary" href="mailto:info@jhurgreens.com">
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
                      <a href="https://wa.me/12345678901" target="_blank" rel="noopener noreferrer" className="ml-auto">
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
                      <a href="https://wa.me/12345678902" target="_blank" rel="noopener noreferrer" className="ml-auto">
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

      {/* Map Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Location</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Visit our office to discuss your sourcing and export needs in person.
            </p>
          </div>
          <div className="mt-16 overflow-hidden rounded-lg bg-gray-200 shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Office Location Map"
              width={1200}
              height={600}
              className="h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

