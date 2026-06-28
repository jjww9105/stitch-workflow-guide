# Semantic Rebuild Brief

## 0. Coverage Inventory

### 전체 탭 목록

| 탭/영역 | 필수 여부 | 기존 UI에서 확인한 기능적 존재 | 새 UI에서 재해석해야 하는 방식 |
|---|---|---|---|
| 시작/개요 | 필수 | 사이트 첫 화면에서 워크플로우 목적을 설명한다. | 마케팅 히어로가 아니라 "지금 무엇을 해야 하는지"를 보여주는 실행 시작 화면으로 재구성한다. |
| 따라 할 순서 | 필수 | Step 1~6 순서를 보여준다. | 전체 화면 커버리지 중심의 단계형 실행 지도/stepper로 재구성한다. |
| 단계별 프롬프트 | 필수 | 01~06 프롬프트와 Copy 버튼을 제공한다. | 각 프롬프트의 사용 위치, 입력물, 기대 결과, 다음 행동을 함께 보여주는 작업 패널로 만든다. |
| 품질 검사 | 필수 | Step 05 안에 여러 검사 프롬프트가 있다. | 화면 커버리지 검사를 첫 검사로 배치하고, 각 검사를 목적별 도구처럼 선택하게 한다. |
| 원본 md 백업 | 필수 | `source-md` 원본 문서 링크를 제공한다. | 원본 파일 역할, 붙이는 곳, 사용 시점을 명확히 보여준다. |
| GitHub Pages 배포/백업 | 보조 | 배포 안내 문서와 링크가 있다. | 메인 워크플로우를 방해하지 않는 보조 관리 화면으로 낮춘다. |

### 전체 라우트/페이지 목록

| 라우트/페이지 | 필수 여부 | 목적 | 새 UI 요구사항 |
|---|---|---|---|
| `/` 메인 가이드 | 필수 | 전체 워크플로우 실행 | 전체 단계, 현재 할 일, 프롬프트 복사, 커버리지 검사 접근을 한 화면 흐름 안에 제공 |
| `/source-md/00_START_HERE.md` | 필수 | 상세 사용 설명 | 사이트 안에서도 요약되어야 하며, 원본 링크로 접근 가능해야 함 |
| `/source-md/01_codex_make_semantic_brief_prompt.md` | 필수 | Codex용 Brief 생성 프롬프트 | Step 01과 동일한 본문을 유지해야 함 |
| `/source-md/02_stitch_make_product_ui_prompt.md` | 필수 | Stitch 전체 화면 세트 생성 프롬프트 | Step 02와 동일한 본문을 유지해야 함 |
| `/source-md/03_stitch_make_design_md_from_reference_prompt.md` | 필수 | DESIGN.md 생성 프롬프트 | Step 03과 동일한 본문을 유지해야 함 |
| `/source-md/04_stitch_apply_design_md_to_ui_prompt.md` | 필수 | DESIGN.md 전체 적용 프롬프트 | Step 04와 동일한 본문을 유지해야 함 |
| `/source-md/05_stitch_quality_check_prompts.md` | 필수 | 품질 검사 프롬프트 묶음 | Step 05 검사 카드와 동일한 본문을 유지해야 함 |
| `/source-md/06_codex_integrate_stitch_zip_prompt.md` | 필수 | Codex zip 통합 프롬프트 | Step 06과 동일한 본문을 유지해야 함 |
| `/source-md/07_ONE_PAGE_CHEATSHEET.md` | 필수 | 빠른 복구용 치트시트 | 사이트 안에서 "빠른 보기" 형태로도 접근 가능하면 좋음 |
| `/stitch-handoff/semantic-rebuild-brief.md` | 필수 | Stitch에 붙여넣을 제품 맥락 파일 | 이 문서 전체를 바로 복사하거나 열 수 있어야 함 |
| `/README_DEPLOY_GITHUB_PAGES.md` | 보조 | 배포/업데이트 안내 | 메인 작업 흐름과 분리된 보조 자료로 제공 |

### 전체 핵심 화면 목록

