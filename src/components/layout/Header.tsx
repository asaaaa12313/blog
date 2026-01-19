"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/10" : "bg-transparent"
            )}
        >
            <div className="flex items-center gap-2">
                {/* Logo or Brand Name could go here if needed, keeping it empty/minimal for now as requested just the button */}
                <span className="text-xl font-bold font-mono tracking-tighter text-foreground">
                    Auto-Draft
                </span>
            </div>

            <Link href="https://wizpp.com" target="_blank" rel="noopener noreferrer">
                <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-accent px-6 font-medium text-black transition-all hover:bg-yellow-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                    <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <span className="relative z-10 flex items-center gap-2 text-sm">
                        지금 시작하기
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </Link>
        </header>
    );
}
