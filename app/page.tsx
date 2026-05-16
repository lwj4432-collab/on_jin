import MemoBoard from "../components/MemoBoard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          온진의 포트폴리오
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          환영합니다! 이곳은 저의 작업물과 프로젝트를 소개하는 공간입니다. <br className="hidden md:block" />
          아래 버튼을 눌러 더 많은 이야기를 확인해보세요.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* 가짜(Placeholder) 버튼 */}
          {/* 여기에 기능이 연결된 버튼이나 새로운 인터랙션 요소를 추가하세요 */}
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            기능 추가 버튼
          </button>
        </div>
      </div>

      {/* 여기에 새로운 섹션(예: About, Skills, Projects 목록) 컴포넌트를 추가하세요 */}
      <section className="mt-32 w-full max-w-5xl">
        <MemoBoard />
      </section>
    </div>
  );
}
