"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // SVG Path Definitions
    // Complex tangled path representing confusion/problem
    const tangledPath = "M10,50 Q30,10 50,50 T90,50 Q110,90 130,50 T170,50 T210,50";
    // Straight path representing solution/clarity - needs to match length somewhat or use simple straight line
    // Ideally we would interpolate between paths, but framer-motion pathLength is easier for "unraveling" effect.
    // Let's us draw the tangled path then transition to straight? 
    // PRD says: "Unraveling tangle to straight line". 
    // Visual approach: Draw a tangled line that straightens. transforming 'd' attribute is complex if point counts differ.
    // Alternative: Have a tangled line that "draws" itself (pathLength) then morphs?
    // Let's try morphing path d attribute.

    // Actually, a simpler and more robust visual for "unravelling" is to have the tangled line
    // transform into a straight line using path morphing.
    // We need two paths with same number of points for smooth interpolation.

    // Tangled: A sine wave with changing amplitude/frequency
    // Straight: A flat line

    const path1 = "M0,50 C20,20 40,80 60,50 C80,20 100,80 120,50 C140,20 160,80 180,50 C200,20 220,80 240,50 C260,20 280,80 300,50";
    const path2 = "M0,50 C20,50 40,50 60,50 C80,50 100,50 120,50 C140,50 160,50 180,50 C200,50 220,50 240,50 C260,50 280,50 300,50";

    const pathD = useTransform(scrollYProgress, [0.2, 0.8], [path1, path2]);
    const lineColor = useTransform(scrollYProgress, [0.2, 0.8], ["#333", "#3b82f6"]); // Dark gray to Blue
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-4 py-20">
            <motion.div
                style={{ opacity }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                    글쓰기 <span className="text-accent">1시간?</span> <br />
                    <span className="text-neutral-400">사장님에겐 사치입니다.</span>
                </h2>
                <p className="mt-4 text-lg text-neutral-500 md:text-xl">
                    원고 쓰고 사진 찍고, <br className="md:hidden" />
                    고르고 꾸미기까지.
                </p>
            </motion.div>

            <div className="relative h-32 w-full max-w-2xl overflow-visible">
                <svg
                    viewBox="0 0 300 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full overflow-visible"
                >
                    {/* Background guide line */}
                    <path d={path2} stroke="#333" strokeWidth="1" strokeDasharray="5 5" className="opacity-20" />

                    {/* Animating Line */}
                    <motion.path
                        d={pathD}
                        stroke={lineColor}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]) }}
                className="mt-12 max-w-2xl text-center"
            >
                <p className="mb-4 text-lg font-medium text-neutral-300 md:text-xl">
                    "열심히 했는데 조회수가 왜 이럴까?"
                </p>
                <p className="text-base leading-relaxed text-neutral-500 md:text-lg">
                    혼자 운영할 때는 변동되는 인기 키워드나<br className="hidden md:block" />
                    다른 업체가 밀고 있는 키워드를 놓치기 쉽습니다.<br />
                    <span className="text-red-500">결국 아무리 노력해도 조회수는 0이 됩니다.</span>
                </p>
            </motion.div>
        </section>
    );
}
