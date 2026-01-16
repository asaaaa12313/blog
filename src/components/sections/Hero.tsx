"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function AuroraBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-900">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 opacity-50"
            >
                <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500 mix-blend-multiply filter blur-[128px] animate-blob" />
                <div className="absolute top-0 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500 mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
                <div className="absolute -bottom-40 left-20 h-[500px] w-[500px] rounded-full bg-blue-500 mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
            </motion.div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-50" />
        </div>
    );
}

function FloatingOrb({ className, delay }: { className: string; delay?: number }) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay || 0,
            }}
            className={cn("absolute rounded-full blur-[80px] opacity-40", className)}
        />
    );
}

export default function Hero() {
    const words = ["블로그,", "쓰지", "말고", "고르세요."];

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-20">
            {/* Enhanced Aurora Background */}
            <div className="absolute inset-0 w-full h-full bg-slate-950 overflow-hidden">
                <FloatingOrb className="bg-blue-600 w-96 h-96 top-[-100px] left-[-100px]" />
                <FloatingOrb className="bg-purple-600 w-[600px] h-[600px] top-[20%] right-[-200px]" delay={2} />
                <FloatingOrb className="bg-indigo-600 w-[500px] h-[500px] bottom-[-100px] left-[20%]" delay={4} />
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[100px]" />
            </div>

            {/* Glassmorphic Container Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="z-10 relative flex flex-col items-center justify-center text-center p-12 md:p-24 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden max-w-5xl w-full mx-4"
            >
                {/* Shine Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />

                {/* Text Content */}
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-6">
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
                                "text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl drop-shadow-xl",
                                i === words.length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300" : "text-white"
                            )}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-8 text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed"
                >
                    복잡한 마케팅은 AI에게 맡기고 사장님은 본업에만 집중하세요.
                    <br /><span className="text-blue-200">단 1분이면 한 달치 블로그 원고가 완성됩니다.</span>
                </motion.p>

            </motion.div>
        </section>
    );
}