| 화면 | 필수 여부 | 기능적 존재 | Stitch가 반드시 만들어야 하는 상태 |
|---|---|---|---|
| 실행 시작 화면 | 필수 | 사이트 목적, 핵심 규칙, 첫 CTA | loading, success |
| 전체 워크플로우 지도 | 필수 | 제품 의미 라인, 디자인 감성 라인, zip 통합 라인 | empty, success |
| Step 01 상세 화면 | 필수 | Codex용 Semantic Rebuild Brief 프롬프트 | copy success, copy error, permission |
| Step 02 상세 화면 | 필수 | Stitch 전체 화면 세트 생성 프롬프트 | copy success, copy error, empty |
| Step 03 상세 화면 | 필수 | 레퍼런스 이미지 기반 DESIGN.md 생성 프롬프트 | validation, copy success |
| Step 04 상세 화면 | 필수 | 전체 화면 세트에 DESIGN.md 적용 프롬프트 | copy success, incomplete coverage |
| Step 05 품질 검사 화면 | 필수 | 화면 커버리지, 오염, 과복사, 상태, DESIGN.md, 반응형 검사 | empty, incomplete, success |
| Step 06 zip 통합 화면 | 필수 | Stitch zip을 Codex 프로젝트에 통합하는 프롬프트 | validation, empty zip path, success |
| 원본 자료 화면 | 필수 | source-md 링크와 역할 설명 | loading, link error, success |
| 배포/백업 화면 | 보조 | GitHub Pages 배포와 zip 백업 안내 | loading, error, success |

### 보조 화면 목록

| 보조 화면/상호작용 | 유형 | 필수 여부 | 목적 |
|---|---|---|---|
| 프롬프트 상세 보기 | drawer/detail | 필수 | 긴 프롬프트를 읽고 Copy하기 쉽게 분리 |
| Copy 결과 알림 | state/toast | 필수 | 복사 성공/실패를 한국어로 안내 |
| 화면 커버리지 검사 결과 | state/detail | 필수 | 만든 화면과 남은 화면을 추적 |
| 제품 유형 입력 안내 | validation/help | 필수 | DESIGN.md 생성 시 placeholder를 놓치지 않게 함 |
| zip 경로 입력 안내 | validation/help | 필수 | Codex 통합 단계에서 실제 zip 경로를 넣게 함 |
| 원본 md 링크 오류 | error state | 필수 | 파일 링크 실패 시 복구 경로 안내 |
| 모바일 단계 네비게이션 | responsive navigation | 필수 | 작은 화면에서 단계 이동을 쉽게 함 |

### Stitch가 반드시 만들어야 하는 화면과 상태

- 실행 시작 화면
- 전체 워크플로우 지도
- Step 01~06 상세 화면
- Step 05 품질 검사 도구 화면
- 원본 md 자료 화면
- GitHub Pages 배포/백업 보조 화면
- Copy success / Copy error
- loading / empty / error / success / permission / validation
- 화면 커버리지 부족 상태
- DESIGN.md 적용 미완료 상태
- zip 경로 누락 상태

### 기존 Codex UI에서 절대 가져오면 안 되는 시각 요소

- 현재 레이아웃
- 현재 색상
- 현재 폰트
- 현재 카드 모양
- 현재 버튼 모양
- 현재 프롬프트 박스 스타일
- 현재 섹션 순서
- 현재 정보 위계
- 현재 여백
- 현재 장식
- 현재 탭/섹션 배치 방식

## 1. Product Snapshot

### 제품명

Stitch Workflow Guide

### 한 줄 목적

Codex 프로젝트의 제품 의미와 전체 화면 커버리지를 추출하고, Google Stitch에서 전체 화면 세트와 DESIGN.md를 결합해 실제 구현 가능한 새 프론트엔드 재료를 만들게 하는 한국어 실행 가이드 웹앱.

### 대상 사용자

- Codex와 Google Stitch를 함께 사용해서 기존 프로젝트의 프론트엔드를 새로 만들려는 개인 프로젝트 소유자.
- 몇 달 뒤 같은 절차를 다시 복구해야 하는 미래의 사용자 본인.
- 링크만 받고 절차를 이해해야 하는 Codex 에이전트나 협업자.

### 사용자가 해결하려는 문제

- Stitch가 예쁜 일부 화면만 만들고 전체 앱 구조를 빠뜨릴 수 있다.
- 어떤 프롬프트를 Codex에 붙이고 어떤 프롬프트를 Stitch에 붙여야 하는지 헷갈린다.
- 기존 Codex UI를 시각 참고자료로 착각하면 새 UI가 기존 UI의 구린 구조와 스타일에 오염된다.
- 레퍼런스 이미지를 잘못 쓰면 DESIGN.md가 아니라 원본 사이트 복제물이 나온다.
- Stitch zip을 실제 프로젝트에 통합할 때 전체 탭/라우트/화면 커버리지가 깨질 수 있다.

### 제품이 반드시 도와야 하는 일

- 전체 화면/탭/라우트 인벤토리를 만들게 한다.
- Stitch가 전체 화면 세트를 만들게 한다.
- 한 번에 다 못 만들면 배치로 나누고 만든 화면/남은 화면을 추적하게 한다.
- DESIGN.md가 전체 화면 세트에 적용되게 한다.
- 화면 커버리지 검사를 포함한다.
- Stitch zip 통합 시 일부 화면만 가져오는 실수를 막는다.
- 모든 사용자-facing UI를 한국어로 유지한다.

### 언어 규칙

- 최종 UI는 한국어다.
- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성한다.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/파일명/고유명사는 영어를 유지해도 된다.
- 영어 UI로 생성하지 않는다.

## 2. Users And Jobs

| 사용자 유형 | 사용자가 처한 상황 | 해야 할 일 | 성공 기준 | 실패 기준 |
|---|---|---|---|---|
| 프로젝트 소유자 | GitHub Pages 사이트의 현재 프론트엔드가 마음에 들지 않고 Stitch로 새 UI를 만들고 싶다. | 이 Brief와 Step 02 프롬프트를 Stitch에 넣어 전체 화면 세트를 만든다. | 전체 워크플로우와 모든 Step 화면이 빠짐없이 설계된다. | 일부 대표 화면만 만들어져 실제 구현 재료로 부족하다. |
| 미래의 사용자 본인 | 시간이 지나 워크플로우를 잊었다. | 사이트를 열고 다음 행동을 복구한다. | Step별 입력물, 출력물, Copy 대상, 다음 행동이 바로 보인다. | 이전 채팅이나 여러 md 파일을 다시 뒤져야 한다. |
| 레퍼런스 디자인 사용자 | 마음에 드는 사이트 캡처에서 디자인 감성을 가져오고 싶다. | Step 03으로 DESIGN.md를 만들고 Step 04로 전체 화면 세트에 적용한다. | 원본 사이트 복제 없이 디자인 시스템만 전체 화면에 적용된다. | 원본 레이아웃/브랜드/문구를 과하게 복사한다. |
| 통합 단계 사용자 | Stitch zip을 받았다. | Step 06으로 Codex에게 실제 프로젝트 통합을 시킨다. | 기존 기능은 보존되고 전체 화면 커버리지 기준으로 통합된다. | zip 일부만 붙여넣거나 기존 기능이 깨진다. |
| 협업자/에이전트 | 사이트 링크만 받았다. | 각 파일과 Step의 역할을 파악한다. | Codex용/Stitch용 프롬프트를 혼동하지 않는다. | 잘못된 도구에 프롬프트를 붙인다. |

## 3. Core Workflows

### Workflow A. 전체 앱 재생성 브릿지

- 주요 사용자 흐름: 현재 사이트를 새로운 프론트엔드로 만들기 위한 전체 화면 세트를 Stitch에서 생성한다.
- 시작 지점: 사용자가 GitHub Pages 사이트 또는 이 Brief 파일을 연다.
- 단계:
  1. 현재 사이트를 디자인 참고가 아니라 제품 의미 자료로만 본다.
  2. 전체 화면/탭/라우트 인벤토리를 확인한다.
  3. Stitch에 이 Brief 전체를 붙인다.
  4. 구분선 뒤에 Step 02 프롬프트를 붙인다.
  5. Stitch가 전체 화면 커버리지 표를 먼저 만든다.
  6. Stitch가 전체 화면 세트를 만든다.
  7. 한 번에 다 못 만들면 Batch 1, Batch 2로 이어가며 만든 화면/남은 화면을 추적한다.
- 성공 상태: 전체 워크플로우, Step 01~06, 품질 검사, 원본 자료, 배포/백업 화면이 누락 없이 설계된다.
- 에러/막힘 상태:
  - Stitch가 대표 화면만 만든다.
  - 기존 사이트의 시각 스타일을 따라 한다.
  - 영어 UI를 만든다.
  - Step 05 커버리지 검사를 빠뜨린다.
- 복구 경로:
  - 화면 커버리지 검사 프롬프트 실행.
  - "아직 남은 화면" 기준으로 다음 Batch 생성.
  - 기존 Codex UI 오염 검사 실행.
  - 한국어 UI 규칙 재지시.
- 이 흐름에 필요한 모든 화면/탭/라우트:
  - 시작/개요
  - 전체 워크플로우 지도
  - Step 01~06 상세 화면
  - Step 05 품질 검사 화면
  - 원본 md 자료 화면
  - GitHub Pages 배포/백업 화면
  - `/source-md/*.md`
  - `/stitch-handoff/semantic-rebuild-brief.md`

### Workflow B. 프롬프트 복사와 실행

- 주요 사용자 흐름: 사용자가 단계별 프롬프트를 복사해 Codex 또는 Stitch에 붙인다.
- 시작 지점: 사용자가 특정 Step을 연다.
- 단계:
  1. 사용 위치를 확인한다: Codex 또는 Stitch.
  2. 필요한 입력물을 확인한다.
  3. 프롬프트 본문을 확인한다.
  4. Copy 버튼으로 복사한다.
  5. 해당 도구에 붙여넣는다.
  6. 기대 결과와 다음 단계를 확인한다.
- 성공 상태: 잘린 프롬프트 없이 전체 본문이 복사된다.
- 에러/막힘 상태:
  - Clipboard 권한 문제.
  - 원본 md와 화면 본문 불일치.
  - 잘못된 도구에 붙여넣음.
- 복구 경로:
  - 직접 선택 복사 안내.
  - 원본 md 열기.
  - Copy 실패 상태 메시지.
- 이 흐름에 필요한 모든 화면/탭/라우트:
  - Step 상세 화면
  - Copy success/error 상태
  - source-md 원본 링크

### Workflow C. 레퍼런스 DESIGN.md 생성과 전체 적용

- 주요 사용자 흐름: 레퍼런스 이미지에서 디자인 시스템을 만들고 전체 화면 세트에 적용한다.
- 시작 지점: 사용자가 Stitch에 레퍼런스 이미지를 올린다.
- 단계:
  1. Step 03으로 DESIGN.md를 만든다.
  2. 원본 사이트 레이아웃/브랜드/문구를 복사하지 않았는지 확인한다.
  3. 전체 화면 세트와 DESIGN.md를 선택한다.
  4. Step 04로 DESIGN.md를 전체 화면 세트에 적용한다.
  5. 적용 완료 화면과 남은 화면을 추적한다.
- 성공 상태: 전체 화면 세트가 같은 디자인 시스템을 따른다.
- 에러/막힘 상태:
  - 한 화면만 스타일이 바뀐다.
  - 레퍼런스 사이트를 과복사한다.
  - 상태 화면이 DESIGN.md를 따르지 않는다.
- 복구 경로:
  - DESIGN.md 준수 검사.
  - 레퍼런스 과복사 검사.
  - DESIGN.md 적용 커버리지 표 확인.
- 이 흐름에 필요한 모든 화면/탭/라우트:
  - Step 03
  - Step 04
  - Step 05 DESIGN.md 준수 검사

### Workflow D. Stitch zip 통합

- 주요 사용자 흐름: Stitch 결과 zip을 실제 프로젝트에 통합한다.
- 시작 지점: 사용자가 Stitch에서 zip을 다운로드했다.
- 단계:
  1. 실제 제품 프로젝트를 Codex에서 연다.
  2. zip 경로와 Step 06 프롬프트를 붙인다.
  3. Codex가 기존 프로젝트 구조와 zip 구조를 비교한다.
  4. 전체 화면/탭/라우트 커버리지 기준으로 통합한다.
  5. 빌드/테스트를 실행한다.
- 성공 상태: 새 UI가 실제 프로젝트 구조에 맞게 통합된다.
- 에러/막힘 상태:
  - zip을 그대로 덮어쓴다.
  - 일부 예쁜 화면만 통합한다.
  - 기존 기능/라우팅/데이터 흐름이 깨진다.
- 복구 경로:
  - 커버리지 비교.
  - 기존 기능 보존 확인.
  - 빌드/테스트 오류 수정.
- 이 흐름에 필요한 모든 화면/탭/라우트:
  - Step 06
  - zip 경로 validation
  - 통합 체크리스트

## 4. Screen Goal Cards

| 화면 이름 | 화면 유형 | 사용자 목표 | 제품 목표 | 핵심 콘텐츠 | 주요 액션 | 보조 액션 | 필요한 상태 | 이 화면이 누락되면 깨지는 사용자 흐름 |
|---|---|---|---|---|---|---|---|---|
| 시작/현재 작업 화면 | route/section | 지금 무엇을 해야 하는지 즉시 이해 | 실행형 도구임을 첫 화면에서 전달 | 한 줄 목적, 절대 규칙, 첫 단계 CTA, 전체 화면 커버리지 강조 | Step 01 또는 Step 02로 이동 | 치트시트 열기 | loading / success | 사용자가 사이트를 마케팅 페이지로 오해하고 작업을 시작하지 못함 |
| 전체 워크플로우 지도 | section | 전체 순서를 머릿속에 복구 | 제품 의미 라인, 디자인 감성 라인, 통합 라인 분리 | Brief -> 전체 화면 세트 -> DESIGN.md -> 품질 검사 -> zip 통합 | 단계 선택 | 전체 흐름 복사 | empty / success | Step 순서와 도구 사용 위치를 혼동함 |
| Step 01 Brief 생성 | tab/detail | Codex에서 제품 의미와 화면 인벤토리 생성 | Stitch 입력의 기준 문서 확보 | 사용 위치, 입력물, 프롬프트, 기대 결과 | Copy | 원본 md 열기 | copy success / copy error / permission | 전체 화면 인벤토리 없이 Stitch가 일부 화면만 생성함 |
| Step 02 전체 화면 세트 생성 | tab/detail | Stitch에서 전체 화면 세트 생성 | 대표 화면 몇 개로 끝나는 실패 방지 | 화면 커버리지 표, Batch 규칙, 만든 화면/남은 화면 추적 | Copy | 원본 md 열기 | empty / success / incomplete | 전체 탭/라우트가 빠진 채 디자인만 생성됨 |
| Step 03 DESIGN.md 생성 | tab/detail | 레퍼런스 이미지에서 디자인 시스템 생성 | 원본 사이트 복제 방지 | 추출 가능 항목, 복사 금지 항목, 제품 유형 placeholder | Copy | 제품 유형 확인 | validation / success | 디자인 시스템 없이 화면마다 스타일이 달라짐 |
| Step 04 DESIGN.md 전체 적용 | tab/detail | 전체 화면 세트에 DESIGN.md 적용 | 앱 전체 스타일 일관성 확보 | 적용 규칙, 커버리지 표, 남은 화면 | Copy | 원본 md 열기 | incomplete / success | 일부 화면만 스타일이 바뀌고 전체 앱 일관성이 깨짐 |
| Step 05 품질 검사 | tab/detail | 누락 화면과 품질 문제 확인 | Stitch 결과의 구현 가능성 확보 | 커버리지, 오염, 과복사, 상태, DESIGN.md, 반응형 검사 | 검사 프롬프트 Copy | 필요한 검사만 선택 | empty / error / success | 누락 화면이나 기존 UI 오염을 놓침 |
| Step 06 zip 통합 | tab/detail | Stitch zip을 실제 프로젝트에 통합 | 기존 기능 보존 + 새 UI 통합 | zip 경로, 커버리지 비교, 통합 규칙 | Copy | zip 경로 입력 | validation / empty / error / success | zip을 그대로 덮어써 기능이 깨짐 |
| 원본 md 자료 | route/support | 원본 문서 접근 | 프롬프트 본문 신뢰성 확보 | source-md 파일 목록, 각 파일 역할 | 원본 열기 | 치트시트 열기 | loading / error / success | 화면의 Copy 본문이 의심될 때 복구 불가 |
| 배포/백업 안내 | route/support | 사이트 수정 후 다시 배포 | GitHub Pages 유지보수 지원 | 배포 방법, public repo 주의, zip 백업 | 배포 안내 열기 | 백업 경로 확인 | loading / error / success | 사이트 업데이트 후 공개 URL 반영을 못함 |
| Copy 결과 상태 | state | 복사 성공 여부 확인 | 사용자의 다음 행동 확신 | 성공/실패 토스트, 버튼 상태 | 다시 Copy | 직접 선택 복사 | success / error / permission | 사용자가 붙여넣기 전에 복사 여부를 모름 |

## 5. Data And State Matrix

| 데이터 엔티티 | 필드 | 어디에 표시되는지 | 사용자가 할 수 있는 액션 | loading / empty / error / success / permission / validation 상태 | 이 데이터가 필요한 화면 목록 |
|---|---|---|---|---|---|
| WorkflowStep | id, 번호, 제목, 사용 위치, 입력물, 출력물, 다음 단계, 위험 요소 | 워크플로우 지도, Step 상세 화면 | 단계 선택, 이전/다음 이동 | loading: 단계 로딩 / empty: 단계 없음 / error: 단계 누락 / success: 단계 표시 / permission: 해당 없음 / validation: 필수 입력 누락 | 시작 화면, 워크플로우 지도, Step 01~06 |
| PromptBlock | id, 제목, 본문, source-md 경로, 도구, 한국어 규칙, Copy 대상 | Step 상세 화면, 품질 검사 화면 | Copy, 원본 md 열기 | loading: 본문 로딩 / empty: 본문 없음 / error: 본문 누락 / success: 복사 완료 / permission: Clipboard 제한 / validation: placeholder 미수정 | Step 01~06, 품질 검사 |
| ScreenInventory | 화면명, 유형, 필수 여부, 관련 흐름, 필요한 상태, 누락 위험 | Step 01, Step 02, Step 05 | 커버리지 확인, 다음 Batch 요청 | loading: 인벤토리 로딩 / empty: 인벤토리 없음 / error: 누락 발견 / success: 충분함 / permission: 해당 없음 / validation: 화면 유형 미분류 | Step 01, Step 02, 화면 커버리지 검사 |
| BatchTracker | 만든 화면, 남은 화면, 다음 배치, 아직 생성되지 않은 상태 | Step 02, Step 04, Step 05 | 다음 Batch 생성, 남은 화면 확인 | loading: 생성 중 / empty: Batch 없음 / error: 남은 화면 불명확 / success: 추적 가능 / permission: 해당 없음 / validation: 남은 화면 목록 누락 | Step 02, Step 04, 품질 검사 |
| DesignSystemBrief | color token, typography, spacing, component rules, state rules, do/don't | Step 03, Step 04, DESIGN.md 검사 | DESIGN.md 생성, 전체 적용 | loading: 생성 중 / empty: DESIGN.md 없음 / error: 과복사 / success: 적용 가능 / permission: 해당 없음 / validation: 제품 유형 누락 | Step 03, Step 04, Step 05 |
| QualityCheck | 검사명, 목적, 사용 시점, 프롬프트 본문, 기대 결과 | Step 05 | 검사 Copy, 검사 선택 | loading: 검사 로딩 / empty: 검사 없음 / error: 검사 실패 / success: 검사 완료 / permission: Clipboard 제한 / validation: 검사 대상 미선택 | Step 05 |
| SourceFile | 파일명, 경로, 역할, 붙이는 곳, 공개 URL | 원본 md 자료 화면 | 원본 열기, 링크 공유 | loading: 파일 목록 로딩 / empty: source-md 없음 / error: 링크 깨짐 / success: 열림 / permission: 해당 없음 / validation: 파일 역할 없음 | 자료 화면, Step 상세 |
| HandoffPackage | Semantic Brief, 전체 화면 세트, DESIGN.md, 품질 검사 결과, zip 경로 | Step 06 | Codex 통합 요청 | loading: zip 준비 중 / empty: zip 없음 / error: 경로 불명확 / success: 통합 준비 / permission: 로컬 파일 접근 제한 / validation: zip 경로 누락 | Step 06 |
| CopyEvent | target id, 복사 텍스트, 성공 여부, 오류 메시지 | 토스트, 버튼 상태 | 다시 Copy, 직접 선택 | loading: 복사 중 / empty: 대상 없음 / error: 복사 실패 / success: 복사 완료 / permission: Clipboard 제한 / validation: 해당 없음 | 모든 Copy 버튼 |

## 6. Interaction Requirements

### 네비게이션

- 전체 워크플로우를 한 페이지에서 볼 수 있어야 한다.
- 사용자는 현재 단계, 이전 단계, 다음 단계를 즉시 알아야 한다.
- Codex용, Stitch용, GitHub Pages용, 실제 제품 프로젝트용 작업이 명확히 구분되어야 한다.
- 모바일에서는 stepper 또는 compact navigation이 필요하다.
- 영어 메뉴보다 한국어 메뉴를 우선한다. 고유명사만 영어 유지 가능.

### 탭/라우트 전환

- Step 01~06은 개별 작업 화면처럼 접근 가능해야 한다.
- 사용자가 특정 단계만 열어도 사용 위치, 입력물, 출력물, 다음 행동을 이해해야 한다.
- 원본 md 링크는 보조 경로로 남긴다.
- `/stitch-handoff/semantic-rebuild-brief.md`는 Stitch에 붙여넣을 맥락 파일로 접근 가능해야 한다.

### CTA

- 각 Step의 주요 CTA는 Copy다.
- Step 02와 Step 05에서는 "화면 커버리지"가 핵심 행동임을 강조한다.
- Step 03에는 제품 유형 placeholder를 확인하라는 보조 CTA가 필요하다.
- Step 06에는 zip 경로를 넣으라는 validation 안내가 필요하다.

### 폼/검증

- 복잡한 계정/저장 폼은 필요 없다.
- 필요한 입력은 제품 유형, zip 경로, 현재 Batch 메모 정도다.
- placeholder를 그대로 두면 validation 상태를 보여준다.
- Copy 실패 시 직접 선택 복사 방법을 안내한다.

### 검색/필터/정렬

- 프롬프트가 많으므로 도구 기준 필터가 유용하다: Codex / Stitch / 품질 검사 / 배포.
- 검색어 예: DESIGN.md, 화면 커버리지, Batch, zip, 한국어, 오염 검사.
- 정렬은 기본적으로 실행 순서를 따른다.

### 모달/드로어

- 긴 프롬프트는 상세 drawer나 확장 패널로 열 수 있다.
- 다만 Copy 전에는 전체 본문을 확인할 수 있어야 한다.
- 품질 검사 프롬프트는 각 검사 목적과 본문을 분리해서 보여준다.

### 반응형 요구사항

- 긴 프롬프트가 모바일에서 가로 스크롤로 깨지지 않아야 한다.
- 버튼 텍스트가 좁은 화면에서 잘리지 않아야 한다.
- Step navigation이 작은 화면에서 과하게 길어지면 접힘/요약 상태가 필요하다.
- 텍스트와 컨트롤이 겹치지 않아야 한다.

## 7. Anti-Patterns From Current UI

| 현재 UI에서 버려야 할 문제 | 왜 문제인지 | 새 UI에서는 어떻게 해결해야 하는지 |
|---|---|---|
| landing page처럼 보이는 첫 화면 | 사용자는 설득보다 즉시 실행이 필요하다. | 첫 화면을 "현재 할 일" 중심의 실행 대시보드로 구성한다. |
| 영어 메뉴와 한국어 본문 혼합 | Stitch가 영어 UI를 기본값으로 만들 수 있다. | 모든 메뉴/버튼/상태 문구는 한국어를 기본으로 한다. |
| 프롬프트가 긴 textarea 안에만 있음 | 읽기 어렵고 모바일에서 조작이 불편하다. | 요약, 사용법, 본문, Copy 버튼을 분리한다. |
| Step 05 검사가 도구처럼 보이지 않음 | 사용자가 어떤 검사를 언제 써야 할지 헷갈린다. | 커버리지 검사를 첫 번째로 두고, 검사별 목적/사용 시점을 보여준다. |
| 원본 md 역할이 약하게 보임 | Copy 본문과 원본의 관계를 신뢰하기 어렵다. | 파일 역할, 붙이는 곳, 사용 시점을 같이 보여준다. |
| 배포 안내가 메인 흐름과 같은 밀도로 섞임 | 핵심 작업 흐름을 흐릴 수 있다. | 배포/백업은 보조 관리 화면으로 분리한다. |
| 기존 사이트의 카드/여백/색감에 끌려갈 위험 | 새 UI가 기존 구린 프론트엔드를 따라가게 된다. | 기존 UI는 기능/커버리지 추출 자료로만 제한한다. |
| 전체 화면 커버리지 부족 위험 | 일부 화면만 만들어져 실제 구현 재료가 부족하다. | Step 02와 Step 05에서 화면 커버리지 표와 남은 화면 추적을 필수화한다. |
| DESIGN.md가 한 화면에만 적용될 위험 | 전체 앱 일관성이 깨진다. | Step 04에서 전체 화면 세트 적용과 적용 커버리지 표를 요구한다. |

## 8. Unknowns And Assumptions

### 확실하지 않은 점

- 최종 새 사이트가 단일 페이지 runbook인지, 단계별 앱/마법사형 UI인지 아직 확정되지 않았다.
- 레퍼런스 디자인 방향은 사용자가 별도로 제공해야 한다.
- Stitch가 export할 코드 구조는 생성 전까지 알 수 없다.
- 진행률 저장이나 로컬 메모 기능이 필요한지 확정되지 않았다.
- GitHub Pages 배포 안내를 메인 화면에 얼마나 노출할지 확정되지 않았다.

### 추정한 점

- 사용자는 이 사이트를 반복적으로 열어보는 실행 도구로 쓴다.
- 최종 UI는 한국어여야 한다.
- 공개 GitHub Pages 사이트이므로 민감한 프로젝트 정보는 넣지 않는다.
- Stitch 결과는 그대로 배포하지 않고 Codex가 실제 프로젝트에 통합한다.
- Step 02 결과는 예쁜 샘플이 아니라 전체 화면 설계 재료여야 한다.

### 사용자 확인이 필요한 점

- 새 UI는 한 페이지 전체 펼침형이 좋은가, 단계별 마법사형이 좋은가?
- 진행률 저장/완료 체크 기능이 필요한가?
- 프롬프트를 사이트에서 직접 편집 후 Copy하는 기능이 필요한가?
- 레퍼런스 디자인은 업무용 SaaS, 개발자 도구, 문서형 앱, 대시보드형 앱 중 어디에 가까운가?
- 배포/백업 안내는 메인 흐름에서 얼마나 보여야 하는가?

### 화면/탭/라우트 커버리지에서 불확실한 점

- 현재는 정적 사이트라 실제 라우트는 적지만, 새 UI에서는 Step별 route처럼 분리할 수 있다.
- 원본 md 파일을 별도 페이지로 유지할지, 사이트 안에서 읽기 좋은 뷰어로 제공할지 결정되지 않았다.
- 품질 검사 결과를 저장하는 화면이 필요한지 확정되지 않았다.
- Batch 진행 상태를 저장할지, 사용자가 Stitch에서만 추적할지 확정되지 않았다.

## Stitch에 처음 넣을 때 사용할 짧은 요약

GitHub Pages에 배포된 `Stitch Workflow Guide`를 위한 완전히 새로운 한국어 프론트엔드 전체 화면 세트를 만들어줘.

기존 사이트 UI는 시각 참고자료가 아니다. 기존 레이아웃, 색상, 폰트, 카드, 버튼, 여백, 장식, 정보 위계, 탭/섹션 배치 방식은 절대 보존하지 마. 기존 사이트에서는 제품 목적, 기능, 프롬프트 구조, 단계별 작업 의도, 전체 화면/탭/라우트 커버리지, 데이터 상태, 누락 상태, anti-pattern만 추출해.

이 제품은 Codex와 Google Stitch를 함께 써서 새 프론트엔드를 만드는 과정을 안내하는 실행형 runbook / prompt tool이다. 사용자는 Step 01부터 Step 06까지 따라가며 Semantic Rebuild Brief 생성, 전체 화면 세트 생성, 레퍼런스 이미지 기반 DESIGN.md 생성, DESIGN.md 전체 적용, 화면 커버리지 검사, Stitch zip의 Codex 통합을 진행한다.

최종 UI는 한국어여야 한다. 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성해. Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 고유명사는 영어를 유지해도 된다. 영어 UI로 만들지 마.

새 UI는 마케팅 랜딩페이지가 아니라, 사용자가 실제 작업 중 켜놓고 따라 할 수 있는 단계별 워크플로우 도구여야 한다. 먼저 화면 커버리지 표를 만들고, 시작 화면, 워크플로우 지도, Step 01~06 상세 화면, 품질 검사 화면, 원본 md 자료 화면, 배포/백업 보조 화면, Copy 성공/실패/권한/validation 상태를 포함한 전체 화면 세트를 만들어줘. 한 번에 다 못 만들면 Batch로 나누고, 만든 화면과 아직 남은 화면을 명확히 표시해줘.
