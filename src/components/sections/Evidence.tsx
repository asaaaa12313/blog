"use client";

import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const REVIEWS = [
    {
        name: "김OO 사장님",
        message: "블로그 관리 매일 1시간씩 썼는데, 이제 5분도 안 걸려요. 퀄리티도 대박이네요 ㅋㅋㅋ",
        reply: "다행입니다 사장님! ㅎㅎ 저녁 장사도 기대해보시죠!",
        highlight: "\"매일 1시간 쓰던 거 5분 만에 끝냈습니다.\"",
        time: "오후 2:30",
    },
    {
        name: "이OO 대표님",
        message: "다른 대행사 쓰다가 넘어왔는데 훨씬 낫네요. 키워드 분석해주시는 게 진짜 소름...",
        reply: "저희 AI가 분석 하나는 기가 막히죠! 매출 상승 가봅시다.",
        highlight: "\"키워드 분석이 소름 돋게 정확해요.\"",
        time: "오후 3:15",
    },
    {
        name: "박OO 점주님",
        message: "오픈 초기라 막막했는데 덕분에 자리 잡았습니다. 주변에도 추천 중이에요!",
        reply: "추천 감사합니다! 2호점 내실 때도 도와드릴게요 :)",
        highlight: "\"오픈 초기 막막함, 덕분에 해결했습니다.\"",
        time: "오후 4:42",
    },
    {
        name: "최OO 님",
        message: "글 솜씨가 없어서 걱정했는데 AI가 저보다 글을 잘 쓰네요.. ^^;; 감사합니다.",
        reply: "AI가 사장님 마음을 잘 읽었나 봅니다 ㅎㅎ 화이팅입니다!",
        highlight: "\"AI가 저보다 글을 더 잘 쓰네요.\"",
        time: "오후 6:10",
    },
    {
        name: "정OO 사장님",
        message: "비용 대비 효과 최고입니다. 마케팅 비용 줄이고 매출은 늘었으니 남는 장사 맞네요!",
        reply: "그게 바로 저희가 원하던 바입니다! 더 번창하세요~",
        highlight: "\"마케팅비는 줄고 매출은 늘었습니다.\"",
        time: "오후 8:05",
    },
    {
        name: "강OO 원장님",
        message: "필라테스 센터 홍보가 고민이었는데, 타겟 고객이 딱 원하는 내용을 써주셔서 문의가 늘었어요.",
        reply: "원장님 수업이 좋으니 당연한 결과죠! 계속 돕겠습니다.",
        highlight: "\"고민하던 홍보, 문의 폭주로 보답받네요.\"",
        time: "오전 10:20",
    },
    {
        name: "윤OO 대표님",
        message: "직원 두고 하기엔 부담스러웠는데, 이 가격에 이런 퀄리티라니... 평생 쓰겠습니다.",
        reply: "평생 파트너가 되어드릴게요 대표님! 감사합니다 ^^",
        highlight: "\"직원 월급 아끼고 퀄리티는 챙겼습니다.\"",
        time: "오후 1:55",
    },
    {
        name: "한OO 사장님",
        message: "카페 신메뉴 홍보글 반응이 바로 오네요? 신기합니다 ㅎㅎ 앞으로도 잘 부탁드려요.",
        reply: "사진이 워낙 예뻐서 반응이 좋을 줄 알았습니다! 대박 나세요!",
        highlight: "\"신메뉴 홍보글 올리자마자 반응 오네요.\"",
        time: "오후 5:30",
    },
    {
        name: "오OO 님",
        message: "펜션 예약율이 떨어져서 걱정이었는데, 감성적인 글 덕분에 주말 예약 꽉 찼습니다 ㅠㅠ",
        reply: "사장님의 공간이 워낙 예뻐서 글도 잘 나온 것 같습니다 :)",
        highlight: "\"감성적인 글로 주말 예약 꽉 찼습니다.\"",
        time: "오후 9:12",
    },
    {
        name: "신OO 대표님",
        message: "매번 키워드 고민하느라 머리 아팠는데 알아서 잡아주니 너무 편해요. 사업에만 집중할 수 있네요.",
        reply: "골치 아픈 건 저희에게 맡기시고 사업에만 전념하세요!",
        highlight: "\"키워드 고민 해결, 사업에만 집중합니다.\"",
        time: "오전 11:45",
    },
    {
        name: "장OO 점주님",
        message: "배달 앱 리뷰 관리보다 블로그 유입이 훨씬 구매 전환이 좋네요. 진작 할 걸 그랬습니다.",
        reply: "블로그가 생각보다 구매 전환율이 높죠! 빠른 판단 굿입니다.",
        highlight: "\"배달 앱보다 블로그 유입 효과가 좋네요.\"",
        time: "오후 7:20",
    },
    {
        name: "서OO 원장님",
        message: "학원생 모집 기간이라 바빴는데, 알아서 홍보해주니 상담 전화 받느라 바쁘네요 ㅎㅎ 행복한 비명!",
        reply: "원장님 실력이 좋아서 소문이 금방 난 것 같습니다 ^^",
        highlight: "\"학원생 모집, 상담 전화 받느라 바쁩니다.\"",
        time: "오후 3:40",
    },
    {
        name: "임OO 대표님",
        message: "쇼핑몰 유입이 정체였는데, 블로그 글 하나로 트래픽이 3배가 뛰었어요. 마법 부린 줄 알았습니다.",
        reply: "마법이 아니라 데이터의 힘입니다! ㅎㅎ 앞으로 더 오를 거예요.",
        highlight: "\"글 하나로 쇼핑몰 트래픽 3배 급증.\"",
        time: "오전 9:15",
    },
    {
        name: "배OO 사장님",
        message: "네일샵 예약 비는 타임 채우기 힘들었는데, 이제는 예약 대기까지 생겼어요. 감사합니다!",
        reply: "디자인이 예뻐서 금방 입소문 날 줄 알았습니다! 축하드려요!",
        highlight: "\"예약 비는 타임 없이 대기까지 생겼어요.\"",
        time: "오후 1:10",
    },
    {
        name: "남OO 점장님",
        message: "헬스장 회원권 문의가 뜸했는데, 지역 키워드 잡으니까 바로 등록으로 이어지네요.",
        reply: "지역 타겟팅이 핵심이죠! 정확하게 공략했습니다.",
        highlight: "\"지역 키워드 잡고 회원 등록 늘었습니다.\"",
        time: "오후 8:45",
    },
    {
        name: "조OO 작가님",
        message: "공방 클래스 모집이 항상 숙제였는데, 이제 공지 올리자마자 마감입니다. 글쓰는 부담 덜어서 너무 좋아요.",
        reply: "작가님 작품이 좋아서 글도 술술 써졌나 봅니다 ^^ 완판 축하드려요!",
        highlight: "\"공지 올리자마자 클래스 마감되었습니다.\"",
        time: "오전 10:50",
    },
    {
        name: "황OO 대표님",
        message: "법무법인 홍보는 까다로서 걱정했는데, 전문성 있게 잘 풀어주셔서 신뢰도가 올라간 것 같아요.",
        reply: "전문 직종일수록 신뢰도가 생명이니까요. 신경 많이 썼습니다!",
        highlight: "\"까다로운 전문 홍보, 신뢰도 높였습니다.\"",
        time: "오후 4:05",
    },
];

