# Semantic Rebuild Brief

## 0. 절대 규칙

기존 Codex가 만든 현재 사이트 UI는 시각 참조가 아니다.

보존하거나 따라 하면 안 되는 것:

- 현재 레이아웃
- 현재 색상
- 현재 폰트/타이포그래피
- 현재 카드 모양
- 현재 컴포넌트 구조
- 현재 여백
- 현재 섹션 순서
- 현재 장식 스타일
- 현재 정보 위계

기존 UI에서 추출해도 되는 것은 오직 제품 의미다.

- 제품 목적
- 기능 목록
- 사용 흐름
- 화면 의도
- 프롬프트 복사 기능
- 원본 markdown 링크
- GitHub Pages 배포/업데이트 흐름
- 누락 상태
- 피해야 할 anti-pattern

## 1. 언어 규칙

새 UI는 한국어 사용자를 위한 사이트다.

- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성한다.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/파일명/고유명사는 영어를 유지해도 된다.
- 영어 UI로 생성하지 않는다.
- 프롬프트 본문도 기본적으로 한국어로 보여준다.

## 2. Product Snapshot

- 제품명: Stitch Reference Design Workflow Guide
- 한 줄 목적: Codex 프로젝트를 Google Stitch로 넘겨 새 프론트엔드를 만들 때, 단계별 프롬프트와 절차를 웹에서 바로 보고 복사할 수 있게 하는 실전 가이드.
- 대상 사용자:
  - 주 사용자: Codex, Google Stitch, GitHub Pages, 레퍼런스 사이트 캡처를 활용해 프론트엔드를 반복적으로 재작업하는 프로젝트 소유자.
  - 보조 사용자: 같은 워크플로우를 이해해야 하는 미래의 나, 협업자, 또는 다른 Codex 에이전트.
- 사용자가 해결하려는 문제:
  - Codex, Stitch, DESIGN.md, 레퍼런스 이미지, zip export, GitHub Pages 배포까지 절차가 길고 잘 잊힌다.
  - 정확히 어떤 프롬프트를 어느 도구에 붙여야 하는지 헷갈린다.
  - 기존 Codex UI를 디자인 참고로 쓰거나, 레퍼런스 사이트를 과하게 베끼는 실수를 막아야 한다.
- 제품이 반드시 도와야 하는 일:
  - 전체 워크플로우를 한눈에 보여주기.
  - 각 단계가 Codex용인지 Stitch용인지 명확히 구분하기.
  - 각 단계의 입력물, 붙여넣을 프롬프트, 기대 결과, 다음 행동을 보여주기.
  - 프롬프트를 빠르게 복사하게 하기.
  - 원본 markdown 파일과 GitHub Pages 업데이트 안내에 접근하게 하기.
- 제품 유형: 마케팅 랜딩페이지가 아니라, 반복 사용용 workflow tool / prompt runbook / 개인 운영 매뉴얼.
- 플랫폼: GitHub Pages에 배포되는 정적 웹사이트. 데스크톱과 모바일 브라우저에서 모두 사용 가능해야 한다.

## 3. Users And Jobs

| 사용자 | 상황 | 해야 할 일 | 성공 기준 | 실패 기준 |
|---|---|---|---|---|
| 프로젝트 소유자 | Stitch로 프론트엔드를 다시 만들고 싶은데 절차가 가물가물함 | 웹사이트 하나를 열고 Step 1부터 따라가기 | 어떤 프롬프트를 어디에 붙일지 바로 알 수 있음 | 오래된 채팅이나 여러 md 파일을 뒤져야 함 |
| 프로젝트 소유자 | 레퍼런스 사이트 캡처에서 디자인 감성을 가져오고 싶음 | Stitch에서 DESIGN.md를 안전하게 만들기 | 색감/폰트/여백/컴포넌트 규칙은 추출하고, 원본 레이아웃/브랜드는 복사하지 않음 | "이걸 DESIGN.md로 만들어줘"만 입력해서 얕거나 과복사된 결과가 나옴 |
| 프로젝트 소유자 | Stitch zip을 실제 프로젝트에 적용해야 함 | Codex에게 안전한 통합 지시를 주기 | 기존 기능/라우팅/상태관리는 유지하고 새 UI만 통합됨 | Stitch 코드를 그대로 덮어써서 프로젝트가 깨짐 |
| 미래의 나 | 몇 달 뒤 다시 같은 작업을 해야 함 | 빠르게 절차 복구 | 1페이지 치트시트와 단계별 카드로 바로 재시작 | 워크플로우를 다시 추론해야 함 |
| 협업자/에이전트 | 사이트 링크만 받음 | 절차와 프롬프트 사용처 이해 | Codex용/ Stitch용 프롬프트를 구분해서 사용 | Stitch 프롬프트를 Codex에 붙이거나 반대로 붙임 |

