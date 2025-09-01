"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        d: `M-${350 - i * 4 * position} -${170 + i * 8}Q-${
            300 - i * 4 * position
        } ${180 - i * 5} ${120 - i * 4 * position} ${280 - i * 7}T${
            580 - i * 4 * position
        } ${400 - i * 6}Q${650 - i * 4 * position} ${480 - i * 5} ${
            680 - i * 4 * position
        } ${580 - i * 8}`,
        color: `rgba(139,69,19,${0.08 + i * 0.025})`, // Warm brown tones
        width: 0.3 + i * 0.025,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-amber-900/20 dark:text-amber-200/15"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Flowing Knowledge Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.025}
                        strokeLinecap="round"
                        initial={{ pathLength: 0.2, opacity: 0.4 }}
                        animate={{
                            pathLength: [0.2, 0.9, 0.2],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: path.id * 0.1,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function KenshoHero() {
    const kenshoTitle = "KENSHO"; // Kensho in Japanese characters
    const subtitle = "見性";

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden 
                        bg-gradient-to-br from-stone-50 via-amber-50/50 to-orange-50/30 
                        dark:from-neutral-950 dark:via-amber-950/10 dark:to-orange-950/20">
            
            {/* Background elements */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-0.8} />
            </div>

            {/* Subtle paper texture overlay */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10"
                 style={{
                     backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139,69,19,0.15) 1px, transparent 0)`,
                     backgroundSize: '20px 20px'
                 }}
            />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Japanese characters */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1.2 }}
                        className="mb-6"
                    >
                        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-light tracking-
                                     text-transparent bg-clip-text bg-gradient-to-br 
                                     from-amber-800 via-orange-700 to-red-800
                                     dark:from-amber-200 dark:via-orange-300 dark:to-red-400
                                     drop-shadow-sm">
                            {kenshoTitle}
                        </h1>
                    </motion.div>

                    {/* English subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mb-12"
                    >
                        <p className="text-2xl md:text-3xl font-light tracking-tight 
                                    text-stone-700 dark:text-stone-300 
                                    font-serif">
                            {subtitle}
                        </p>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent 
                                      dark:via-amber-400 mx-auto mt-6"></div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-lg md:text-xl text-stone-600 dark:text-stone-400 
                                 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Unlock Clarity. Capture Everything. Forget Nothing. 
                        <br className="hidden sm:block" />
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="inline-block group"
                    >
                        <div className="relative overflow-hidden rounded-2xl p-px 
                                      bg-gradient-to-r from-amber-600 via-orange-600 to-red-600
                                      dark:from-amber-500 dark:via-orange-500 dark:to-red-500">
                            <button
                                className="relative rounded-[15px] px-12 py-4 text-lg font-medium
                                         bg-white hover:bg-stone-50 
                                         dark:bg-neutral-900 dark:hover:bg-neutral-800
                                         text-amber-800 hover:text-orange-800
                                         dark:text-amber-200 dark:hover:text-orange-200
                                         transition-all duration-500 ease-out
                                         group-hover:shadow-xl group-hover:-translate-y-1
                                         border-0 tracking-wide cursor-pointer"
                            >
                                <span className="flex items-center gap-3">
                                    Begin Your Journey
                                    <motion.span
                                        className="text-xl"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                    >
                                    </motion.span>
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Zen circle */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ delay: 2, duration: 1.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                    >
                        <div className="w-96 h-96 md:w-[500px] md:h-[500px] 
                                      border-2 border-amber-600/20 dark:border-amber-400/20 
                                      rounded-full"
                             style={{
                                 background: `conic-gradient(from 0deg, transparent 0deg, rgba(245,158,11,0.1) 270deg, transparent 360deg)`
                             }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}