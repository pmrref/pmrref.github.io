# 콘텐츠 작성 가이드

## 기본 원칙

콘텐츠는 기본적으로 UTF-8 Markdown으로 작성한다. 제목과 설명은 한국어를 기본으로 하되 제품명과 기술 용어는 원문을 사용할 수 있다.
제품 사양이 확정되지 않은 내용은 샘플·개념 예시·작성 예정임을 본문에 명시한다. 실행 가능한 명령처럼 보이는 가상의 PMR 명령을 쓰지 않는다.

## 제품 페이지

`src/content/product/<slug>.md`를 추가하면 `/<slug>/` 페이지와 홈 Explore 카드가 생성된다.

```yaml
---
title: Features
description: 메시지 라우팅 기능 소개.
order: 2
---
```

세 필드는 필수다. `order`는 Explore 카드 순서다. 현재 슬러그는 `overview`, `features`, `architecture`, `use-cases`다.
파일명은 소문자 kebab-case를 사용하고 한 단계 파일로 작성한다. `docs`, `news`, `index`, `404`는 예약 경로로 사용하지 않는다.
홈의 제품 표현과 Metrics는 `src/pages/index.astro`에서 관리한다. 현재 Metrics는 사이트 구성 수치이며 성능 지표가 아니다. 실제 벤치마크로 바꿀 때 측정 조건과 출처를 함께 제공한다.
주 메뉴 변경은 `src/layouts/ProductLayout.astro`에 반영한다. 홈 Use Cases 본문은 `use-cases.md`를 공유한다.

## News

`src/content/news/<slug>.md`를 추가한다. 목록은 날짜 내림차순이며 상세 경로는 `/news/<slug>/`다.

```yaml
---
title: 업데이트 제목
description: 업데이트 요약.
date: 2026-10-28
---
```

날짜는 `YYYY-MM-DD` 형식으로 작성한다. 현재 파일은 게시 흐름 확인을 위한 샘플이다. 공개 전 사실과 날짜를 검토한다.

## 기술 문서

`src/content/docs/docs/`에 작성한다. 공통 오류 페이지 `src/content/docs/404.md`는 Starlight의 예약 문서로 예외이며 변경 시 `sidebar.hidden`과 `pagefind: false`를 유지한다. 이 중첩 디렉터리는 Starlight 공식 하위 경로 방식이며 `/docs/` URL을 만든다.

```text
src/content/docs/docs/index.md                 → /docs/
src/content/docs/docs/installation/index.md    → /docs/installation/
src/content/docs/docs/installation/linux.md    → /docs/installation/linux/
```

```yaml
---
title: 문서 제목
description: 문서의 목적과 범위.
sidebar:
  order: 1
---
```

`title`은 필수이고 `description`은 작성 규칙상 필수다. `sidebar`는 선택 항목이다.
Getting Started, Installation, Configuration, Architecture, Programming, API Reference, Operations 아래 파일은 자동 사이드바에 반영된다. 새 최상위 영역은 `astro.config.mjs`의 `sidebar`에도 추가한다.
목차는 `##`, `###` 제목에서 자동 생성된다. 페이지 제목은 frontmatter에서 렌더링하므로 본문에 `#` 제목을 반복하지 않는다.
검색은 Starlight 기본 Pagefind를 사용한다. 개발 서버에서는 검색이 제한되므로 `npm run build` 후 `npm run preview`에서 확인한다.

## 링크와 코드

- 문서 내부는 `../installation/`, `./linux/`처럼 **최종 URL 기준 상대 링크**를 사용한다. `.md` 확장자로 연결하지 않는다.
- 제품 본문의 `/docs/` 같은 루트 기준 링크는 현재 배포 대상 `https://pmrref.github.io/`와 `base: /`에 유효하다. 향후 프로젝트 하위 경로로 배포 위치를 바꾸면 다시 점검한다.
- 코드 블록에는 언어를 지정한다. 의사 코드는 `text`를 사용하고 실행 가능 여부를 설명한다.
- 표에는 입력 타입, 기본값과 제약 등 실제 확인된 정보만 기록한다.
- 문서 추가·이름 변경 후 `npm run check`와 `npm run build`로 스키마, 라우트, 검색 인덱스 생성을 확인한다. 링크도 별도로 확인한다.

## 장기 작업 기억과 콘텐츠 변경 기록

프로젝트 목적은 [PROJECT.md](PROJECT.md), 설계 결정은 [DECISIONS.md](DECISIONS.md), 작업 상태는 [PROGRESS.md](PROGRESS.md)를 기준으로 확인한다. 이 파일은 콘텐츠 작성 규칙을 담당한다.

주요 콘텐츠 작업을 마치면 `PROGRESS.md`에 변경한 영역, 실제 검증 결과와 남은 초안을 기록한다. 콘텐츠 체계·스키마·라우팅에 중요한 결정을 내렸으면 `DECISIONS.md`에 이유를 기록하고 이 가이드도 갱신한다. Markdown 파일이 존재하는 것과 제품 내용이 검증·확정된 것은 구분한다.

운영의 중심은 PMR 콘텐츠 작성이다. 일반적인 문서·소식 추가는 기존 Markdown 경로와 frontmatter를 사용하고, 새 도구나 컴포넌트 도입은 실제 콘텐츠 요구가 있을 때 검토한다.

## 공개 사이트 반영

`main`에 Markdown 변경을 커밋·push하거나 PR을 병합하면 `.github/workflows/deploy.yml`이 검사·빌드 후 Pages에 자동 배포한다. 로컬 저장만으로는 반영되지 않는다. GitHub 웹 편집기의 `main` 커밋도 같은 흐름을 따른다.
PR에서는 검사와 빌드만 수행하며, `main` 병합 후 배포한다. Actions 실행 성공과 공개 URL 확인을 구분해 기록한다. 최초 Pages 설정과 Git 연결 절차는 `README.md`를 따른다.