## 4. Core Workflows

### Workflow 1. 전체 Stitch 브릿지 실행

- 시작 조건: 사용자가 Codex 프로젝트의 프론트엔드를 Stitch 방식으로 새로 만들고 싶다.
- 시작 화면: 메인 workflow guide.
- 단계:
  1. 사이트를 연다.
  2. 전체 흐름을 확인한다.
  3. Step 01 프롬프트를 복사해서 대상 Codex 프로젝트에 붙인다.
  4. Codex가 만든 Semantic Rebuild Brief를 복사한다.
  5. Stitch에 Brief와 Step 02 프롬프트를 붙여 제품 UI 예시를 만든다.
  6. Stitch에 레퍼런스 사이트 캡처를 올리고 Step 03으로 DESIGN.md/design system을 만든다.
  7. 제품 UI 예시와 DESIGN.md를 선택하고 Step 04로 UI를 재작업한다.
  8. 필요하면 Step 05 품질 검사 프롬프트를 순서대로 사용한다.
  9. Stitch 결과를 zip으로 다운로드한다.
  10. 대상 Codex 프로젝트에 zip과 Step 06 프롬프트를 넘겨 실제 프로젝트에 통합한다.
- 주요 액션: 현재 단계에 맞는 프롬프트 복사.
- 성공 상태: 사용자가 Stitch 결과 zip과 Codex 통합 지시를 얻는다.
- 오류/막힘 상태:
  - Copy 버튼 실패.
  - 다음 단계가 헷갈림.
  - 레퍼런스 이미지가 없음.
  - 원본 md 링크나 GitHub Pages 링크가 깨짐.
- 복구 경로:
  - 프롬프트 텍스트를 직접 선택해서 복사 가능해야 한다.
  - 각 단계에 "어디에 붙이는지", "필요한 입력", "기대 결과", "다음 단계"를 표시한다.

### Workflow 2. 레퍼런스 이미지로 DESIGN.md 만들기

- 시작 조건: 사용자가 원하는 디자인 감성의 사이트 캡처를 갖고 있다.
- 시작 화면: Step 03 프롬프트 카드.
- 단계:
  1. Stitch에 레퍼런스 이미지를 올린다.
  2. 이미지를 선택한다.
  3. Step 03 프롬프트의 제품 유형 placeholder를 수정한다.
  4. 프롬프트를 붙여 DESIGN.md/design system을 만든다.
- 성공 상태:
  - 색상, 타이포그래피, 여백, 컴포넌트, 상태 규칙, mood가 추출된다.
  - 원본 사이트의 레이아웃/브랜드/문구/로고는 복사되지 않는다.
- 오류/막힘 상태:
  - 제품 유형 placeholder를 그대로 둔다.
  - Stitch가 레퍼런스 사이트를 너무 문자 그대로 따라 한다.
- 복구 경로:
  - placeholder를 눈에 띄게 표시한다.
  - Step 05의 레퍼런스 과복사 검사 프롬프트를 제공한다.

### Workflow 3. DESIGN.md를 제품 UI에 적용하기

- 시작 조건: Stitch에 제품 UI 예시와 레퍼런스 기반 DESIGN.md가 있다.
- 시작 화면: Step 04 프롬프트 카드.
- 단계:
  1. 제품 UI 예시를 선택한다.
  2. DESIGN.md/design system을 선택한다.
  3. Step 04 프롬프트를 붙인다.
  4. Stitch가 DESIGN.md 기준으로 UI를 재작업한다.
  5. 필요하면 Step 05 품질 검사를 실행한다.
- 성공 상태:
  - 제품 의미는 유지되고 시각 시스템은 DESIGN.md 기준으로 정리된다.
