import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "온진의 포트폴리오",
  description: "환영합니다! 온진의 웹 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}>
        {/* 상단 헤더 컴포넌트 */}
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tight text-blue-600">
              온진이꺼
            </div>
            <nav>
              <ul className="flex space-x-6 text-sm font-medium">
                <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                <li><Link href="/post-it" className="hover:text-blue-600 transition-colors">포스트잇</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 하단 푸터 컴포넌트 */}
        <footer className="w-full bg-gray-50 border-t border-gray-200 mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center justify-center text-sm text-gray-500">
            {/* 여기에 푸터 링크나 추가 정보를 추가하세요 */}
            <p>© {new Date().getFullYear()} Onjin. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
