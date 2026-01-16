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
        <section className="relative w-full overflow-hidden bg-slate-50 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl ring-1 ring-slate-900/5"
                >
                    {/* Background Gradient Animation */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,#fbbf24_0%,transparent_50%)] opacity-20" />
                    <div className="absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-100 blur-3xl" />
                    <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-orange-100 blur-3xl" />

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="mb-6 inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700 shadow-sm">
                            ☕️ 커피 한 잔 가격으로 시작하세요
                        </span>

                        <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                            하루 <span className="text-amber-500">1,800원</span>
                        </h2>

                        <div className="flex items-baseline gap-2 text-slate-400 mb-8">
                            <span className="text-lg md:text-xl font-medium">월 54,000원</span>
                            <span className="text-sm">(VAT 별도)</span>
                        </div>

                        <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
                            부담 없는 가격으로 24시간 일하는 <br className="md:hidden" />
                            <strong>AI 마케팅 직원</strong>을 채용하세요.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