- 오류/막힘 상태:
  - 단순 색상 변경으로 끝남.
  - 기존 Codex UI 구조가 남음.
  - 레퍼런스 사이트 레이아웃을 과하게 복사함.
  - loading / empty / error 상태가 빠짐.
- 복구 경로:
  - 기존 Codex UI 오염 검사.
  - 레퍼런스 과복사 검사.
  - 상태 보강 검사.
  - DESIGN.md 준수 검사.

### Workflow 4. 이 사이트 업데이트

- 시작 조건: 프롬프트나 문서를 수정한 뒤 GitHub Pages 사이트를 갱신하고 싶다.
- 시작 화면: 배포/업데이트 안내 섹션.
- 단계:
  1. 로컬 파일을 수정한다.
  2. `git status`를 확인한다.
  3. commit한다.
  4. GitHub에 push한다.
  5. Pages build가 끝날 때까지 기다린다.
  6. live URL을 확인한다.
- 성공 상태:
  - `https://jjww9105.github.io/stitch-workflow-guide/`에 수정 내용이 반영된다.
- 오류/막힘 상태:
  - GitHub 인증 만료.
  - Pages build 지연.
  - 수정 파일 commit 누락.
- 복구 경로:
  - `gh auth status` 확인.
  - README 배포 안내 확인.
  - Pages status 확인.

## 5. Screen Goal Cards

| 화면 | 사용자 목표 | 제품 목표 | 핵심 콘텐츠 | 주요 액션 | 보조 액션 | 필요한 상태 |
|---|---|---|---|---|---|---|
| 메인 워크플로우 | 전체 절차를 이해하고 시작점 찾기 | 긴 문서를 읽지 않아도 순서가 보이게 하기 | 2라인 workflow, 단계 요약, 핵심 규칙 | 프롬프트 섹션으로 이동 | 원본 md, 배포 안내 열기 | normal, mobile |
| 프롬프트 라이브러리 | 단계별 프롬프트 복사 | 잘못된 프롬프트 선택을 줄이기 | Step 카드, 도구 라벨, 입력/출력, 프롬프트 본문 | Copy | 펼치기/접기, 원본 md 열기 | copied, copy failed, manual copy |
| 품질 검사 | Stitch 결과를 점검 | 예쁘기만 한 가짜 완성본 방지 | 기존 UI 오염, 레퍼런스 과복사, 상태 보강, DESIGN.md 준수, 반응형 검사 | 검사 프롬프트 복사 | 여러 검사 순차 실행 | copied, copy failed |
| 원본 파일 | markdown 원본 접근 | 백업과 투명성 제공 | 8개 source-md 링크 | 원본 md 열기 | 직접 복사 | link available, link missing |
| 배포/업데이트 | GitHub Pages 갱신 | 사이트를 계속 유지 가능하게 하기 | repo URL, Pages URL, git 명령, 문제 해결 | 업데이트 명령 확인 | README 열기 | Pages building, 404, auth expired |
| 모바일 화면 | 작은 화면에서 절차 확인 | 이동 중에도 읽고 복사 가능 | 단계 카드, Copy 버튼, 짧은 설명 | Copy | 다음 단계 이동 | overflow-safe, no overlap |

## 6. Data And State Matrix

| 데이터 | 필드 | 표시 위치 | 사용자 액션 | loading | empty | error | permission |
|---|---|---|---|---|---|---|---|
| WorkflowStep | id, 제목, 도구, 목적, 필요한 입력, 기대 결과, 다음 단계 | overview, prompt cards | 읽기, 펼치기, 복사, 이동 | 불필요 | 단계 없음 안내 | 단계 내용 누락 | 없음 |
| PromptTemplate | id, 제목, 대상 도구, 본문, placeholder, 주의사항 | prompt cards | 복사, 직접 선택, placeholder 수정 | 복사 중 | prompt unavailable | copy failed | clipboard blocked |
| QualityCheckPrompt | id, 검사 유형, 본문, 사용 시점 | Step 05 | 특정 검사 복사 | 복사 중 | checks unavailable | copy failed | clipboard blocked |
| SourceMarkdownFile | 파일명, 경로, 목적 | source section | 원본 열기 | link resolving | source missing | 404 | public/private issue |
| DeploymentInstruction | 방법, 명령, 기대 결과, 문제 해결 | deploy section | 읽기, 복사, 실행 | Pages building | not configured | build failed / 404 | GitHub auth required |
| ClipboardAction | target id, 상태, 메시지 | Copy buttons, toast | 복사 | copying | target missing | copy failed | browser denies clipboard |

