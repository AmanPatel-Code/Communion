"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Event } from "@/types/event"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)

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
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
          {event.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>

        <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
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
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">{event.description}</p>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900 overflow-hidden"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${1510000000 + i * 1000}-53994a69daeb?ixlib=rb-4.0.1&auto=format&fit=crop&w=32&h=32&q=80`}
                      alt="Attendee"
                      width={24}
                      height={24}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="ml-2">12+ attending</span>
            </div>
            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              {Math.floor(Math.random() * 10) + 5} spots left
            </span>
          </div>

          <Button className="w-full">View Details</Button>
        </div>
      </div>
    </motion.div>
  )
}

