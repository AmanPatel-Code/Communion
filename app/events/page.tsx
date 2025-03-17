"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EventCard from "@/components/event-card"
import AddEventForm from "@/components/add-event-form"
import EventDetailsSection from "@/components/event-details-section"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Event } from "@/types/event"

// Sample event data
const initialEvents: Event[] = [
  {
    id: "1",
    title: "Christmas Charity Drive",
    date: "2025-03-15",
    time: "5:30 AM EST",
    location: "St. Mary's Church, New York",
    description:
      "Join us for our annual Christmas charity drive to help those in need during the holiday season. We'll be collecting toys, clothes, and food donations for local families.",
    category: "Charity",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "2",
    title: "Eid-ul-Fitr Celebration",
    date: "2025-03-30",
    time: "5:30 AM EST",
    location: "Islamic Center, Chicago",
    description:
      "Celebrate Eid-ul-Fitr with the community. Everyone is welcome to join the festivities, enjoy traditional foods, and participate in cultural activities. This event promotes cross-cultural understanding and unity.",
    category: "Religious",
    image:
      "https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "3",
    title: "Mahavir Jayanti",
    date: "2025-04-10",
    time: "5:30 AM EST",
    location: "Jain Temple, San Francisco",
    description:
      "Celebrate the birth of Lord Mahavira, the founder of Jainism, with prayers and community activities. Learn about Jain principles of non-violence, truth, and compassion through interactive sessions and cultural performances.",
    category: "Religious",
    image:
      "https://images.unsplash.com/photo-1592903204858-e288251ad9cc?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "4",
    title: "Good Friday Service",
    date: "2025-04-18",
    time: "5:30 PM EST",
    location: "Grace Cathedral, Boston",
    description:
      "Join us for a solemn Good Friday service commemorating the crucifixion of Jesus Christ. The service will include readings, prayers, and music that reflect on the significance of this important day in the Christian calendar.",
    category: "Religious",
    image:
      "https://images.unsplash.com/photo-1601504241516-e16f3fb09753?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "5",
    title: "Interfaith Dialogue: Finding Common Ground",
    date: "2025-03-22",
    time: "2:00 PM EST",
    location: "Community Center, Seattle",
    description:
      "A panel discussion with leaders from different faiths exploring common values and beliefs. This event aims to foster understanding and respect among diverse religious communities through open dialogue and shared experiences.",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "6",
    title: "Meditation Workshop",
    date: "2025-04-05",
    time: "10:00 AM EST",
    location: "Zen Center, Austin",
    description:
      "Learn meditation techniques from different spiritual traditions to enhance your well-being. This workshop is suitable for beginners and experienced practitioners alike, and will include guided sessions, discussions, and practical tips for establishing a daily meditation practice.",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(initialEvents)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter((event) => event.category.toLowerCase() === selectedCategory.toLowerCase()))
    }
  }, [selectedCategory, events])

  const handleAddEvent = (newEvent: Event) => {
    const updatedEvents = [...events, { ...newEvent, id: (events.length + 1).toString() }]
    setEvents(updatedEvents)
    setIsFormOpen(false)
  }

  const categories = ["all", "religious", "social", "charity", "workshop"]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Discover Upcoming Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Browse and join events that connect people across faiths and interests. Find your community today!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filter Events
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Events</SheetTitle>
                    <SheetDescription>Select a category to filter the events</SheetDescription>
                  </SheetHeader>
                  <div className="py-6">
                    <Tabs
                      defaultValue="all"
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                      className="w-full"
                    >
                      <TabsList className="grid grid-cols-2 gap-2 mb-4">
                        {categories.map((category) => (
                          <TabsTrigger key={category} value={category} className="capitalize">
                            {category}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>
                </SheetContent>
              </Sheet>

              <Button onClick={() => setIsFormOpen(true)} className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Event
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <motion.div
                key="events-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <div onClick={() => setSelectedEvent(event)}>
                      <EventCard event={event} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-events"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
                  No events found in this category
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-500">
                  Try selecting a different category or add a new event
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Add Event Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add New Event</h2>
              <AddEventForm onSubmit={handleAddEvent} onCancel={() => setIsFormOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && <EventDetailsSection event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

