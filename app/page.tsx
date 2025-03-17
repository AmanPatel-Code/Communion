"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Globe, Users, Calendar } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const slideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#0A0F1C] dark:bg-[#0A0F1C]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div variants={fadeIn} className="inline-block">
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-sm text-blue-400 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                  Connecting Communities
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Connecting
                <br />
                People Across
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Faiths & Interests
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Bridging gaps between faiths with technology and a dash of fun! Join us to be part of a community where
                spirituality meets innovation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="group bg-blue-500 hover:bg-blue-600">
                  <Link href="/events" className="flex items-center">
                    Explore Events
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Learn More
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div variants={fadeIn} className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                  ].map((src, i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0A0F1C] overflow-hidden">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`User ${i + 1}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Trusted by <span className="text-gray-300 font-medium">1500+</span> active users
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Illustration */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={slideIn}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg">
                {/* Main Image */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
                    alt="Community gathering"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 45, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1.1, 1, 1.1],
                      rotate: [45, 0, 45],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="py-20 bg-white dark:bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Unite, Innovate, Connect, Inspire Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Together, we'll build a world that's more inclusive, engaging, and connected than ever before!
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-blue-500" />,
                title: "Global Connectivity",
                description: "Connect with people from diverse religious communities for meaningful engagement.",
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                title: "Inclusive Collaboration",
                description: "Engage, collaborate, and connect with diverse people to build meaningful relationships.",
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-500" />,
                title: "Inspiring Events",
                description:
                  "Participate in events designed to foster connections, inspire growth, and build community.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.6, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                More Than <span className="text-blue-600">10,000+</span> Engagements Daily
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience the power of connection with over 10,000 daily interactions worldwide, uniting diverse
                communities through innovation, collaboration, and shared spirituality.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "98%", label: "Opportunities Completed" },
              { value: "89%", label: "Attendee Satisfaction" },
              { value: "15k+", label: "Engaged Participants" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Trusted by Over 1500+ Active Global Users
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive
                together.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John M.",
                location: "USA",
                quote:
                  "Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths.",
              },
              {
                name: "Rohan K.",
                location: "India",
                quote:
                  "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space.",
              },
              {
                name: "Amira L.",
                location: "UAE",
                quote:
                  "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Connect with Like-minded Individuals?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our community today and start exploring events that match your interests and faith.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/events">
                Explore Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about Communion and our events
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <AccordionItem value="item-1" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium">
                    What is the Communion app?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="flex-1">
                        <p className="text-gray-600 dark:text-gray-300">
                          Communion is a digital platform for connecting diverse faiths and communities. We provide a
                          space where people from different religious backgrounds can come together, share experiences,
                          and participate in events that foster understanding and unity.
                        </p>
                      </div>
                      <div className="md:w-1/3 rounded-lg overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                          alt="People connecting"
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <AccordionItem value="item-2" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium">
                    How does it promote social cohesion?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="md:w-1/3 rounded-lg overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                          alt="Community event"
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 dark:text-gray-300">
                          Communion promotes social cohesion by creating opportunities for meaningful interactions
                          across different faith communities. Through our events, discussions, and collaborative
                          initiatives, we break down barriers and build bridges of understanding. Our platform
                          encourages respectful dialogue and celebrates both our differences and our common humanity.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <AccordionItem value="item-3" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium">
                    Can I meet new people?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="flex-1">
                        <p className="text-gray-600 dark:text-gray-300">
                          Absolutely! Communion is designed to help you connect with like-minded individuals from
                          diverse backgrounds. Our events, both virtual and in-person, provide excellent opportunities
                          to meet new people who share your interests or who can offer fresh perspectives. Many of our
                          users have formed lasting friendships and professional connections through our platform.
                        </p>
                      </div>
                      <div className="md:w-1/3 rounded-lg overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                          alt="People meeting"
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <AccordionItem value="item-4" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium">Is it free to use?</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="md:w-1/3 rounded-lg overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                          alt="Free service"
                          width={300}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 dark:text-gray-300">
                          Yes, Communion is free to join and use! We believe in making our platform accessible to
                          everyone. While most of our events and features are completely free, some special events or
                          premium features may have associated costs. We're committed to transparency and will always
                          clearly indicate any costs before you sign up for an event or service.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

