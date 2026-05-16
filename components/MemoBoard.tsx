"use client";

import { useState, useEffect } from "react";

interface Memo {
  id: string;
  author: string;
  content: string;
  date: string;
  color: string;
}

const COLORS = [
  "bg-yellow-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-pink-200",
  "bg-purple-200",
  "bg-orange-200",
  "bg-teal-200",
];

export default function MemoBoard() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedMemos = localStorage.getItem("padlet-memos");
    if (savedMemos) {
      setMemos(JSON.parse(savedMemos));
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever memos change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("padlet-memos", JSON.stringify(memos));
    }
  }, [memos, isLoaded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newMemo: Memo = {
      id: crypto.randomUUID(),
      author: author.trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      color: selectedColor,
    };

    setMemos((prev) => [newMemo, ...prev]);
    setAuthor("");
    setContent("");
  };

  const handleDelete = (id: string) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  };

  if (!isLoaded) return null; // Hydration mismatch 방지

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 pb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">자유 메모장 📌</h2>
        <p className="text-gray-600">서로의 생각과 아이디어를 포스트잇처럼 자유롭게 남겨주세요!</p>
      </div>

      {/* 입력 폼 */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-12 transition-all hover:shadow-lg"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="이름 (닉네임)"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
            maxLength={20}
            required
          />
          <textarea
            placeholder="어떤 이야기를 남기고 싶나요?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors min-h-[120px] resize-y"
            required
          />
          
          <div className="flex flex-col sm:flex-row gap-6 mt-2">
            {/* 색상 선택 */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">포스트잇 색상</label>
              <div className="flex gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`w-8 h-8 rounded-full ${c} ${selectedColor === c ? 'ring-2 ring-offset-2 ring-gray-800' : 'ring-1 ring-black/10'}`}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            포스트잇 붙이기
          </button>
        </div>
      </form>

      {/* 메모 그리드 */}
      {memos.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">아직 등록된 메모가 없습니다. 첫 번째 메모를 남겨보세요!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {memos.map((memo) => (
            <div
              key={memo.id}
              className={`${memo.color} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 relative group flex flex-col`}
            >
              <button
                onClick={() => handleDelete(memo.id)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white/40 hover:bg-white rounded-full p-1.5"
                title="삭제하기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="font-semibold text-gray-800 mb-2">{memo.author}</div>
              <p className="text-gray-700 whitespace-pre-wrap flex-grow mb-4 leading-relaxed">{memo.content}</p>
              <div className="text-xs text-gray-600 text-right mt-auto opacity-70">
                {memo.date}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
