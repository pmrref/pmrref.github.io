# 작업 진행 기록

최종 갱신: 2026-10-28

## 현재 상태

초기 Astro·Starlight 기반 구조가 존재하며 제품 콘텐츠 작성 전의 샘플 단계다. 제품과 문서는 LIGHT 테마이며 PMR 로고와 은은한 블루 그레이 배경을 적용했다. GitHub Pages 최초 배포를 완료했다. 조직 `pmrref`의 Public 저장소 `pmrref/pmrref.github.io`와 게시 대상 `https://pmrref.github.io/`가 확정됐다. 최초 커밋 `e71c2fa`를 `main`으로 push했고 `origin/main` 추적을 설정했다. 해당 커밋의 GitHub Actions가 성공했고 공개 홈·문서·로고·검색 스크립트의 HTTP 응답을 확인했다.

초기 기억 체계 작성 시점에 파일과 Git 상태로 확인한 사항(후속 변경은 아래 날짜별 기록 참조):

- `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.nvmrc`가 존재한다. Astro 7.4 계열, Starlight 0.42 계열이며 Node 요구 버전은 22.23.4 이상이다.
- 홈은 Hero → Metrics → Use Cases → Explore 순서다. 제품 본문 4개와 News 샘플 1개, 관련 라우트가 존재한다.
- `/docs/` 홈과 7개 문서 영역의 샘플 Markdown이 존재한다. Starlight 검색·사이드바·목차를 사용하는 설정이다.
- 공통 디자인 토큰과 제품·문서 전용 스타일, 제품 레이아웃이 존재한다.
- `AGENTS.md`, `CONTENT_GUIDE.md`, `README.md`의 기존 내용을 확인하고 보존했다.
- `git remote -v` 출력이 비어 있다. 로컬 `master`는 아직 커밋이 없으며 프로젝트 파일은 미추적 상태다. 이번 작업에서 commit·원격 연결·배포를 수행하지 않았다.

## 이전 세션의 검증 · 2026-10-28

아래는 같은 대화의 초기 구축 작업에서 실행 결과를 확인한 기록이다. 이번 기억 체계 문서 작업에서 애플리케이션 검증을 재실행한 결과는 아니다.

| 검증 | 당시 결과와 한계 |
| --- | --- |
| `npm run check` | 최종 실행에서 오류 0, 경고 0, 힌트 0 |
| `npm run build` | 성공; 정적 HTML 16개와 Pagefind 검색 인덱스 생성 |
| 산출물 내부 링크·앵커 검사 | Python HTML 파서 검사 통과 |
| 제품·News 7개 페이지의 script 태그 | 당시 산출물에서 0개 확인 |
| 빌드 경고 | `site` 미설정으로 sitemap 생략, Starlight 예약 404 경로 선택 경고 |

검증에는 임시 경로의 Node 22.23.4와 `ASTRO_TELEMETRY_DISABLED=1`을 사용했다. 임시 런타임·캐시가 다음 세션에도 존재한다고 가정하지 않는다. 재검증은 `.nvmrc`와 README의 환경 준비 절차를 따른다.

## 이번 작업 · 2026-10-28 · 장기 작업 기억 체계

- 기존 파일, 주요 소스·설정과 Git 상태를 먼저 확인했다.
- `AGENTS.md`에 세션 시작 시 읽을 순서와 주요 작업 후 관련 문서를 갱신하는 규칙을 추가했다.
- `PROJECT.md`에 목적, 확정 범위, 운영 모델과 구조를 정리했다.
- `DECISIONS.md`에 기존 확정 사항과 기억 체계 결정을 ID별로 기록했다.
- 이 파일에 현재 상태, 이전 검증 근거, 한계와 다음 작업을 분리했다.
- `CONTENT_GUIDE.md`의 기존 규칙을 유지하고 진행·설계 기록 갱신 방법을 추가했다.
- 검증 범위는 이번에 변경한 5개 Markdown의 존재, 필수 내용, 로컬 링크와 기존 내용 보존 확인이다. 문서만 변경했으므로 애플리케이션 check/build는 재실행하지 않는다.

## 미완료·미검증

