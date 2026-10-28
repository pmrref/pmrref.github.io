# PMR 프로젝트 개요

최종 갱신: 2026-10-28

## 목적과 운영 모델

PMR(Programmable Message Router)의 공식 제품 웹사이트를 구축한다. 제품 소개와 기술 매뉴얼을 함께 제공하며, 유지보수보다 PMR 콘텐츠 작성에 집중할 수 있는 단순한 운영을 목표로 한다.

Astro 기반 Markdown-first 정적 웹사이트다. 표준 기능을 우선하고, 일반 콘텐츠 추가를 위해 애플리케이션 코드나 별도 CMS를 수정할 필요가 적도록 구성한다.

## 확정된 방향

- 제품 홈페이지는 [KytyPS5](https://kytyps5.github.io/)의 디자인 철학과 정보 구조를 계승한다. 밝은 테마, 간결한 타이포그래피와 카드 레이아웃을 사용한다. 배경은 로고의 블루·보라에 맞춘 `#F3F5FA`(RGB 243, 245, 250)이며 제품·문서를 LIGHT로 통일한다.
- 홈 흐름은 Hero → Metrics → Use Cases → Explore다. 세밀한 디자인 복제는 초기 기반 구축 범위에 포함하지 않는다.
- 제품 정보는 소개, Features, Architecture, Use Cases, News로 구성한다.
- `/docs/`에는 Astro Starlight 매뉴얼을 제공한다. Getting Started, Installation, Configuration, Architecture, Programming, API Reference, Operations를 포함한다.
- 제품과 문서는 별도 레이아웃을 사용하고 디자인 토큰을 공유한다.
- 단일 Git 저장소, 단일 빌드, 단일 GitHub Pages 배포를 목표로 한다.
- 초기에는 React 없이 정적 HTML 중심으로 구성한다. JavaScript는 최소화하고 필요한 부분에만 인터랙션을 추가한다.

설계 이유와 변경 이력은 [DECISIONS.md](DECISIONS.md)를 참고한다.

## 현재 구조 안내

| 위치 | 역할 |
| --- | --- |
| `astro.config.mjs` | 정적 빌드와 Starlight 통합, 문서 사이드바 |
| `src/content.config.ts` | 제품·News·문서·번역 컬렉션 |
| `src/content/product/` | Markdown 제품 본문 |
| `src/content/news/` | Markdown 소식 |
| `src/content/docs/docs/` | `/docs/` 매뉴얼; 두 번째 docs가 URL 접두어 |
| `src/content/docs/404.md` | Starlight 예약 오류 페이지 |
| `src/pages/` | 홈, 제품 경로, News 목록·상세 |
| `src/layouts/ProductLayout.astro` | 제품 사이트 레이아웃 |
| `src/styles/` | 공통 토큰, 제품 스타일, Starlight 스타일 |
| `src/lib/paths.ts` | Astro base를 반영하는 컴포넌트용 링크 함수 |
| `public/` | 정적 자산 |

## 브랜드 자산

- `public/PMR.png`: 투명 배경의 가로형 로고. 제품 헤더·푸터와 문서 제목에 사용한다.
- `public/bi_PMR.png`: 투명 배경의 나비 심볼. 홈 Hero에 크게 배치하고 favicon으로 사용한다.
- 원본 이미지의 색상·비율·투명도를 유지한다. Hero는 데스크톱에서 소개 왼쪽·심볼 오른쪽, 모바일에서는 세로 배치한다.

## 개발과 배포 경계

사용자가 조직 `pmrref`와 Public 저장소 `pmrref/pmrref.github.io`를 생성했다. 2026-10-28 GitHub API로 공개 상태, 기본 브랜치 `main`, 빈 저장소 상태를 확인했다. 기존 로컬 Git 저장소는 유지한다.

게시 대상은 `https://pmrref.github.io/`다. `site`와 루트 `base: /`를 설정하고 `.github/workflows/deploy.yml`을 준비했다. `main` push·병합 시 자동 배포, PR은 검사·빌드만 수행한다. Pages 설정·Git 연결 절차는 `README.md`, 실제 연결·push·배포 성공 여부는 `PROGRESS.md`를 확인한다.

실행 환경과 명령은 [README.md](README.md), 작성 규칙은 [CONTENT_GUIDE.md](CONTENT_GUIDE.md)에 있다. 현재 패키지 요구사항은 `package.json`, 재현 버전은 `package-lock.json`과 `.nvmrc`를 확인한다.

## 현재 단계의 한계

기존 제품 본문·News·기술 문서는 초기 샘플이다. 실제 PMR 기능, 지원 환경, 설치 명령, 설정 스키마, API, 성능 수치와 고객 사례는 확인 후 작성한다. 홈 Metrics는 현재 사이트 구성 수치다.

실제 완료 상태, 확인한 검증 결과와 다음 작업은 [PROGRESS.md](PROGRESS.md)에서 관리한다.
