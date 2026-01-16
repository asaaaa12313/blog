"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
    const words = ["블로그,", "쓰지", "말고", "고르세요."];

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 bg-background">
            {/* Fluid Wave Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="absolute w-[200%] h-full opacity-30 blur-3xl">
                    <motion.div
                        animate={{
                            x: ["-25%", "0%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,#a5b4fc_0deg,transparent_60deg,#fbbf24_120deg,transparent_180deg,#86efac_240deg,transparent_300deg,#a5b4fc_360deg)] opacity-40"
                    />
                </div>

                {/* Main Wave (SVG Approximation) */}
                <svg className="absolute w-full h-[600px] opacity-90" viewBox="0 0 1440 600" preserveAspectRatio="none">
                    <motion.path
                        d="M0,300 C360,200 720,400 1440,300 L1440,600 L0,600 Z"
                        fill="url(#gradient)"
                        initial={{ d: "M0,300 C360,200 720,400 1440,300 L1440,600 L0,600 Z" }}
                        animate={{
                            d: [
                                "M0,300 C360,200 720,400 1440,300 L1440,600 L0,600 Z",
                                "M0,300 C360,400 720,200 1440,300 L1440,600 L0,600 Z",
                                "M0,300 C360,200 720,400 1440,300 L1440,600 L0,600 Z"
                            ]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1" /> {/* Light Purple */}
                            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.1" /> {/* Amber/Yellow */}
                            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" /> {/* Teal */}
                        </linearGradient>
                    </defs>
                </svg>
                {/* Second Wave for depth */}
                <svg className="absolute w-full h-[600px] opacity-70 blur-xl" viewBox="0 0 1440 600" preserveAspectRatio="none">
                    <motion.path
                        d="M0,320 C400,280 800,380 1440,320"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="40"
                        initial={{ pathLength: 1, pathOffset: 0 }}
                        animate={{
                            d: [
                                "M0,320 C400,280 800,380 1440,320",
                                "M0,320 C400,380 800,280 1440,320",
                                "M0,320 C400,280 800,380 1440,320",
                            ]
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#c084fc" />
                            <stop offset="50%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#34d399" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Text Reveal Animation */}
            <div className="z-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-center md:gap-x-5">
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2 + i * 0.15,
                            ease: [0.2, 0.65, 0.3, 0.9],
                        }}
                        className={cn(
                            "text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl",
                            i === words.length - 1 ? "text-accent" : "text-foreground"
                        )}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
        </section>
    );
}
