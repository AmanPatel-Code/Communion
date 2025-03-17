"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
        >
          <div className="relative w-full max-w-md flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">C</span>
                </div>
                <motion.div
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 2,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    },
                  }}
                  className="absolute -inset-3 rounded-full border-t-4 border-blue-400 opacity-75"
                ></motion.div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-3xl font-bold text-gray-900 dark:text-white"
              >
                CommunionHub
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-lg text-gray-600 dark:text-gray-400"
              >
                Connecting people across faiths
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-1 bg-blue-600 rounded-full mt-8 max-w-xs"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-sm text-gray-500 dark:text-gray-400"
            >
              Loading amazing experiences...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

