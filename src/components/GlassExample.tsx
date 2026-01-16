"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlassExample() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className="flex min-h-[400px] w-full items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
            <motion.div
                className="relative flex flex-col items-center gap-6 rounded-3xl border border-white/20 bg-white/10 p-12 shadow-2xl backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
            >
                <div className="text-center text-white">
                    <h2 className="mb-2 text-3xl font-bold drop-shadow-md">
                        Glassmorphism
                    </h2>
                    <p className="text-white/80">
                        Framer Motion + Tailwind CSS
                    </p>
                </div>

                {/* Interactive Toggle Switch */}
                <div
                    className={`flex h-10 w-20 cursor-pointer rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-white/40" : "bg-black/20"
                        }`}
                    onClick={toggleSwitch}
                >
                    <motion.div
                        className="h-8 w-8 rounded-full bg-white shadow-md"
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30,
                        }}
                        style={{
                            justifySelf: isOn ? "flex-end" : "flex-start" // Simple way to handle layout transition alignment if flex wasn't handling it, but layout prop handles position changes automatically if justify-content changes.
                        }}
                    />
                </div>

                {/* Helper text */}
                <motion.p
                    key={isOn ? "on" : "off"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-white/90"
                >
                    Status: {isOn ? "Active" : "Inactive"}
                </motion.p>
            </motion.div>
        </div>
    );
}