- 실제 PMR 기능, 설치 절차, 설정 스키마, 프로그래밍 API, 운영 절차에 대한 자료 수집과 콘텐츠 확정.
- 실제 제품 성능 수치와 고객 사례 검증. 현재 Metrics는 사이트 구성 수치다.
- KytyPS5 디자인의 세부 계승과 실제 브라우저 기반 모바일·키보드 접근성 검수.
- 검색 인덱스 생성은 확인됐으나 실제 브라우저 검색 동작은 미검증.
- 공개 사이트에서 실제 검색 상호작용과 전체 키보드 접근성 검증. 최초 원격 빌드·배포 및 공개 홈·문서·로고·검색 스크립트의 HTTP 응답은 확인했다.
- 향후 배포 하위 경로를 도입한다면 Markdown 절대 링크와 정적 자산 경로 재점검. 현재 루트 배포는 내부 링크·자산 검사를 통과했다.
- Starlight 404 경고의 후속 처리. sitemap 경고는 도메인 설정 후 해소했다.

## 다음 작업 후보

확정된 실행 지시가 아닌 후속 작업 안내다. 다음 사용자 요청에 맞춰 범위를 정한다.

1. PMR 제품 자료를 확인하고 소개·Features·Architecture의 초안을 실제 내용으로 채운다.
2. Getting Started와 Installation부터 검증 가능한 매뉴얼을 작성한다.
3. 콘텐츠가 갖춰지면 실제 브라우저로 레이아웃·탐색·검색을 검수한다.
4. 배포 요청이 있을 때 GitHub 저장소와 Pages 경로를 확정한다.

## 다음 갱신 양식

작업마다 날짜, 변경한 파일·영역, 실제 수행한 검증과 결과, 남은 작업을 기록한다. 설계가 바뀌면 `DECISIONS.md`의 관련 ID도 연결한다. 최신 상태와 다음 단계는 갱신하되 중요한 이전 검증의 날짜와 한계는 보존한다.

## 2026-10-28 · LIGHT 테마와 브랜드 로고

- 사용자 추가 요청에 따라 D-008로 테마 결정을 갱신했다. `PROJECT.md`, `AGENTS.md`, `README.md`도 현재 방향에 맞췄다.
- `src/styles/tokens.css`, `product.css`, `docs.css`: 배경 `#F3F5FA`(RGB 243, 245, 250), 블루 강조색, 밝은 카드·경계·그림자와 반응형 Hero를 적용했다.
- `src/pages/index.astro`: 좌측 소개·우측 대형 `bi_PMR.png` 로고를 배치했다. 모바일에서는 세로 배치한다.
- `ProductLayout.astro`, `DocsSiteTitle.astro`: `PMR.png`를 헤더·푸터·문서 제목에 적용했다. 원본 PNG는 변경하지 않았다.
- `astro.config.mjs`, `LightThemeProvider.astro`, `LightThemeSelect.astro`: Starlight를 LIGHT로 통일했다. 제품과 문서 favicon도 PMR 심볼을 사용한다.
- KytyPS5 HTML·CSS를 읽어 밝은 색상 체계와 좌우 Hero 구성에 참고했다. 색상은 PMR 로고의 블루·보라에 맞췄다.
- `npm run check`: 오류 0, 경고 0, 힌트 0. favicon 반영 후 최종 `npm run build`: 성공, 16개 페이지와 검색 인덱스 생성. 기존 sitemap·예약 404 경고는 남아 있다.
- 설치된 Chromium으로 데스크톱 홈·문서 및 실제 390px 모바일 홈·문서를 확인했다. CDP 검사에서 홈 390px/1440px와 문서 390px에 가로 넘침이 없고 모든 로고가 로딩되며 `data-theme=light`인 것을 확인했다. 홈의 계산된 배경색은 RGB 243, 245, 250, script 태그는 0개다.
- 이번 화면 검수는 테마·로고·레이아웃에 한정한다. 전체 키보드 접근성과 검색 상호작용 검증은 미완료로 유지한다.
- 원격 연결·배포는 수행하지 않았다. 검수 스크린샷과 브라우저 도구의 임시 파일은 프로젝트의 영구 자산이 아니다.

## 2026-10-28 · pmrref GitHub Pages 배포 준비

