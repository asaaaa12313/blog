"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CASES = [
    {
        image: "/images/sample/스크린샷 2026-01-19 오전 9.56.10.png",
        title: "브랜드 블로그 최적화",
        desc: "3개월 만에 일 방문자 1,000명 달성",
    },
    {
        image: "/images/sample/스크린샷 2026-01-19 오전 9.57.41.png",
        title: "전문직 마케팅 성공 사례",
        desc: "신뢰도를 높이는 프리미엄 콘텐츠 기획",
    },
    {
        image: "/images/sample/스크린샷 2026-01-19 오전 10.00.37.png",
        title: "플레이스 상위 노출",
        desc: "지역 키워드 장악으로 매출 200% 상승",
    },
    {
        image: "/images/sample/스크린샷 2026-01-19 오전 10.11.04.png",
        title: "대형 학원 원생 모집",
        desc: "학부모 타겟팅 글쓰기로 상담 문의 폭주",
    },
    {
        image: "/images/sample/스크린샷 2026-01-19 오전 10.11.31.png",
        title: "쇼핑몰 매출 견인",
        desc: "구매 전환율을 높이는 상세페이지급 포스팅",
    },
];

export default function ProgressCases() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400 + 32; // card width + gap
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            진행사례
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            성공적인 블로그 마케팅 사례를 확인하세요.
                            <br className="hidden md:block" />
                            압도적인 퀄리티로 차이를 증명합니다.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center group"
                        aria-label="Previous"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:-translate-x-0.5 transition-transform"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center group"
                        aria-label="Next"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-0.5 transition-transform"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    {/* Scroll Area */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 md:mx-0 snap-x snap-mandatory hide-scrollbar"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {CASES.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="snap-center shrink-0 w-[85vw] md:w-[450px]"
                            >
                                <div className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="absolute inset-0 bg-slate-100/50">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                            sizes="(max-width: 768px) 85vw, 450px"
                                        />
                                    </div>

                                    {/* Glass Overlay on Hover/Bottom */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg transform transition-all duration-500 group-hover:bg-white/20">
                                            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/90 text-sm font-light leading-relaxed drop-shadow-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}
