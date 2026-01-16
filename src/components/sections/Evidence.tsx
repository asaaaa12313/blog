"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const REVIEWS = [
    {
        name: "김OO 사장님",
        message: "블로그 관리하느라 매일 1시간씩 썼는데, 이제 5분도 안 걸려요. 퀄리티도 진짜 대박이네요 ㅋㅋㅋ",
        time: "오후 2:30",
        avatarColor: "bg-yellow-200"
    },
    {
        name: "이OO 대표님",
        message: "다른 대행사 쓰다가 넘어왔는데 훨씬 낫네요. 키워드 분석해주시는 게 진짜 소름...",
        time: "오후 3:15",
        avatarColor: "bg-green-200"
    },
    {
        name: "박OO 점주님",
        message: "오픈 초기라 막막했는데 덕분에 자리 잡았습니다. 주변 사장님들한테도 추천 중이에요!",
        time: "오후 4:42",
        avatarColor: "bg-blue-200"
    },
    {
        name: "최OO 님",
        message: "글 솜씨가 없어서 걱정했는데 AI가 저보다 글을 잘 쓰네요.. ^^;; 감사합니다.",
        time: "오후 6:10",
        avatarColor: "bg-purple-200"
    },
    {
        name: "정OO 사장님",
        message: "비용 대비 효과 최고입니다. 마케팅 비용 줄이고 매출은 늘었으니 남는 장사 맞네요!",
        time: "오후 8:05",
        avatarColor: "bg-red-200"
    },
];

export default function Evidence() {
    return (
        <section className="bg-slate-50 py-24 overflow-hidden">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">실제 사장님들의 카톡 대화</h2>
                <p className="text-slate-600 text-lg">이미 많은 사장님들이 효과를 경험하고 계십니다.</p>
            </div>

            {/* KakaoTalk Style Container */}
            <div className="w-full bg-[#b2c7da] py-12 relative overflow-hidden">
                <div className="flex w-full overflow-hidden">
                    {/* Inner - Double the content for smooth loop */}
                    <div className="flex min-w-full shrink-0 animate-marquee gap-8 px-4 items-start">
                        {REVIEWS.map((review, i) => (
                            <KakaoMessage key={`original-${i}`} {...review} />
                        ))}
                    </div>
                    <div className="flex min-w-full shrink-0 animate-marquee gap-8 px-4 items-start" aria-hidden="true">
                        {REVIEWS.map((review, i) => (
                            <KakaoMessage key={`duplicate-${i}`} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function KakaoMessage({ name, message, time, avatarColor }: { name: string; message: string; time: string; avatarColor: string }) {
    return (
        <div className="flex gap-3 w-[320px] shrink-0">
            {/* Avatar */}
            <div className={cn("h-10 w-10 shrink-0 rounded-[14px] flex items-center justify-center text-xs font-bold text-slate-600 border border-black/5 mt-1", avatarColor)}>
                {name[0]}
            </div>

            <div className="flex flex-col gap-1 items-start max-w-[calc(100%-52px)]">
                <span className="text-xs text-slate-600 ml-1">{name}</span>
                <div className="flex items-end gap-1.5">
                    <div className="relative bg-white px-4 py-2.5 rounded-[12px] rounded-tl-none shadow-sm text-[15px] leading-relaxed text-slate-900 break-words">
                        {message}
                    </div>
                    <span className="text-[10px] text-slate-500 whitespace-nowrap mb-1">
                        {time}
                    </span>
                </div>
            </div>
        </div>
    );
}
