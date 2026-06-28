# Stitch Reference Design Workflow

이 문서는 실제로 사용한 개선판 워크플로우다.

기존 `2_output/stitch-research/00_easy-usage-guide.md`는 기본형 설명이고, 이 폴더는 앞으로 주로 사용할 실전형이다.

## 한 문장 요약

제품 의미는 Codex 프로젝트에서 뽑고, 디자인 감성은 레퍼런스 사이트 캡처에서 뽑은 뒤, Stitch에서 둘을 합친다.

## 전체 구조

```text
제품 의미 라인:
Codex 프로젝트
-> Semantic Rebuild Brief
-> Stitch에서 제품 UI 예시 생성

디자인 감성 라인:
레퍼런스 사이트 캡처 이미지
-> Stitch에서 DESIGN.md / design system 생성

합치기:
Stitch의 제품 UI 예시 선택
-> 레퍼런스 기반 DESIGN.md 선택
-> DESIGN.md 기준으로 UI 재작업
-> zip 다운로드
-> Codex 프로젝트에 zip 전달
-> Codex가 실제 프론트엔드에 통합
```

## 용어 정리

| 말 | 뜻 |
|---|---|
| Semantic Rebuild Brief | 제품 의미 설명서. 제품 목적, 기능, 화면, 사용자 흐름, 데이터 상태를 정리한 문서 |
| DESIGN.md | 디자인 시스템 문서. 색상, 폰트, 여백, 버튼/카드/폼 스타일, 상태 규칙을 정리한 문서 |
| Stitch design system | Stitch 안에서 생기는 색상/폰트/스타일 규칙 묶음. 보통 DESIGN.md와 같은 역할로 보면 된다 |
| 레퍼런스 사이트 캡처 | 원하는 디자인 감성을 뽑기 위한 이미지. 레이아웃이나 브랜드를 복사하기 위한 것이 아니다 |
| Stitch zip | Stitch가 내보낸 코드 묶음. 그대로 덮어쓰는 최종 코드가 아니라 Codex가 프로젝트에 맞게 통합할 재료 |

## 실제 사용 순서

### Step 1. 제품 프로젝트 폴더를 연다

새 프론트엔드를 만들 실제 Codex 프로젝트 폴더를 연다.

예:

```text
C:\Users\JW AI\Desktop\Project\내제품
```

### Step 2. Codex에게 Semantic Rebuild Brief를 만들게 한다

제품 프로젝트의 Codex에게 아래 파일의 프롬프트를 붙여넣는다.

```text
01_codex_make_semantic_brief_prompt.md
```

결과물:

```text
Semantic Rebuild Brief
```

이 결과물은 제품 설명서다. 아직 디자인이 아니다.

### Step 3. Stitch에서 제품 UI 예시를 만든다

Stitch를 열고 아래 두 덩어리를 같이 붙여넣는다.

```text
[Codex가 만든 Semantic Rebuild Brief 전체]

---

[02_stitch_make_product_ui_prompt.md 내용]
```

결과물:

- 제품에 맞는 새 UI 예시
- 메인 화면
- 필요하면 모바일/데스크톱 방향
- 제품 구조에 맞는 프론트엔드 초안

이 단계의 목적은 스타일 완성이 아니다.  
목적은 제품 구조와 화면 구성을 Stitch가 이해하게 하는 것이다.

### Step 4. 레퍼런스 사이트 캡처를 올린다

Stitch에 원하는 디자인 감성의 사이트 캡처 이미지를 올린다.

중요:

- 이 이미지는 색감, 폰트 느낌, 여백감, 컴포넌트 분위기를 추출하기 위한 것이다.
- 원본 사이트의 레이아웃, 문구, 브랜드, 로고, 콘텐츠를 복사하기 위한 것이 아니다.

### Step 5. 레퍼런스 이미지에서 DESIGN.md를 만든다

Stitch에서 레퍼런스 이미지를 선택한 뒤 아래 파일의 프롬프트를 붙여넣는다.

