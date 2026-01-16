"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="flex min-h-fit flex-col items-center justify-center bg-background px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 text-center"
            >
                <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                    글쓰기 <span className="text-blue-600">1시간?</span> <br />
                    <span className="text-black">사장님에겐 사치가 아니라</span><br />
                    <span className="text-red-600">'가장 비싼 비용'</span>입니다.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl text-center space-y-10"
            >
                <div className="space-y-8">
                    <p className="text-xl leading-relaxed text-slate-900 font-medium">
                        가게 셔터를 내리고 파김치가 된 몸으로 모니터 앞에 앉는 그 시간.<br className="hidden md:block" />
                        <span className="bg-yellow-100 px-1">깜빡이는 커서는 마치 빚쟁이처럼 글감을 독촉하고</span>,<br className="hidden md:block" />
                        흐릿한 사진을 보정하며 새벽 2시를 넘기는 그 순간.<br />
                        그것은 마케팅이 아니라 <strong className="text-red-600 font-bold">끝나지 않는 제2의 육체노동</strong>입니다.
                    </p>

                    <p className="text-xl leading-relaxed text-slate-900 font-medium">
                        냉정하게 계산해 보십시오.<br />
                        가게에서 가장 몸값 비싼 사장님이,<br className="hidden md:block" />
                        <strong>정작 최저시급도 안 나오는 일에 매달려</strong><br className="hidden md:block" />
                        내일 쏟아야 할 체력을 가불해 쓰고 계신 겁니다.
                    </p>

                    <p className="text-xl leading-relaxed text-slate-900 font-medium">
                        더 뼈아픈 건,<br />
                        그렇게 남은 에너지 찌꺼기를 짜내어 쓴 글에는<br className="hidden md:block" />
                        <strong>사장님의 '지친 기색'이 고스란히 묻어난다는 사실</strong>입니다.<br />
                        고객은 귀신같이 그 피로감을 감지합니다.<br />
                        죽어라 노력하고도 아마추어라는 인상을 남기는 비극이 여기서 시작됩니다.
                    </p>
                </div>

                <div className="pt-8">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
                        <p className="text-2xl font-bold leading-relaxed text-slate-900">
                            이제 퇴근 후의 죄책감은 내려놓으십시오.<br />
                            <span className="text-slate-600 font-medium text-lg md:text-xl mt-4 block">
                                숙제 안 한 학생처럼 마음 졸이는 대신,<br />
                                사장님은 내일의 장사와 온전한 휴식에만 집중하십시오.
                            </span>
                            <span className="text-blue-600 block mt-4">그게 남는 장사입니다.</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
