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
    {
        name: "강OO 원장님",
        message: "필라테스 센터 홍보가 고민이었는데, 타겟 고객이 딱 원하는 내용을 써주셔서 문의가 늘었어요.",
        time: "오전 10:20",
        avatarColor: "bg-pink-200"
    },
    {
        name: "윤OO 대표님",
        message: "직원 두고 하기엔 부담스러웠는데, 이 가격에 이런 퀄리티라니... 평생 쓰겠습니다.",
        time: "오후 1:55",
        avatarColor: "bg-indigo-200"
    },
    {
        name: "한OO 사장님",
        message: "카페 신메뉴 홍보글 반응이 바로 오네요? 신기합니다 ㅎㅎ 앞으로도 잘 부탁드려요.",
        time: "오후 5:30",
        avatarColor: "bg-orange-200"
    },
    {
        name: "오OO 님",
        message: "펜션 예약율이 떨어져서 걱정이었는데, 감성적인 글 덕분에 주말 예약 꽉 찼습니다 ㅠㅠ",
        time: "오후 9:12",
        avatarColor: "bg-teal-200"
    },
    {
        name: "신OO 대표님",
        message: "매번 키워드 고민하느라 머리 아팠는데 알아서 잡아주니 너무 편해요. 사업에만 집중할 수 있네요.",
        time: "오전 11:45",
        avatarColor: "bg-cyan-200"
    },
    {
        name: "장OO 점주님",
        message: "배달 앱 리뷰 관리보다 블로그 유입이 훨씬 구매 전환이 좋네요. 진작 할 걸 그랬습니다.",
        time: "오후 7:20",
        avatarColor: "bg-lime-200"
    },
    {
        name: "서OO 원장님",
        message: "학원생 모집 기간이라 바빴는데, 알아서 홍보해주니 상담 전화 받느라 바쁘네요 ㅎㅎ 행복한 비명!",
        time: "오후 3:40",
        avatarColor: "bg-fuchsia-200"
    }
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
