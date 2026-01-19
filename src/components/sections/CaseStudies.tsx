"use client";

import Image from "next/image";

const CASES = [
    {
        src: "/images/cases/stats-1.jpg",
        alt: "블로그 방문자 통계 그래프 1",
        desc: "2025년 12월 월간 조회수 296건 달성"
    },
    {
        src: "/images/cases/stats-2.png",
        alt: "블로그 방문자 통계 그래프 2",
        desc: "지속적인 우상향 성장 그래프"
    },
    {
        src: "/images/cases/stats-3.png",
        alt: "블로그 방문자 통계 그래프 3",
        desc: "10월 대비 12월 조회수 급상승"
    },
    {
        src: "/images/cases/stats-4.png",
        alt: "블로그 방문자 통계 그래프 4",
        desc: "월간 조회수 254건 기록"
    }
];

export default function CaseStudies() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-[1400px] px-4 md:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">진행 후 블로그 통계</h2>
                    <p className="text-slate-600 text-lg">
                        실제 사장님들의 블로그가 이렇게 성장하고 있습니다.<br className="md:hidden" />
                        <span className="hidden md:inline"> </span>
                        데이터로 증명하는 확실한 성과를 확인해보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CASES.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 group">
                            <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-slate-50 aspect-[4/3] md:aspect-auto md:h-[400px]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <p className="text-center text-slate-700 font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                        더 많은 성공 사례가 계속 업데이트 됩니다
                    </div>
                </div>
            </div>
        </section>
    );
}
