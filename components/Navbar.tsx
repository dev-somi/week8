"use client"

import Link from "next/link"
import { useAuthStore } from "@/store/authStore"

export default function Navbar() {
    const user = useAuthStore((state) => state.user)
    const clearUser = useAuthStore((state) => state.clearUser)

    return (
        <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-hairline">
            <div className="max-w-[1280px] mx-auto px-8 h-16 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-miro-yellow rounded-sm flex items-center justify-center text-miro-blue">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0110 0v4"></path>
                        </svg>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-miro-blue">
                        SecureVibe
                    </span>
                </div>

                {/* Center: Main Links */}
                <div className="flex items-center gap-6 text-[15px] font-medium text-miro-blue">
                    <Link href="/" className="hover:opacity-70 transition-opacity">Scan</Link>
                    <span className="opacity-20">|</span>
                    <Link href="/report" className="hover:opacity-70 transition-opacity">Report</Link>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-zinc-100 transition-colors">
                        {/* 설정 아이콘 */}
                    </button>

                    {user ? (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-miro-blue text-white flex items-center justify-center text-xs font-bold">
                                {user.name.slice(0, 2).toUpperCase()}
                            </div>
                            <button
                                onClick={() => clearUser()}
                                className="text-sm text-slate hover:opacity-70"
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : (
                        <Link href="/login">로그인</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}