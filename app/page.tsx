import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-miro-blue selection:bg-miro-yellow/30 font-sans">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-[120px] px-8 overflow-hidden bg-white">
          <div className="max-w-[1280px] mx-auto text-center">
            <h1 className="text-[56px] md:text-[80px] font-medium leading-[1.05] tracking-[-0.025em] mb-8 text-miro-blue">
              AI가 주도하는 <br />
              <span className="relative inline-block">
                보안 워크스페이스
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-miro-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-slate mb-10 max-w-2xl mx-auto leading-[1.5]">
              SecureVibe는 보안 팀이 취약점을 시각화하고, AI로 코드를 스캔하며, 그 어느 때보다 빠르게 문제를 해결할 수 있도록 돕습니다.
            </p>

            {/* Whiteboard Mockup Visualization */}
            <div className="relative max-w-5xl mx-auto rounded-xl border border-hairline shadow-[0_12px_32px_-4px_rgba(5,0,56,0.08)] bg-zinc-50 p-4 overflow-hidden animate-fade-in">
              <div className="aspect-[16/9] bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Visual elements representing Miro-board-like interface for security */}
                <div className="absolute top-10 left-10 w-48 p-4 bg-miro-yellow-light rounded-xl border border-miro-yellow/20 shadow-sm text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-miro-yellow-dark mb-2">심각한 발견 사항</div>
                  <div className="text-sm font-semibold">/api/v1/user 내 SQL 인젝션</div>
                </div>
                <div className="absolute top-32 right-20 w-56 p-4 bg-miro-coral-light rounded-xl border border-miro-coral-light shadow-sm text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-miro-coral-dark mb-2">보안 부채</div>
                  <div className="text-sm font-semibold">dev 브랜치에서 32개의 하드코딩된 시크릿 발견</div>
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 p-4 bg-miro-teal-light rounded-xl border border-miro-teal-light shadow-sm text-left">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-miro-teal-dark mb-2">보안 AI 가이드</div>
                  <div className="text-sm font-semibold italic">"매개변수화된 쿼리를 사용하도록 입력 유효성 검사를 업데이트하는 중..."</div>
                </div>
                <div className="text-miro-blue opacity-10 font-bold text-4xl">SecureVibe 비주얼 캔버스</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Massive Dark Footer */}
      <footer className="bg-miro-blue text-white py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-miro-yellow rounded-sm flex items-center justify-center font-black text-miro-blue">
                  SV
                </div>
                <span className="text-2xl font-bold tracking-tight">SecureVibe</span>
              </div>
              <p className="text-sm opacity-60 max-w-xs leading-relaxed mb-8">
                팀이 더 안전한 소프트웨어를 더 빠르게 배포할 수 있도록 돕는 비주얼 보안 플랫폼입니다.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
              </div>
            </div>
            {[
              { title: "제품", links: ["기능소개", "보안", "연동", "요금제"] },
              { title: "솔루션", links: ["엔터프라이즈", "스타트업", "DevOps", "교육"] },
              { title: "리소스", links: ["문서", "API 레퍼런스", "보안 블로그", "커뮤니티"] },
              { title: "회사", links: ["소개", "채용", "연락처", "개인정보처리방침"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-[16px] font-semibold mb-6">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}><Link href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{link}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs opacity-40">
              © {new Date().getFullYear()} SecureVibe Security Inc. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs opacity-40">
              <Link href="#" className="hover:opacity-100 transition-opacity">이용약관</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">쿠키 정책</Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">쿠키 관리</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
