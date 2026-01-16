"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    description: string;
    imageSrc: string;
    className?: string;
    delay?: number;
}

function FeatureCard({ title, description, imageSrc, className, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                className
            )}
        >
            <div className="flex flex-col p-8 z-10 relative">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">{description}</p>
            </div>

            <div className="relative mt-auto h-64 w-full overflow-hidden bg-slate-50">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105 p-6"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            {/* Decoration */}
            <div className="absolute inset-0 pointer-events-none border rounded-[2rem] border-black/5"></div>
        </motion.div>
    );
}

export default function Features() {
    return (
        <section className="bg-slate-50 px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900 md:text-5xl"
                    >
                        복잡한 과정은 <span className="text-blue-600">생략</span>하세요.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-xl text-slate-900 font-bold"
                    >
                        알아서 분석하고, 쓰고, 올립니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Card 1: Analysis */}
                    <FeatureCard
                        title="분석 (Analysis)"
                        description="내 가게의 강점과 리뷰를 AI가 정밀하게 스캔합니다."
                        imageSrc="/images/1.png"
                        delay={0.2}
                        className="min-h-[500px]"
                    />

                    {/* Card 2: Proposal */}
                    <FeatureCard
                        title="제안 (Proposal)"
                        description="최적의 원고를 카톡처럼 받아보세요."
                        imageSrc="/images/2.png"
                        delay={0.3}
                        className="min-h-[500px]"
                    />

                    {/* Card 3: Upload */}
                    <FeatureCard
                        title="자동 업로드 (Upload)"
                        description="클릭 한 번으로 블로그 발행 완료."
                        imageSrc="/images/3.png"
                        delay={0.4}
                        className="min-h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
}
