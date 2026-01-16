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
                    <span className="text-neutral-800">사장님에겐 사치가 아니라</span><br />
                    <span className="text-red-500">'가장 비싼 비용'</span>입니다.
                </h2>
            </motion.div>

            <div className="relative h-32 w-full max-w-2xl overflow-visible">
                <svg
                    viewBox="0 0 300 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full overflow-visible"
                >
                    {/* Background guide line */}
                    <path d={path2} stroke="#ddd" strokeWidth="1" strokeDasharray="5 5" />

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
                className="mt-12 max-w-3xl text-center space-y-8"
            >
                <p className="text-lg leading-relaxed text-neutral-800 md:text-xl">
                    가게 셔터를 내리고 파김치가 된 몸으로 모니터 앞에 앉는 그 시간.<br className="hidden md:block" />
                    <strong>깜빡이는 커서는 마치 빚쟁이처럼 글감을 독촉하고</strong>,<br className="hidden md:block" />
                    흐릿한 사진을 보정하며 새벽 2시를 넘기는 그 순간.<br />
                    그것은 마케팅이 아니라 <span className="font-bold text-red-600">끝나지 않는 제2의 육체노동</span>입니다.
                </p>

                <p className="text-lg leading-relaxed text-neutral-800 md:text-xl">
                    냉정하게 계산해 보십시오.<br />
                    가게에서 가장 몸값 비싼 사장님이,<br className="hidden md:block" />
                    <strong>정작 최저시급도 안 나오는 일에 매달려</strong><br className="hidden md:block" />
                    내일 쏟아야 할 체력을 가불해 쓰고 계신 겁니다.
                </p>

                <p className="text-lg leading-relaxed text-neutral-800 md:text-xl">
                    더 뼈아픈 건,<br />
                    그렇게 남은 에너지 찌꺼기를 짜내어 쓴 글에는<br className="hidden md:block" />
                    <strong>사장님의 '지친 기색'이 고스란히 묻어난다는 사실</strong>입니다.<br />
                    고객은 귀신같이 그 피로감을 감지합니다.<br />
                    죽어라 노력하고도 아마추어라는 인상을 남기는 비극이 여기서 시작됩니다.
                </p>

                <p className="text-xl font-bold leading-relaxed text-blue-700 md:text-2xl bg-blue-50 py-4 px-6 rounded-xl inline-block">
                    이제 퇴근 후의 죄책감은 내려놓으십시오.<br />
                    숙제 안 한 학생처럼 마음 졸이는 대신,<br />
                    사장님은 내일의 장사와 온전한 휴식에만 집중하십시오.<br />
                    그게 남는 장사입니다.
                </p>
            </motion.div>
        </section>
    );
}
