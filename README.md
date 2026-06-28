# Stitch Reference Design Workflow Site

이 폴더는 GitHub Pages에 바로 올릴 수 있는 정적 웹사이트 번들이다.

## 열어보기

로컬에서는 `index.html`을 브라우저로 열면 된다.

## 배포하기

자세한 배포 순서는 [README_DEPLOY_GITHUB_PAGES.md](README_DEPLOY_GITHUB_PAGES.md)를 보면 된다.

추천 방식:

```text
GitHub public repository
-> Settings
-> Pages
-> Source: Deploy from a branch
-> Branch: main
-> Folder: /(root)
```

## 포함 파일

- `index.html`: 웹 가이드 본문
- `style.css`: 스타일
- `script.js`: Copy 버튼 동작
- `.nojekyll`: GitHub Pages에서 Jekyll 처리를 건너뛰기 위한 파일
- `assets/workflow-map.svg`: 워크플로우 다이어그램
- `source-md/`: 원본 markdown 프롬프트 백업

