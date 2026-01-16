"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
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

export default function Pricing() {
    return (
        <section className="flex min-h-[60vh] w-full items-center justify-center bg-background px-4 py-24">
            <div className="relative w-full max-w-sm rounded-[2rem] p-[1px] overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 -z-10 h-full w-full animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,_#fbbf24_120deg,transparent_180deg,_#d97706_300deg,transparent_360deg)] opacity-70" />

                <div className="relative flex flex-col items-center justify-center rounded-[2rem] bg-white/90 px-6 py-12 text-center backdrop-blur-xl">
                    <h3 className="mb-2 text-xl font-medium text-neutral-500">
                        Premium Plan
                    </h3>

                    <div className="mb-8 flex items-baseline gap-1 text-foreground">
                        <span className="text-5xl font-bold tracking-tight">
                            ₩<NumberTicker value={54000} />
                        </span>
                        <span className="text-neutral-500">/월</span>
                    </div>

                    <ul className="mb-8 space-y-3 text-left">
                        {[
                            "매일 자동 블로그 발행",
                            "AI 기반 트렌드 분석",
                            "카카오톡 알림 서비스",
                            "무제한 키워드 추적",
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center text-neutral-700">
                                <svg
                                    className="mr-2 h-4 w-4 text-accent"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-accent px-6 font-medium text-black transition-all hover:bg-yellow-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        <span className="relative z-10 flex items-center gap-2">
                            지금 시작하기
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
