"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Clock, Tag, Users, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Event } from "@/types/event"

interface EventDetailsSectionProps {
  event: Event | null
  onClose: () => void
}

export default function EventDetailsSection({ event, onClose }: EventDetailsSectionProps) {
  const [isLiked, setIsLiked] = useState(false)

  if (!event) return null

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-4xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full"
            onClick={onClose}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Button>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full inline-block mb-2">
              {event.category}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{event.title}</h2>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">About This Event</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">What You'll Experience</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    <span>Connect with people from diverse faith backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    <span>Participate in meaningful discussions and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    <span>Learn about different cultural and religious traditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                    <span>Build lasting relationships with community members</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Organizer</h3>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">CH</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">CommunionHub Team</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Organizing events since 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    {event.category}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                    12+ people attending
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full mb-2">Register Now</Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="flex-1" onClick={() => setIsLiked(!isLiked)}>
                      <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Attendees</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-${1510000000 + i * 10000}-53994a69daeb?ixlib=rb-4.0.1&auto=format&fit=crop&w=40&h=40&q=80`}
                        alt={`Attendee ${i + 1}`}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300">
                    +4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