## 7. Interaction Requirements

### 내비게이션

- 사이트는 예쁜 소개 페이지가 아니라 실전 runbook처럼 동작해야 한다.
- 사용자는 즉시 알아야 한다:
  - 지금 무엇을 하려는 사이트인지
  - 몇 단계 중 어디인지
  - Codex에 붙일지 Stitch에 붙일지
  - 무엇을 복사할지
  - 다음에 무엇을 기대해야 하는지

### Copy 버튼

- 각 프롬프트 카드의 핵심 액션은 Copy다.
- Copy 성공/실패 상태가 보여야 한다.
- 실패해도 프롬프트 본문을 직접 선택해서 복사할 수 있어야 한다.

### 펼치기/접기

- 프롬프트는 길기 때문에 기본적으로 접을 수 있어야 한다.
- 카드 요약에는 다음이 보여야 한다:
  - 단계 번호
  - 대상 도구
  - 필요한 입력
  - 기대 결과

### Placeholder

- Step 03에는 제품 유형 placeholder가 있다.
- 사용자가 그대로 붙이지 않도록 시각적으로 강조해야 한다.
- 예: "붙여넣기 전에 이 줄을 바꾸세요."

### 반응형

- 데스크톱:
  - 작업 중 옆에 열어두고 보기 좋게.
  - 긴 프롬프트가 읽기/복사 가능하게.
- 모바일:
  - 글자와 버튼이 겹치지 않게.
  - Copy 버튼이 터치 가능하게.
  - 긴 prompt box가 화면을 망가뜨리지 않게.

## 8. Anti-Patterns From Current UI

| 현재 문제 | 왜 문제인지 | 새 UI 요구사항 |
|---|---|---|
| 문서 덩어리처럼 보임 | 사용자는 설명서가 아니라 따라 하는 도구가 필요함 | 각 단계가 input -> action -> output -> next로 보여야 함 |
| 긴 textarea가 압도적임 | 복사는 가능하지만 스캔이 어렵다 | 요약은 짧게, 전체 prompt는 펼쳐서 보기 |
| 제품 의미 라인과 디자인 감성 라인이 충분히 분리되어 보이지 않음 | 이 워크플로우의 핵심이 분리 후 결합이기 때문 | 두 라인 workflow를 시각적으로 명확히 보여주기 |
| Step 03 placeholder가 묻힐 수 있음 | 제품 유형을 안 바꾸면 결과가 generic해짐 | placeholder 주의 표시 |
| Copy 성공 피드백이 약함 | 사용자가 복사됐는지 확신하기 어렵다 | 버튼 상태와 toast를 명확히 |
| 품질 검사 프롬프트의 사용법이 덜 직관적임 | 사용자가 모든 시안을 검사해야 하는지 헷갈림 | "최종 후보 하나에 순서대로 사용"이라고 설명 |
| 배포/업데이트가 별도 문서처럼 분리됨 | 나중에 사이트를 수정할 때 다시 헷갈림 | compact update section 제공 |
| 언어 규칙이 약함 | Stitch가 영어 UI를 만들 수 있음 | 모든 Stitch 프롬프트와 UI 요구사항에 한국어 출력 규칙 포함 |

## 9. Unknowns And Assumptions

| 항목 | 가정 | 위험 | 사용자 결정 필요 |
|---|---|---|---|
| 디자인 레퍼런스 | 사용자가 Stitch에서 별도 사이트 캡처를 제공함 | 없으면 스타일이 generic해질 수 있음 | 예 |
| Step 03 제품 유형 | 프로젝트마다 바뀜 | placeholder를 그대로 두면 품질이 떨어짐 | 예 |
| 사이트 범위 | 현재는 한 페이지 runbook + source md 링크 | 기능이 늘면 탭/검색이 필요할 수 있음 | 나중 |
| 배포 방식 | GitHub Pages public repo | 다른 계정/환경에서는 인증 절차가 다름 | 나중 |
| 언어 | 한국어 UI가 기본 | 영어 prompt가 섞이면 영어 결과가 나올 수 있음 | 아니오, 한국어 고정 |

