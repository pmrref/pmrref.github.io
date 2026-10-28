# PMR website

제품 홍보 사이트와 Starlight 기술 문서를 하나로 통합한 Astro 정적 웹사이트입니다. 제품 본문과 문서는 초기 기반 단계의 샘플입니다.

## 로컬 실행

Node **22.23.4 이상**, npm **9.6.5 이상**이 필요합니다. 이번 검증 환경은 `.nvmrc`의 Node 22.23.4입니다. 시스템 기본 Node 18 대신 다음 환경을 사용하세요.

```sh
nvm install
nvm use
npm ci
npm run dev
```

기본 주소: `http://localhost:4321/`, 기술 문서: `http://localhost:4321/docs/`.

```sh
npm run check
npm run build
npm run preview
```

`build`는 제품 HTML, 문서 HTML과 Pagefind 검색 인덱스를 `dist/`에 함께 생성합니다. 검색은 빌드 후 preview에서 확인하세요. Starlight 예약 404 경로 선택 경고가 발생할 수 있으며 정적 빌드는 정상 완료됩니다. 제품 페이지는 클라이언트 프레임워크 없이 생성되며 문서에서는 Starlight 기본 상호작용을 사용합니다.

## 구조

```text
astro.config.mjs          Astro + Starlight, 명시적 문서 영역 순서
src/content.config.ts    제품·소식·문서 컬렉션과 스키마
src/content/product/     Markdown 제품 본문
src/content/news/        Markdown 소식
src/content/docs/docs/   /docs/ Starlight 문서
src/layouts/             제품 전용 레이아웃
src/components/          문서 홈을 연결하는 Starlight 제목
src/pages/               홈, 제품 동적 정적 경로, News 목록·상세
src/styles/              공통 토큰과 레이아웃별 스타일
src/lib/paths.ts         Astro base를 반영하는 링크 함수
public/                  정적 파일
```

제품 경로는 `/`, `/overview/`, `/features/`, `/architecture/`, `/use-cases/`, `/news/`입니다. 문서는 `/docs/` 아래 7개 영역을 제공합니다. 제품과 문서는 독립 레이아웃을 사용하고 색상·서체 원시 토큰만 공유합니다.

Astro 7.4와 Starlight 0.42은 설치된 Node와 호환되는 조합으로 고정했습니다. 최신 메이저로 업그레이드할 때는 Node 요구 버전과 두 패키지의 peer dependencies를 함께 확인하세요.

## 콘텐츠와 작업 규칙

[콘텐츠 가이드](CONTENT_GUIDE.md)와 [에이전트 지침](AGENTS.md)을 참고하세요.
홈은 요청한 Hero → Metrics → Use Cases → Explore 구조를 따릅니다. [KytyPS5](https://kytyps5.github.io/)의 밝은 테마와 간결한 카드 구조를 참고하며 세밀한 복제는 후속 작업입니다. [Starlight 공식 하위 경로 안내](https://starlight.astro.build/manual-setup/#use-starlight-at-a-subpath)에 따라 문서를 중첩 디렉터리에 둡니다.

## GitHub Pages 자동 배포

- 조직: `pmrref`
- 공개 저장소: <https://github.com/pmrref/pmrref.github.io>
- 게시 대상: <https://pmrref.github.io/>
- Astro 설정: `site: 'https://pmrref.github.io'`, `base: '/'`
- 워크플로: `.github/workflows/deploy.yml`

### 최초 연결

1. 저장소 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택한다.
2. 최초 연결은 완료했다. 아래 명령은 새 로컬 저장소에서 최초 연결할 때의 참고용이다. 현재 저장소에서는 재실행하지 말고 `git status`와 `git remote -v`로 기존 설정을 확인한다. 현재 origin은 기존 SSH 인증을 사용하는 `git@github.com:pmrref/pmrref.github.io.git`이다.

```sh
git add .gitignore .npmrc .nvmrc .github AGENTS.md PROJECT.md DECISIONS.md PROGRESS.md CONTENT_GUIDE.md README.md astro.config.mjs package.json package-lock.json tsconfig.json public src
git commit -m "Set up PMR website and GitHub Pages deployment"
git branch -M main
git remote add origin git@github.com:pmrref/pmrref.github.io.git
git push -u origin main
```

3. Git push에는 저장소 쓰기 권한이 있는 계정의 GitHub 인증이 필요하다. 로그인·토큰은 로컬 인증 수단을 사용하고 저장소 파일에 기록하지 않는다.
4. 저장소 **Actions → Deploy PMR to GitHub Pages**에서 build와 deploy가 모두 성공했는지 확인한다. Pages 초기화 직후 설정 오류가 있었다면 설정을 확인한 다음 **Re-run failed jobs** 또는 `main`에서 **Run workflow**를 실행한다.
5. 게시 주소의 홈, `/docs/`, 로고, 검색을 확인한다. 로컬 성공만으로 원격 배포 성공을 기록하지 않는다.

### 콘텐츠 수정과 반영

```text
Markdown 수정 → main에 커밋·push → npm ci → npm run check
→ npm run build → dist 업로드 → GitHub Pages 배포
```

GitHub 웹 편집기로 Markdown을 수정해 `main`에 커밋해도 같은 워크플로가 실행된다. 로컬에서 파일을 저장한 것만으로는 공개 사이트가 변경되지 않으며, 실제 반영은 Actions와 Pages 처리 완료 후다.

PR은 검사·빌드만 수행하며 배포하지 않는다. `main`에 병합하면 배포한다. 수동 실행은 `main`을 선택한다. 변경 파일 필터가 없으므로 Markdown, 이미지, 스타일과 설정 변경 모두 같은 경로로 검증한다. 검사나 빌드가 실패하면 배포 job은 실행하지 않는다.

빌드에 사용하는 Node 버전은 `.nvmrc`, 의존성은 `package-lock.json`으로 맞춘다. 빌드 job은 소스 읽기 권한만, 배포 job은 `pages: write`와 `id-token: write`만 사용한다. 별도 PAT를 Actions Secrets에 추가할 필요는 없다. 조직에서 Actions 사용을 제한하는 경우 해당 GitHub 공식 Actions 허용 여부를 확인한다.

현재 설정 준비와 실제 원격 실행 상태는 [PROGRESS.md](PROGRESS.md)에 구분해서 기록한다.

공식 문서: [Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
