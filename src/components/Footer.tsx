"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 80,
      duration: 0.8,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const socialIconVariant = {
  hidden: { scale: 0.8, opacity: 0, rotate: -15 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    }
  },
  hover: {
    scale: 1.15,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const dividerVariant = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "6rem",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const Footer: React.FC = () => {
    const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-br from-stone-100 via-amber-50/70 to-orange-100/50 
                      dark:from-neutral-900 dark:via-amber-950/30 dark:to-orange-950/40 
                      pt-20 pb-8 px-4 font-cinzelreg text-stone-800 dark:text-stone-200 overflow-hidden relative">
      
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-15 dark:opacity-8"
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139,69,19,0.12) 1px, transparent 0)`,
             backgroundSize: '24px 24px'
           }}
      />


      <div className="max-w-6xl mx-auto relative z-10">
        <div className="border-t border-amber-300/30 dark:border-amber-600/20 pt-20 mt-20">
          
          {/* Hero CTA Section */}
          <motion.div
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-light mb-6 font-cinzelreg
                        text-transparent bg-clip-text bg-gradient-to-br 
                        from-amber-800 via-orange-700 to-red-800
                        dark:from-amber-200 dark:via-orange-300 dark:to-red-400
                        leading-tight"
            >
              Preserve All Wisdom, <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r 
                          from-red-700 via-orange-600 to-amber-700
                          dark:from-red-300 dark:via-orange-300 dark:to-amber-300
                          inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                In One Sacred Space
              </motion.span>
            </motion.h2>

            <motion.div 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
              variants={dividerVariant}
              className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent 
                        dark:via-amber-400 mx-auto mb-8"
            />

            <motion.p
              variants={fadeInUp}
              className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-10 
                        font-light text-lg leading-relaxed"
            >
              Cultivate your thoughts, curate your discoveries, and create connections 
              with a mindful system that grows with your journey.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="inline-block group"
            >
              <div className="relative overflow-hidden rounded-2xl p-px 
                            bg-gradient-to-r from-amber-600 via-orange-600 to-red-600
                            dark:from-amber-500 dark:via-orange-500 dark:to-red-500">
                <motion.button
                  className="relative rounded-[15px] px-10 py-4 text-lg font-medium
                           bg-stone-50 hover:bg-white 
                           dark:bg-neutral-800 dark:hover:bg-neutral-700
                           text-amber-800 hover:text-orange-800
                           dark:text-amber-200 dark:hover:text-orange-200
                           transition-all duration-500 ease-out
                           group-hover:shadow-xl border-0 tracking-wide cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }} onClick={() => navigate('/signup')}
                >
                  Begin Your Practice
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Navigation */}
          <motion.div
            className="grid md:grid-cols-5 gap-8 py-12 border-t border-amber-300/30 dark:border-amber-600/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
          >
            <motion.div className="md:col-span-2" variants={fadeInUp}>
              <div className="flex items-center text-amber-900 dark:text-amber-200 font-medium text-xl mb-6 font-cinzelreg">
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 

                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.2 
                  }}
                  aria-label="Kensho symbol"
                  className="text-amber-700 dark:text-amber-300 mr-3 text-2xl"
                >
                <img src="/logo.webp" className="h-22 w-22" />
                </motion.span>
              </div>
              <p className="text-stone-600 dark:text-stone-400 mb-6 font-light 
                          leading-relaxed max-w-sm">
                Cultivate wisdom through mindful organization. Connect ideas, 
                preserve insights, and discover clarity in the digital realm.
              </p>
            </motion.div>
                  
            <motion.nav
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
            aria-label="Wisdom Navigation" variants={fadeIn}>
              <h4 className="font-medium mb-6 font-cinzelreg text-amber-900 dark:text-amber-200 tracking-wide">
                Wisdom
              </h4>
              <ul className="space-y-3 text-stone-600 dark:text-stone-400 font-light">
                {["Insights", "Connections", "Reflection"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.6 }}
                  >
                    <a href="#" className="hover:text-amber-700 dark:hover:text-amber-300 
                                        transition-colors duration-300 block">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.nav
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
            aria-label="Journey Navigation" variants={fadeIn}>
              <h4 className="font-medium mb-6 font-cinzelreg text-amber-900 dark:text-amber-200 tracking-wide">
                Journey
              </h4>
              <ul className="space-y-3 text-stone-600 dark:text-stone-400 font-light">
                {["Philosophy", "Community"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.6 }}
                  >
                    <a href="#" className="hover:text-amber-700 dark:hover:text-amber-300 
                                        transition-colors duration-300 block">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.nav
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
            aria-label="Guidance Navigation" variants={fadeIn}>
              <h4 className="font-medium mb-6 font-cinzelreg text-amber-900 dark:text-amber-200 tracking-wide">
                Guidance
              </h4>
              <ul className="space-y-3 text-stone-600 dark:text-stone-400 font-light">
                {["Teachings", "Support"].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.6 }}
                  >
                    <a href="#" className="hover:text-amber-700 dark:hover:text-amber-300 
                                        transition-colors duration-300 block">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-amber-300/30 dark:border-amber-600/20 pt-8 mt-8 
                      text-sm text-stone-600 dark:text-stone-400 
                      flex flex-col md:flex-row justify-between font-cinzelreg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} KENSHO. All wisdom preserved.
            </div>

            {/* Social + Credits */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-8">
              <div className="flex space-x-5">
                <motion.a
                  href="https://github.com/Sigmabond01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 
                           transition-colors duration-300"
                           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
                  variants={socialIconVariant}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linktr.ee/Sigmabond01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 
                           transition-colors duration-300"
                           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
                  variants={socialIconVariant}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/Sigmabond01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 
                           transition-colors duration-300"
                           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
                  variants={socialIconVariant}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>

              <motion.div 
                className="md:ml-8 text-stone-500 dark:text-stone-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Crafted with
                <motion.span 
                  className="mx-2 text-red-500 dark:text-red-400"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ❤️
                </motion.span>
                by SigmaBond
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;