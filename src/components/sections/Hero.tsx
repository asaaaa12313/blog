"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
    const words = ["블로그,", "쓰지", "말고", "고르세요."];

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]"
                />
            </div>

            {/* Text Reveal Animation */}
            <div className="z-10 mb-12 flex flex-wrap justify-center gap-x-3 gap-y-2 text-center md:gap-x-5">
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
                        className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>

            {/* iPhone Mockup Placeholder */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="relative z-10 mx-auto aspect-[9/19] w-[280px] rounded-[3rem] border-8 border-neutral-800 bg-neutral-900 shadow-2xl md:w-[320px]"
            >
                <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] bg-neutral-950">
                    <div className="flex h-full items-center justify-center text-neutral-700">
                        iPhone Mockup
                    </div>
                </div>
                {/* Notch */}
                <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black" />
            </motion.div>
        </section>
    );
}