## 10. Content Requirements

새 UI는 다음 콘텐츠 그룹을 포함해야 한다.

1. 핵심 미션:
   - 제품 의미와 디자인 감성을 분리해서 Stitch에 넘긴다.
2. 두 라인 workflow:
   - 제품 의미 라인: Codex 프로젝트 -> Semantic Rebuild Brief -> Stitch 제품 UI
   - 디자인 감성 라인: 레퍼런스 캡처 -> DESIGN.md/design system
   - 결합: DESIGN.md를 제품 UI에 적용 -> 품질 검사 -> zip -> Codex 통합
3. 단계별 prompt card:
   - 01 Codex: Semantic Rebuild Brief 만들기
   - 02 Stitch: 제품 UI 예시 만들기
   - 03 Stitch: 레퍼런스 이미지에서 DESIGN.md 만들기
   - 04 Stitch: DESIGN.md를 UI에 적용하기
   - 05 Stitch: 품질 검사
   - 06 Codex: Stitch zip 통합하기
4. Copy-ready prompt body.
5. 원본 markdown 링크.
6. GitHub Pages 업데이트/배포 섹션.
7. 핵심 guardrail:
   - 기존 Codex UI는 제품 의미 증거일 뿐.
   - 레퍼런스 이미지는 디자인 시스템 증거일 뿐.
   - Stitch zip은 구현 재료일 뿐.
   - 모든 사용자-facing UI 문구는 한국어.

## 11. Success Criteria

성공한 새 프론트엔드는 다음을 만족한다.

- 사용자가 오래된 채팅을 읽지 않고도 워크플로우를 시작할 수 있다.
- 각 단계가 다음 질문에 답한다:
  - 지금 어디인가?
  - 어떤 도구를 쓰는가?
  - 필요한 입력은 무엇인가?
  - 무엇을 붙여넣는가?
  - 어떤 결과가 나와야 하는가?
  - 다음은 무엇인가?
- 프롬프트 복사가 명확하고 신뢰 가능하다.
- 긴 프롬프트가 페이지를 압도하지 않는다.
- 제품 의미 라인과 디자인 감성 라인이 즉시 이해된다.
- 기존 Codex UI의 시각 스타일을 물려받지 않는다.
- 레퍼런스 사이트의 레이아웃/브랜드를 복사하지 않는다.
- 한국어 UI로 생성된다.
- 데스크톱과 모바일에서 모두 쓸 수 있다.
- source markdown과 배포/업데이트 안내가 계속 접근 가능하다.

## 12. Stitch Initial Summary

Stitch에 시작할 때 전체 brief와 함께 이 요약을 붙여라.

```text
GitHub Pages에 배포되는 Stitch workflow guide의 새로운 정적 웹앱 콘셉트를 만들어줘.

언어 규칙:
모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성해.
Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 고유명사는 영어를 유지해도 돼.

이 사이트는 마케팅 랜딩페이지가 아니다.
Codex와 Google Stitch를 반복적으로 사용해 프론트엔드를 재작업하는 사용자를 위한 실전 runbook / prompt tool이다.

핵심 경험은 두 라인 workflow를 명확히 보여주는 것이다.
1. 제품 의미 라인: Codex 프로젝트 -> Semantic Rebuild Brief -> Stitch 제품 UI.
2. 디자인 감성 라인: 레퍼런스 캡처 -> DESIGN.md/design system.
그다음 둘을 결합한다: DESIGN.md를 제품 UI에 적용 -> 품질 검사 -> zip 다운로드 -> Codex 통합.

각 단계는 copy-ready해야 한다.
- 단계 번호
- 대상 도구: Codex 또는 Stitch
- 필요한 입력
- 복사할 프롬프트
- 기대 결과
- 다음 행동
- guardrail warning

기존 Codex가 만든 현재 페이지는 시각 참조로 쓰지 마.
현재 페이지에서는 제품 목적, workflow, prompt, copy action, source file, deployment instruction, 피해야 할 anti-pattern만 추출해.

조밀하지만 친절한 workflow tool로 새 UI 콘셉트를 만들어줘.
데스크톱/모바일 화면, copy 성공/실패 상태, source file 접근, GitHub Pages 업데이트 섹션을 포함해.
```

