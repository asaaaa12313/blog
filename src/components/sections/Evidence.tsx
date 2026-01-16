"use client";

import { cn } from "@/lib/utils";

const REVIEWS = [
    {
        title: "맛집 블로그의 정석",
        desc: "사진 배치부터 키워드까지 완벽합니다.",
        author: "김OO 사장님",
    },
    {
        title: "시간이 0초 걸려요",
        desc: "진짜 클릭 한 번이면 끝나네요.",
        author: "이OO 대표님",
    },
    {
        title: "AI 티가 안 나요",
        desc: "사람이 쓴 것처럼 자연스러워서 놀랐습니다.",
        author: "박OO 점주님",
    },
    {
        title: "상위 노출 성공",
        desc: "덕분에 방문자 수가 2배 늘었습니다.",
        author: "최OO 님",
    },
    {
        title: "최고의 마케팅 툴",
        desc: "비싼 대행사 쓸 필요가 없네요.",
        author: "정OO 사장님",
    },
];

export default function Evidence() {
    return (
        <section className="bg-background py-24 overflow-hidden">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-2">믿을 수 없는 퀄리티</h2>
                <p className="text-neutral-600">이미 많은 사장님들이 경험하고 있습니다.</p>
            </div>

            <div className="relative flex w-full flex-col overflow-hidden">
                {/* Marquee Container */}
                <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    {/* Inner - Double the content for smooth loop */}
                    <div className="flex min-w-full shrink-0 animate-marquee gap-4 py-4">
                        {REVIEWS.map((review, i) => (
                            <ReviewCard key={`original-${i}`} {...review} />
                        ))}
                        {REVIEWS.map((review, i) => (
                            <ReviewCard key={`duplicate-${i}`} {...review} />
                        ))}
                    </div>
                    {/* Second copy for absolute continuity if needed, but flex gap approach above usually works with animation if width is handled right. 
                Standard marquee implementation usually involves two identical sets animating translateX(-50%).
            */}
                    <div className="flex min-w-full shrink-0 animate-marquee gap-4 py-4" aria-hidden="true">
                        {REVIEWS.map((review, i) => (
                            <ReviewCard key={`duplicate-2-${i}`} {...review} />
                        ))}
                        {REVIEWS.map((review, i) => (
                            <ReviewCard key={`duplicate-3-${i}`} {...review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ title, desc, author }: { title: string; desc: string; author: string }) {
    return (
        <figure className={cn(
            "relative w-64 shrink-0 overflow-hidden rounded-xl border p-4",
            "border-neutral-200 bg-white hover:border-accent/50 hover:shadow-lg",
            "transition-all duration-300 hover:scale-105"
        )}>
            <div className="flex flex-col gap-2">
                <div className="h-32 w-full rounded-lg bg-neutral-100 animate-pulse" /> {/* Placeholder for blog image */}
                <figcaption className="text-sm font-medium text-foreground">
                    {title}
                </figcaption>
                <p className="text-xs text-neutral-500">{desc}</p>
                <div className="mt-2 flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-accent/20" />
                    <span className="text-xs font-medium text-neutral-600">{author}</span>
                </div>
            </div>
        </figure>
    );
}
