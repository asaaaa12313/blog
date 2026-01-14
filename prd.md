# [PRD] Project Auto-Draft: Sales-Driven Landing Page

## 1. Project Overview
- **Project Name:** Auto-Draft (블로그 자동화 서비스)
- **Goal:** 방문자의 '결핍(시간 부족)'을 자극하여 '자동화(편리함)'로 해결하고, 즉각적인 '결제/신청'을 이끌어내는 고전환 웹사이트 구축.
- **Target Audience:** 마케팅이 필수지만 글 쓸 시간이 없는 자영업자/소상공인.
- **Key Concept:** **"Unbelievably Simple"** (애플 수준의 심미성과 극강의 사용 편의성).

## 2. Tech Stack & Environment
- **Framework:** Next.js 14+ (App Router) based on Anti-Gravity Boilerplate.
- **Styling:** Tailwind CSS, clsx, tailwind-merge.
- **Animation:** Framer Motion (Standard), GSAP (Optional for scroll).
- **UI Library Reference:** Magic UI, Aceternity UI (for High-end interactions).

## 3. Design System (Apple-like Dark Mode)
- **Color Palette:**
  - `Background`: #000000 (Pure Black)
  - `Text Primary`: #FFFFFF (White)
  - `Text Secondary`: #A1A1AA (Zinc-400)
  - `Accent`: Blue-Purple Gradient (Aurora Effect for AI vibe)
- **Typography:** Pretendard (Variable)
- **Visual Key:**
  - Glassmorphism (유리 질감, Backdrop Blur)
  - Kinetic Typography (움직이는 텍스트)
  - Bento Grid Layout (격자형 카드 배치)

## 4. Section Logic & Specs

### [Sec 1] Hero Section (The Hook)
- **Logic:** Shock & Benefit (압도적 첫인상)
- **Copy:** "블로그, 쓰지 말고 고르세요."
- **Visual:**
  - 배경: 칠흑 같은 어둠 속 은은하게 움직이는 오로라 빛 (Aurora Background).
  - 인터랙션: 텍스트가 단어별로 시간차를 두고 떠오름 (Text Reveal).
  - 아이템: 중앙 아이폰 목업이 스크롤 시 줌인(Zoom-in)되며 몰입감 유도.

### [Sec 2] Problem Section (Empathy)
- **Logic:** Agitation (고통 상기)
- **Copy:** "글쓰기 1시간? 사장님에겐 사치입니다."
- **Visual:**
  - 엉켜있는 실타래(복잡함)가 스크롤에 따라 직선(해결)으로 풀리는 라인 애니메이션.
  - 흑백 톤으로 문제의 심각성 강조.

### [Sec 3] Solution Section (Process)
- **Logic:** Simplicity (3-Step 해결)
- **Layout:** **Bento Grid** (애플 스타일 격자 레이아웃)
- **Details:**
  - Card 1 [분석]: 레이더 스캔 효과 (내 가게 분석).
  - Card 2 [제안]: 아이메시지 채팅처럼 원고 도착 애니메이션.
  - Card 3 [업로드]: 캘린더에 체크마크가 찍히는 자동화 모션.
- **Effect:** 카드 호버 시 테두리에 빛이 흐르는 `Border Beam` 효과 적용.

### [Sec 4] Trust & Evidence
- **Logic:** Social Proof (증거 제시)
- **Visual:** **Marquee (무한 스크롤 배너)**
  - 실제 생성된 고퀄리티 블로그 원고 프리뷰가 좌우로 흐름.
  - "이게 AI라고?" 싶은 퀄리티를 시각적으로 증명.

### [Sec 5] Pricing & CTA (The Offer)
- **Logic:** No-Brainer Offer (거절 불가 제안)
- **UI:** 화면 중앙에 단 하나의 'Premium Card'.
  - 가격(54,000) 숫자가 0부터 카운팅되는 `Number Ticker`.
  - CTA 버튼: 주변으로 빛이 발산되는 `Shimmer Button`으로 클릭 본능 자극.