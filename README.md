# 온진의 포트폴리오 (Boilerplate)

이 프로젝트는 Vercel에 즉시 배포할 수 있도록 구성된 **가장 단순하고 깔끔한 Next.js App Router 기반의 기본 웹앱 뼈대**입니다.

## 기술 스택
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## 시작하기

본 저장소를 클론(Clone)하거나 다운로드 받은 후 아래 명령어를 실행하여 로컬 서버를 실행할 수 있습니다.

```bash
# 1. 패키지 설치
npm install

# 2. 로컬 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 결과를 확인하세요.

## 구조 안내
기능 확장을 쉽게 할 수 있도록 핵심 파일들에 주석(추가 컴포넌트 영역)을 표기해두었습니다.
- `app/layout.tsx`: 사이트 전체에 적용되는 상단 헤더, 네비게이션, 하단 푸터 및 기본 메타데이터 설정이 들어있습니다.
- `app/page.tsx`: 메인 화면(Hero Section)과 환영 문구, 확장 가능한 플레이스홀더 영역이 구현되어 있습니다.

## 배포 (Vercel)
이 프로젝트는 복잡한 설정 없이 즉시 배포가 가능합니다. 
1. 본 프로젝트를 자신의 GitHub 레포지토리에 푸시(Push)합니다.
2. Vercel(https://vercel.com)에 로그인 한 후 `Add New... -> Project`를 선택합니다.
3. 해당 GitHub 레포지토리를 가져오기(Import)하여 기본 설정 그대로 `Deploy` 버튼을 누르면 성공적으로 배포됩니다.
