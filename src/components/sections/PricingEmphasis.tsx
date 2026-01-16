"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

function NumberTicker({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("ko-KR").format(
                    Math.floor(latest)
                );
            }
        });
    }, [springValue]);

    return <span ref={ref} />;
}

export default function PricingEmphasis() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 md:p-14 shadow-lg ring-1 ring-slate-900/5"
                >
                    {/* Background Gradient Animation */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,#fbbf24_0%,transparent_50%)] opacity-20" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start">
                            <span className="mb-4 inline-flex rounded-full bg-amber-100 px-5 py-2 text-base font-bold text-amber-700 shadow-sm">
                                ☕️ 커피 한 잔 가격으로 시작하세요
                            </span>
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                                하루 <span className="text-amber-500">1,800원</span>
                            </h2>
                        </div>

                        <div className="hidden md:block h-24 w-[1px] bg-slate-200" />

                        <div className="flex flex-col items-center md:items-end">
                            <div className="flex items-baseline gap-2 text-slate-500 mb-2">
                                <span className="text-2xl font-bold text-slate-700">월 54,000원</span>
                                <span className="text-lg font-medium">/ VAT 별도</span>
                            </div>
                            <p className="text-xl font-medium text-slate-600 leading-relaxed">
                                24시간 일하는 <strong>AI 마케팅 직원</strong> 채용 효과
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