- GitHub API 및 `git ls-remote`로 `pmrref/pmrref.github.io`를 확인했다. Public, 기본 브랜치 `main`, size 0, 원격 refs 없음, `has_pages: false`였다. 사용자 확정 게시 주소는 `https://pmrref.github.io/`다.
- `astro.config.mjs`에 `site`와 `base: '/'`를 설정했다.
- `.github/workflows/deploy.yml`을 작성했다. `main` push·병합은 검사·빌드·Pages 배포, PR은 검사·빌드만, `main` 수동 실행도 지원한다. 공식 Actions를 사용하고 Node는 `.nvmrc`를 따른다. 변경 파일 필터는 없다.
- `README.md`에 최초 Pages 설정, 명시적인 Git add·commit·브랜치·원격·push 명령과 자동 반영 흐름을 작성했다. `CONTENT_GUIDE.md`, `PROJECT.md`, `DECISIONS.md` D-009에 운영 방향을 반영했다.
- 실제 수행한 검증: `npm run check` 오류·경고·힌트 0, `npm run build` 성공(16페이지), 검색 인덱스와 새 도메인 sitemap 생성 확인. Python HTML 파서로 내부 링크·앵커·이미지·스크립트 경로 확인. YAML 파서로 문법과 트리거·job 의존성·권한 구조 확인.
- 빌드의 sitemap 경고는 해소됐으며 기존 Starlight 예약 404 경로 경고만 남아 있다.
- 미수행: Git 원격 설정, commit·push, GitHub Pages Source 변경, 원격 Actions 실행, 실제 공개 사이트 접속 검증. 로컬 검증을 원격 CI 성공으로 간주하지 않는다.
- 다음 단계: 사용자 계정에서 저장소 Settings → Pages → Source를 GitHub Actions로 설정하고 README의 최초 push 절차를 실행한다. GitHub 쓰기 권한이 있는 계정의 로컬 인증이 필요하다. 이후 Actions의 build/deploy와 공개 홈·문서·로고·검색을 확인한다.

## 2026-10-28 · 최초 커밋·push 진행

- 사용자가 GitHub Pages Source 설정 완료를 알리고 최초 commit·push를 요청했다.
- push 전 원격 refs가 여전히 비어 있고 로컬은 커밋 전 `master`, 원격 미설정 상태인 것을 확인했다.
- 프로젝트 소스·설정·문서·로고만 명시적으로 스테이징한다. `node_modules`, `dist`, `.astro`와 로컬 환경 파일은 제외한다.
- 이 기록 작성 시점에는 commit·push와 원격 Actions 결과가 아직 확정되지 않았다. 완료 결과는 후속 기록에서 확인한다.

## 2026-10-28 · 최초 push 완료

- 최초 커밋: `e71c2fa94adc85781bc07c95ddc970a3979212d7` (`Set up PMR website and GitHub Pages deployment`). 프로젝트 파일 45개를 포함했다.
- HTTPS push는 인증 미설정으로 실패했다. 기존 SSH 인증이 GitHub에서 성공하는 것을 확인한 뒤 origin을 `git@github.com:pmrref/pmrref.github.io.git`로 설정했다.
- `git push -u origin main` 성공. 로컬 `main`은 `origin/main`을 추적한다. 강제 push는 사용하지 않았다.
- GitHub API에서 해당 커밋의 Actions 실행 `40617866566`이 `in_progress`인 것을 확인했다: https://github.com/pmrref/pmrref.github.io/actions/runs/40617866566
- `README.md`의 최초 연결 안내를 완료 상태와 현재 SSH 원격에 맞췄다. 배포 결과는 확인 후 후속 기록한다.

## 2026-10-28 · 첫 원격 배포 성공

- 최초 커밋 `e71c2fa`의 Actions 실행 `40617866566`이 `completed / success`로 완료된 것을 GitHub API로 확인했다.
- 원격 build의 Node 설정, `npm ci`, 타입 검사, 정적 빌드와 artifact 업로드가 성공했고 배포까지 완료했다.
- `https://pmrref.github.io/`와 `/docs/`를 HTTP로 읽어 제품 Hero와 문서 제목을 확인했다. `/bi_PMR.png`는 로컬 원본과 SHA-256이 일치했고 `/pagefind/pagefind.js`도 정상 응답했다.
- 공개 사이트에서 실제 검색 입력·키보드 조작은 이번 HTTP 검사에 포함하지 않았다.
- `README.md`와 이 진행 기록의 배포 상태를 동기화한다. 이후 Markdown을 `main`에 커밋·push하면 같은 자동 배포가 실행된다.
