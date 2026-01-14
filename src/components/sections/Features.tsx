"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    delay?: number;
}

function FeatureCard({ title, description, icon, className, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-neutral-900/80",
                className
            )}
        >
            <div className="z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md group-hover:bg-white/20 transition-colors">
                    {icon}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
                <p className="text-neutral-400">{description}</p>
            </div>

            {/* Decorative Glow on Hover */}
            <div className="absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
            </div>
        </motion.div>
    );
}

export default function Features() {
    return (
        <section className="bg-black px-4 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white md:text-5xl"
                    >
                        복잡한 과정은 <span className="text-blue-500">생략</span>하세요.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-neutral-400"
                    >
                        알아서 분석하고, 쓰고, 올립니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px]">
                    {/* Card 1: Analysis - Large (2 cols) */}
                    <FeatureCard
                        title="분석 (Analysis)"
                        description="내 가게의 강점과 리뷰를 AI가 정밀하게 스캔합니다."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                        }
                        className="md:col-span-2 md:row-span-2"
                        delay={0.2}
                    />

                    {/* Card 2: Proposal - Small (1 col) */}
                    <FeatureCard
                        title="제안 (Proposal)"
                        description="최적의 원고를 카톡처럼 받아보세요."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        }
                        className="md:col-span-1 md:row-span-1"
                        delay={0.3}
                    />

                    {/* Card 3: Upload - Small (1 col) */}
                    <FeatureCard
                        title="자동 업로드 (Upload)"
                        description="클릭 한 번으로 블로그 발행 완료."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                        }
                        className="md:col-span-1 md:row-span-1"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
