"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative flex min-h-fit flex-col items-center justify-center overflow-hidden bg-slate-50 px-4 py-24">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mb-16 text-center"
            >
                <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                    글쓰기 <span className="text-blue-600">1시간?</span> <br />
                    사장님에겐 사치가 아니라<br />
                    <span className="text-red-600">'가장 비싼 비용'</span>입니다.
                </h2>
            </motion.div>

            <div className="relative z-10 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1: The Labor */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-slate-100"
                >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                        🌙
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-slate-900">끝나지 않는 제2의 노동</h3>
                    <p className="flex-1 text-lg leading-relaxed text-slate-700">
                        가게 셔터를 내린 심야, 사장님의 노동은 다시 시작됩니다.<br /><br />
                        키워드 하나 찾으려 검색창을 수십 번 오가고, 경쟁사는 뭘 쓰나 기웃거리며,
                        <span className="bg-orange-50 font-semibold text-slate-900 px-1"> 흐릿한 사진을 살려보려 보정 앱과 씨름하느라</span>
                        또 귀한 한 시간을 허비합니다.
                    </p>
                </motion.div>

                {/* Card 2: The Fear */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-slate-100"
                >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-2xl">
                        📉
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-slate-900">조회수 '0'의 공포</h3>
                    <p className="flex-1 text-lg leading-relaxed text-slate-700">
                        하지만 진짜 공포는 육체적 피로가 아닙니다. 바로 그 노력이 <span className="text-red-600 font-bold">'헛수고'</span>가 될 때입니다.<br /><br />
                        지금 이 순간에도 소비자가 검색하는 인기 키워드는 실시간으로 바뀝니다.<br />
                        과녁을 벗어난 화살은 아무리 힘껏 당겨도 명중할 수 없습니다.
                    </p>
                </motion.div>

                {/* Card 3: The Insight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-slate-100 md:col-span-2 lg:col-span-1"
                >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                        ⚡️
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-slate-900">분석 없는 열정은 독</h3>
                    <p className="flex-1 text-lg leading-relaxed text-slate-700">
                        복잡한 로직 싸움과 변덕스러운 키워드 발굴, 이제 맨몸으로 부딪히지 마십시오.<br /><br />
                        도구(Tool)가 1초면 찾아낼 데이터를 <span className="bg-blue-50 font-semibold text-slate-900 px-1">사람이 밤새 찾는 것만큼 미련한 낭비는 없습니다.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
