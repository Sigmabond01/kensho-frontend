"use client";

import React from "react";
import { motion } from "framer-motion";

// Zen-inspired animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const cardVariant = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 80,
      duration: 0.9
    },
  },
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15,
      duration: 0.4
    }
  },
  tap: {
    scale: 0.97,
  }
};

const titleVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
      duration: 1
    }
  }
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const iconVariant = {
  hidden: { scale: 0.6, opacity: 0, rotate: -20 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15,
      delay: 0.1
    }
  },
  hover: {
    scale: 1.15,
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const dividerVariant = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "4rem",
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1.2,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const LoveSection: React.FC = () => {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-stone-100 via-amber-50/70 to-orange-100/50 
                 dark:from-neutral-900 dark:via-amber-950/30 dark:to-orange-950/40 overflow-hidden relative"
      role="region"
      aria-label="Paths of Enlightenment"
    >
      {/* Floating elements background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 rounded-full bg-amber-400/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 rounded-full bg-orange-500/40"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Paper texture */}
      <div className="absolute inset-0 opacity-15 dark:opacity-8"
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139,69,19,0.12) 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={titleVariant}
            className="text-4xl md:text-5xl font-light mb-6 font-cinzelreg
                      text-transparent bg-clip-text bg-gradient-to-br 
                      from-amber-800 via-orange-700 to-red-800
                      dark:from-amber-200 dark:via-orange-300 dark:to-red-400
                      leading-tight"
          >
            Paths of <span className="text-transparent bg-clip-text bg-gradient-to-r 
                                    from-red-700 via-orange-600 to-amber-700
                                    dark:from-red-300 dark:via-orange-300 dark:to-amber-300">
              Enlightenment
            </span>
          </motion.h2>
          
          <motion.div 
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
            variants={dividerVariant}
            className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent 
                      dark:via-amber-400 mx-auto mb-6"
          />
          
          <motion.p 
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
            variants={subtitleVariant}
            className="text-stone-600 dark:text-stone-400 font-light max-w-2xl mx-auto 
                      font-cinzelreg text-lg leading-relaxed"
          >
            Whether you seek inspiration or deep understanding, your knowledge sanctuary 
            keeps wisdom organized and accessible on your journey.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {/* Creative Minds */}
          <motion.article
            variants={cardVariant}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-br from-stone-50 via-amber-50/90 to-orange-50/70 
                      dark:from-neutral-800 dark:via-amber-950/40 dark:to-orange-950/50
                      p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500
                      border border-stone-200/60 dark:border-amber-600/20 
                      hover:border-amber-300/70 dark:hover:border-amber-500/40
                      backdrop-blur-sm cursor-default"
            aria-label="For Creative Minds"
          >
            <motion.div 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
              variants={iconVariant}
              whileHover="hover"
              className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100
                        dark:from-amber-900/50 dark:to-orange-900/50
                        rounded-full flex items-center justify-center mb-6
                        border border-amber-200 dark:border-amber-700"
            >
              <span className="text-amber-700 dark:text-amber-300 text-2xl" role="img" aria-label="Art brush">
                🎨
              </span>
            </motion.div>
            <h3 className="text-xl font-medium mb-3 font-cinzelreg text-amber-900 dark:text-amber-200">
              Creative Minds
            </h3>
            <p className="text-stone-600 dark:text-stone-400 font-light font-cinzelreg leading-relaxed">
              Gather sparks of inspiration, visual references, and artistic discoveries. 
              Let your creativity flow from a wellspring of curated beauty.
            </p>
          </motion.article>

          {/* Seekers of Knowledge */}
          <motion.article
            variants={cardVariant}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-br from-stone-50 via-amber-50/90 to-orange-50/70 
                      dark:from-neutral-800 dark:via-amber-950/40 dark:to-orange-950/50
                      p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500
                      border border-stone-200/60 dark:border-amber-600/20 
                      hover:border-amber-300/70 dark:hover:border-amber-500/40
                      backdrop-blur-sm cursor-default"
            aria-label="For Seekers of Knowledge"
          >
            <motion.div 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
              variants={iconVariant}
              whileHover="hover"
              className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100
                        dark:from-amber-900/50 dark:to-orange-900/50
                        rounded-full flex items-center justify-center mb-6
                        border border-amber-200 dark:border-amber-700"
            >
              <span className="text-amber-700 dark:text-amber-300 text-2xl" role="img" aria-label="Scroll">
                📜
              </span>
            </motion.div>
            <h3 className="text-xl font-medium mb-3 font-cinzelreg text-amber-900 dark:text-amber-200">
              Seekers of Knowledge
            </h3>
            <p className="text-stone-600 dark:text-stone-400 font-light font-cinzelreg leading-relaxed">
              Preserve wisdom from texts, lectures, and contemplations. 
              Build a temple of understanding that grows with each insight.
            </p>
          </motion.article>

          {/* Digital Philosophers */}
          <motion.article
            variants={cardVariant}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-br from-stone-50 via-amber-50/90 to-orange-50/70 
                      dark:from-neutral-800 dark:via-amber-950/40 dark:to-orange-950/50
                      p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500
                      border border-stone-200/60 dark:border-amber-600/20 
                      hover:border-amber-300/70 dark:hover:border-amber-500/40
                      backdrop-blur-sm cursor-default"
            aria-label="For Digital Philosophers"
          >
            <motion.div 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
              variants={iconVariant}
              whileHover="hover"
              className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100
                        dark:from-amber-900/50 dark:to-orange-900/50
                        rounded-full flex items-center justify-center mb-6
                        border border-amber-200 dark:border-amber-700"
            >
              <span className="text-amber-700 dark:text-amber-300 text-2xl" role="img" aria-label="Thought bubble">
                💭
              </span>
            </motion.div>
            <h3 className="text-xl font-medium mb-3 font-cinzelreg text-amber-900 dark:text-amber-200">
              Digital Philosophers
            </h3>
            <p className="text-stone-600 dark:text-stone-400 font-light font-cinzelreg leading-relaxed">
              Organize thoughts, connect ideas, and explore concepts deeply. 
              Create a mindful system that reflects and amplifies your thinking.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveSection;