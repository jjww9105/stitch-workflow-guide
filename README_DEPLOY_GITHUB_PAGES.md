# GitHub Pages 배포 안내

이 문서는 `stitch-pages-site` 폴더를 GitHub Pages에 올리는 방법이다.

목표:

```text
웹주소 하나로 Stitch 워크플로우 가이드를 열고,
각 단계의 프롬프트를 펼쳐서 보고,
Copy 버튼으로 바로 복사한다.
```

## 0. 먼저 알아둘 것

GitHub Pages는 GitHub repository에 있는 HTML, CSS, JavaScript 정적 파일을 웹사이트로 publish하는 기능이다.

공식 문서 기준:

- GitHub Pages는 repository에서 웹사이트를 호스팅한다.
- HTML/CSS/JS 같은 정적 파일을 publish할 수 있다.
- GitHub Free 계정에서는 public repository로 쓰는 것이 가장 단순하다.
- Pages 사이트는 인터넷에 공개된다. 민감한 내용은 넣지 않는다.

공식 문서:

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 1. 이번에 올릴 폴더

이 폴더 전체를 GitHub repository에 올린다.

```text
C:\Users\JW AI\Desktop\Project\6_stitch design\2_output\stitch-pages-site
```

폴더 안에는 반드시 `index.html`이 루트에 있어야 한다.

```text
stitch-pages-site/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
├─ README_DEPLOY_GITHUB_PAGES.md
├─ .nojekyll
├─ assets/
└─ source-md/
```

GitHub Pages는 entry file로 `index.html`, `index.md`, 또는 `README.md`를 찾는다. 이 사이트는 `index.html`을 사용한다.

## 2. 추천 방식

가장 쉬운 방식:

```text
새 public repository 생성
-> stitch-pages-site 폴더 내용 업로드
-> Settings > Pages
-> Deploy from a branch
-> main / /(root)
```

주소는 보통 이렇게 생긴다.

```text
https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/
```

예:

```text
https://myname.github.io/stitch-workflow-guide/
```

## 3. 방법 A: GitHub 웹사이트에서 직접 업로드

git 명령어가 가물가물하면 이 방식이 가장 쉽다.

### A-1. 새 repository 만들기

1. GitHub에 로그인한다.
2. 오른쪽 위 `+` 버튼을 누른다.
3. `New repository`를 누른다.
4. Repository name을 정한다.

추천 이름:

```text
stitch-workflow-guide
```

5. Visibility는 `Public`을 선택한다.
6. `Add a README file`은 켜도 되고 꺼도 된다.
7. `Create repository`를 누른다.

### A-2. 파일 업로드

1. 방금 만든 repository로 들어간다.
2. `Add file` 버튼을 누른다.
3. `Upload files`를 누른다.
4. 아래 폴더 안의 파일과 폴더를 모두 끌어다 놓는다.

```text
C:\Users\JW AI\Desktop\Project\6_stitch design\2_output\stitch-pages-site
```

업로드해야 하는 것:

```text
index.html
style.css
script.js
README.md
README_DEPLOY_GITHUB_PAGES.md
.nojekyll
assets/
source-md/
```

5. 아래쪽 commit 메시지는 이렇게 적는다.

```text
Add Stitch workflow guide site
```

6. `Commit changes`를 누른다.

주의:

- `.nojekyll` 파일이 안 보일 수 있다. Windows에서 숨김/점파일 표시가 꺼져 있으면 안 보일 수 있다.
- `.nojekyll`이 빠져도 대체로 동작하지만, GitHub Pages가 Jekyll 처리를 건너뛰게 하려면 포함하는 편이 좋다.

### A-3. GitHub Pages 켜기

1. repository 상단의 `Settings`로 들어간다.
2. 왼쪽 메뉴에서 `Pages`를 누른다.
3. `Build and deployment` 섹션을 찾는다.
4. `Source`를 `Deploy from a branch`로 선택한다.
5. `Branch`를 `main`으로 선택한다.
6. 폴더는 `/(root)`로 선택한다.
7. `Save`를 누른다.

GitHub 공식 문서에서도 branch와 folder를 publishing source로 고를 수 있다고 안내한다.

### A-4. 사이트 주소 확인

1. 같은 `Settings > Pages` 화면에 잠시 기다린다.
2. 보통 몇 분 뒤 사이트 주소가 표시된다.
3. `Visit site` 버튼이 보이면 누른다.

공식 문서 기준으로 publish 반영은 시간이 걸릴 수 있다. 몇 분 기다리고, 안 보이면 10분 정도 기다린 뒤 새로고침한다.

## 4. 방법 B: git 명령어로 올리기

git이 익숙하거나 Codex에게 시킬 때는 이 방식이 편하다.

### B-1. GitHub에서 빈 repository 만들기

GitHub에서 public repository를 하나 만든다.

추천 이름:

```text
stitch-workflow-guide
```

README는 만들지 않는 편이 명령어가 단순하다.

### B-2. PowerShell에서 폴더로 이동

```powershell
cd "C:\Users\JW AI\Desktop\Project\6_stitch design\2_output\stitch-pages-site"
```

### B-3. git 초기화와 첫 커밋

```powershell
git init
git add .
git commit -m "Add Stitch workflow guide site"
git branch -M main
```

### B-4. GitHub repository 연결

아래 주소에서 `YOUR_GITHUB_USERNAME`과 `REPOSITORY_NAME`을 바꾼다.

```powershell
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/REPOSITORY_NAME.git
```

예:

```powershell
git remote add origin https://github.com/myname/stitch-workflow-guide.git
```

### B-5. GitHub에 push

```powershell
git push -u origin main
```

브라우저가 로그인 인증을 요구하면 GitHub 계정으로 로그인한다.

### B-6. Pages 켜기

GitHub 웹사이트에서:

```text
Repository
-> Settings
-> Pages
-> Source: Deploy from a branch
-> Branch: main
-> Folder: /(root)
-> Save
```

## 5. 배포 후 확인 체크리스트

사이트 주소에 접속해서 확인한다.

```text
[ ] 첫 화면이 열린다
[ ] workflow diagram 이미지가 보인다
[ ] Step 목록이 보인다
[ ] 프롬프트 카드가 접히고 펼쳐진다
[ ] Copy 버튼이 동작한다
[ ] source-md 원본 md 링크가 열린다
[ ] 모바일 폭에서도 글자가 겹치지 않는다
[ ] README_DEPLOY_GITHUB_PAGES.md 링크가 열린다
```

## 6. 업데이트하는 법

나중에 프롬프트를 수정했으면:

1. 로컬 `stitch-pages-site` 폴더 파일을 수정한다.
2. GitHub repository에 다시 업로드하거나 git으로 push한다.
3. GitHub Pages가 자동으로 다시 publish한다.

git 명령어 방식:

```powershell
cd "C:\Users\JW AI\Desktop\Project\6_stitch design\2_output\stitch-pages-site"
git status
git add .
git commit -m "Update Stitch workflow guide"
git push
```

## 7. Google Drive 백업

GitHub Pages는 웹 접속용이고, Google Drive는 백업용으로 쓰면 좋다.

PowerShell에서 zip 만들기:

```powershell
Compress-Archive -Path "C:\Users\JW AI\Desktop\Project\6_stitch design\2_output\stitch-pages-site\*" -DestinationPath "C:\Users\JW AI\Desktop\Project\6_stitch design\2_output\stitch-pages-site.zip" -Force
```

그 다음 `stitch-pages-site.zip`을 Google Drive에 업로드한다.

Google Drive에 같이 메모해둘 것:

```text
GitHub repository URL:
GitHub Pages site URL:
백업 생성일:
```

## 8. 문제가 생겼을 때

### 사이트가 404로 뜬다

확인:

```text
Settings > Pages에서 Source가 Deploy from a branch인지
Branch가 main인지
Folder가 /(root)인지
index.html이 repository 루트에 있는지
```

### CSS가 안 먹는다

확인:

```text
style.css가 index.html과 같은 위치에 있는지
파일 이름 대소문자가 정확한지
```

### Copy 버튼이 안 된다

확인:

```text
script.js가 index.html과 같은 위치에 있는지
브라우저에서 JavaScript가 차단되지 않았는지
```

그래도 안 되면 프롬프트 박스 안의 텍스트를 직접 선택해서 복사하면 된다.

### source-md 링크가 안 열린다

확인:

```text
source-md 폴더가 repository에 올라갔는지
파일명이 바뀌지 않았는지
```

## 9. 민감 정보 주의

이 사이트는 public GitHub Pages로 올리는 것을 전제로 한다.

넣으면 안 되는 것:

```text
API 키
비밀번호
개인정보
비공개 프로젝트 내용
회사 내부 정보
민감한 고객 데이터
```

이번 사이트에는 일반 워크플로우 프롬프트만 넣는 것이 좋다.

