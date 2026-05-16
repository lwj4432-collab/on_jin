import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-400">
          온진의 포트폴리오
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          환영합니다! 이곳은 저의 작업물과 프로젝트를 소개하는 공간입니다. <br className="hidden md:block" />
          아래 버튼을 눌러 더 많은 이야기를 확인해보세요.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/post-it"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-blue-900 bg-blue-50 border border-blue-200 rounded-full shadow-sm hover:shadow-md hover:bg-blue-100 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span className="mr-2">📝</span>
            포스트잇 구경가기
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
}