export default function Evidence() {
    return (
        <section className="bg-slate-50 py-24 overflow-hidden">
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">실제 사장님들의 카톡 대화</h2>
                <p className="text-slate-600 text-lg">이미 많은 사장님들이 효과를 경험하고 계십니다.</p>
            </div>

            {/* Marquee Container */}
            <div className="w-full relative overflow-hidden">
                <div className="flex w-full overflow-hidden">
                    {/* Inner - Double the content for smooth loop */}
                    <div className="flex min-w-full shrink-0 animate-marquee gap-8 px-4 items-start">
                        {REVIEWS.map((review, i) => (
                            <ReviewChatCard key={`original-${i}`} {...review} />
                        ))}
                    </div>
                    <div className="flex min-w-full shrink-0 animate-marquee gap-8 px-4 items-start" aria-hidden="true">
                        {REVIEWS.map((review, i) => (
                            <ReviewChatCard key={`duplicate-${i}`} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReviewChatCard({ name, message, reply, highlight, time }: { name: string; message: string; reply: string; highlight: string; time: string }) {
    return (
        <div className="w-[400px] shrink-0 flex flex-col rounded-[2rem] bg-white p-6 shadow-sm border border-slate-100 h-[520px] justify-between">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 text-slate-500">
                <MessageCircle size={20} />
                <span className="text-sm font-medium">카카오톡 실제 후기</span>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#b2c7da] rounded-2xl p-4 flex flex-col gap-6 overflow-hidden relative">

                {/* User Message */}
                <div className="flex gap-2">
                    <div className="h-10 w-10 shrink-0 rounded-[14px] bg-slate-300 flex items-center justify-center text-xs font-bold text-white border border-black/5">
                        {/* Simple Avatar Placeholder */}
                    </div>
                    <div className="flex flex-col gap-1 max-w-[70%]">
                        <span className="text-xs text-slate-600 ml-1">{name}</span>
                        <div className="bg-white p-3 rounded-[12px] rounded-tl-none shadow-sm text-sm leading-relaxed text-slate-900">
                            {message}
                        </div>
                        <span className="text-[10px] text-slate-500 ml-1">{time}</span>
                    </div>
                </div>

                {/* Reply Message (Admin) */}
                <div className="flex gap-2 justify-end mt-auto">
                    <div className="flex flex-col gap-1 max-w-[70%] items-end">
                        <div className="bg-[#fee500] p-3 rounded-[12px] rounded-tr-none shadow-sm text-sm leading-relaxed text-slate-900">
                            {reply}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Highlight */}
            <div className="pt-6 pb-2">
                <p className="text-lg font-bold text-slate-900 leading-snug">
                    {highlight}
                </p>
            </div>
        </div>
    );
}
