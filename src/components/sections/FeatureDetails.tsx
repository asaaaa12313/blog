"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const DETAILS = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8h-6v8" /></svg>
        ),
        title: "내 매장 자동 등록 & 학습",
        desc: "네이버 플레이스 정보만 입력하세요. AI가 메뉴, 리뷰, 분위기까지 스스로 학습해 우리 매장보다 더 우리 매장을 잘 아는 전문가가 됩니다.",
        gradient: "from-blue-500/10 to-transparent"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
        ),
        title: "한 달치 마케팅, 1분 완성",
        desc: "매일 고민하던 콘텐츠 소재, 클릭 한 번으로 30일치를 채워보세요.",
        highlight: "1분 완성",
        gradient: "from-purple-500/10 to-transparent"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
        ),
        title: "이미지 생성부터 배포까지",
        desc: "촬영할 필요 없습니다. AI가 고퀄리티 이미지를 생성하고 인스타그램, 블로그에 자동으로 업로드합니다.",
        gradient: "from-pink-500/10 to-transparent"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
        ),
        title: "마케팅 인사이트 & 전략",
        desc: "\"20대 여성이 반응이 좋네요.\" 단순 통계를 넘어, 다음 달 공략 전략을 제안합니다.",
        gradient: "from-amber-500/10 to-transparent"
    },
];

export default function FeatureDetails() {
    return (
        <section className="bg-slate-50 px-4 pb-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    {DETAILS.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Gradient Background Effect on Hover */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                                item.gradient
                            )} />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex rounded-2xl bg-slate-50 p-3 ring-1 ring-black/5 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-slate-900 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
