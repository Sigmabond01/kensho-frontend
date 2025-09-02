"use client"

import React from "react"
import { motion } from "framer-motion"

// Simple Card components (no shadcn)
export function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-3xl shadow-xl border border-stone-300/30 bg-gradient-to-br from-stone-50 via-amber-50/80 to-orange-50/60 
                     dark:border-amber-600/20 dark:from-neutral-900 dark:via-amber-950/20 dark:to-orange-950/30
                     text-stone-800 dark:text-stone-200 ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 15, stiffness: 100, duration: 0.7 },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { type: "spring" as const, stiffness: 200, damping: 10 },
  },
}

const titleVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 10, duration: 0.8 },
  },
}

const subtitleVariant = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
}

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 font-cinzelreg px-4 bg-gradient-to-br from-stone-50 via-amber-50/50 to-orange-50/30 
                       dark:from-neutral-950 dark:via-amber-950/10 dark:to-orange-950/20 
                       text-stone-800 dark:text-stone-200 overflow-hidden relative">
      
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,69,19,0.15) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={titleVariant}
            className="text-4xl md:text-5xl pt-6 font-light leading-snug font-cinzelreg 
                      text-transparent bg-clip-text bg-gradient-to-br 
                      from-amber-800 via-orange-700 to-red-800
                      dark:from-amber-200 dark:via-orange-300 dark:to-red-400"
          >
            Unlock the Power of Your Knowledge
            <br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-orange-600 via-red-600 to-amber-700
                        dark:from-orange-300 dark:via-red-300 dark:to-amber-300 
                        inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Organize. Store. Access.
            </motion.span>
          </motion.h2>
          
          {/* Zen divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent 
                      dark:via-amber-400 mx-auto mt-6 mb-6"
          />
          
          <motion.p
            variants={subtitleVariant}
            className="text-stone-600 dark:text-stone-400 font-light mt-4 font-cinzelreg 
                      max-w-xl mx-auto py-6 text-lg leading-relaxed"
          >
            A second brain for your links, ideas, and inspiration — designed to help students and indie devs stay organized and focused.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-4 gap-6 py-6"
        >
          {[
            {
              title: "Start Organizing Your Links Today",
              desc: "Get started with your second brain — organize, store, and access all your important resources in one place.",
            },
            {
              title: "Keep Your Links and Ideas Organized",
              desc: "Easily categorize and store your links, ideas, and notes. Retrieve them instantly whenever you need them.",
            },
            {
              title: "Add Links, Notes, and Media for Quick Access",
              desc: "Embed links, YouTube videos, articles, or code snippets to each resource for easy reference at any time.",
            },
            {
              title: "Collaborate with Peers and Teammates",
              desc: "Share your knowledge and work together with classmates, fellow developers, or teammates effortlessly.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={cardItem} whileHover="hover" className="h-full">
              <Card className="h-full transition-all duration-500 hover:shadow-2xl
                              backdrop-blur-sm border-2 hover:border-amber-300/50 
                              dark:hover:border-amber-500/30">
                <CardContent className="flex flex-col justify-between h-full p-0">
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-3 font-cinzelreg 
                                  text-amber-900 dark:text-amber-200
                                  tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm font-light 
                                leading-relaxed font-cinzelreg">
                      {feature.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection