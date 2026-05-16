import MemoBoard from "../../components/MemoBoard";

export const metadata = {
  title: "포스트잇 - 온진의 포트폴리오",
  description: "자유롭게 의견을 남기는 패들렛 스타일의 포스트잇 공간입니다.",
};

export default function PostItPage() {
  return (
    <div className="py-12">
      <MemoBoard />
    </div>
  );
}