```text
03_stitch_make_design_md_from_reference_prompt.md
```

결과물:

```text
레퍼런스 기반 DESIGN.md / Stitch design system
```

이 단계에서 생기는 것이 네가 말한 "색상이랑 폰트랑 해주는 그거"다.

### Step 6. 제품 UI 예시에 DESIGN.md를 적용한다

Stitch에서 Step 3에서 만든 제품 UI 예시 화면을 선택한다.

그 다음 Step 5에서 만든 DESIGN.md / design system을 선택한다.

그리고 아래 파일의 프롬프트를 붙여넣는다.

```text
04_stitch_apply_design_md_to_ui_prompt.md
```

결과물:

- 제품 의미는 유지됨
- 레퍼런스 기반 디자인 시스템이 적용됨
- 색상, 폰트, 여백, 컴포넌트 스타일이 바뀜
- 기존 Codex UI 스타일과 레퍼런스 사이트 원본 레이아웃은 복사하지 않음

### Step 7. 필요하면 오염 검사와 상태 보강을 한다

선택 사항이지만 추천한다.

아래 파일을 사용한다.

```text
05_stitch_quality_check_prompts.md
```

주로 확인할 것:

- 기존 Codex UI를 따라간 흔적이 있는가
- 레퍼런스 사이트를 너무 그대로 베꼈는가
- loading / empty / error 상태가 있는가
- 모바일/데스크톱이 괜찮은가
- DESIGN.md를 제대로 따르는가

### Step 8. Stitch 결과를 zip으로 다운로드한다

Stitch에서 다운로드한 zip은 최종 코드가 아니다.

역할:

```text
새 프론트엔드 구현 재료
```

### Step 9. zip을 Codex 프로젝트에 넘겨 실제 프론트엔드에 통합한다

제품 프로젝트의 Codex에게 zip을 주고 아래 파일의 프롬프트를 붙여넣는다.

```text
06_codex_integrate_stitch_zip_prompt.md
```

Codex에게 시킬 일:

- zip 내용을 분석
- 현재 프로젝트 스택 확인
- 기존 기능/라우팅/상태관리 보존
- Stitch 코드를 그대로 덮어쓰지 않기
- 현재 프로젝트 구조에 맞게 컴포넌트/스타일 통합
- 실행/빌드/테스트 확인

## 가장 중요한 규칙

### 기존 Codex UI

기존 Codex UI는 제품 의미 추출용이다.

사용해도 되는 것:

- 제품 목적
- 기능
- 화면 의도
- 사용자 흐름
- 데이터 상태
- 누락 상태
- anti-pattern

사용하면 안 되는 것:

- 레이아웃
- 색상
- 폰트
- 컴포넌트 모양
- 여백
- 장식
- 정보 위계

### 레퍼런스 사이트 이미지

레퍼런스 사이트 이미지는 디자인 감성 추출용이다.

사용해도 되는 것:

- 색감
- 폰트 느낌
- 여백감
- 밀도
- 컴포넌트 분위기
- polish level
- 전체 mood

사용하면 안 되는 것:

- 원본 레이아웃 그대로 복사
- 브랜드/로고 복사
- 문구/콘텐츠 복사
- 고유한 서비스 구조 복사

## 다음에 헷갈릴 때 이것만 보면 된다

```text
1. Codex 프로젝트에서 01 프롬프트로 Semantic Rebuild Brief 생성
2. Stitch에 Brief + 02 프롬프트로 제품 UI 예시 생성
3. Stitch에 레퍼런스 이미지 업로드
4. 이미지 선택 후 03 프롬프트로 DESIGN.md 생성
5. 제품 UI 예시 선택 + DESIGN.md 선택
6. 04 프롬프트로 UI 재작업
7. 필요하면 05 품질 검사
8. zip 다운로드
9. Codex 프로젝트에 zip + 06 프롬프트로 통합
```

