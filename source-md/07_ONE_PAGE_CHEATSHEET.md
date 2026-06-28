# One Page Cheatsheet

다음에 기억이 안 나면 이 파일만 먼저 본다.

## 목표

Codex 프로젝트의 제품 의미와 전체 화면 커버리지를 뽑고, 레퍼런스 사이트의 디자인 감성을 합쳐서 Stitch로 전체 화면 세트를 만든다.

## 순서

```text
1. 제품 프로젝트를 Codex에서 연다
2. 01 프롬프트로 Semantic Rebuild Brief를 만든다
3. Brief 안의 전체 화면/탭/라우트/상태 인벤토리를 확인한다
4. Stitch에 Brief + 02 프롬프트를 넣는다
5. Stitch가 전체 앱 구조와 전체 화면 세트를 만든다
6. 한 번에 다 못 만들면 만든 화면 / 남은 화면을 확인하고 다음 배치로 이어간다
7. 레퍼런스 사이트 캡처를 Stitch에 올린다
8. 이미지 선택 후 03 프롬프트로 DESIGN.md를 만든다
9. 전체 화면 세트 + DESIGN.md를 선택한다
10. 04 프롬프트로 전체 화면 세트를 DESIGN.md 기준으로 재작업한다
11. 05 프롬프트로 화면 커버리지와 품질을 검사한다
12. zip 다운로드
13. 제품 프로젝트 Codex에 zip + 06 프롬프트로 통합시킨다
```

## 각 파일 역할

| 파일 | 붙이는 곳 | 하는 일 |
|---|---|---|
| `01_codex_make_semantic_brief_prompt.md` | Codex | 제품 의미와 전체 화면/탭/라우트 인벤토리 만들기 |
| `02_stitch_make_product_ui_prompt.md` | Stitch | 전체 앱 구조와 전체 화면 세트 만들기 |
| `03_stitch_make_design_md_from_reference_prompt.md` | Stitch | 레퍼런스 이미지에서 전체 화면용 DESIGN.md 만들기 |
| `04_stitch_apply_design_md_to_ui_prompt.md` | Stitch | 전체 화면 세트에 DESIGN.md 적용하기 |
| `05_stitch_quality_check_prompts.md` | Stitch | 커버리지/오염/과복사/상태/반응형 검사 |
| `06_codex_integrate_stitch_zip_prompt.md` | Codex | Stitch zip을 전체 화면 커버리지 기준으로 실제 프로젝트에 통합하기 |

## 절대 금지

```text
기존 Codex UI를 예쁘게 리디자인해줘
```

이렇게 말하지 않는다.

대신:

```text
기존 Codex UI는 제품 의미와 화면 커버리지 추출용으로만 사용해.
새 UI는 Semantic Rebuild Brief와 DESIGN.md를 기준으로 전체 화면 세트로 만들어.
```

## 핵심 체크

### Stitch에 Step 02를 넣을 때

나쁜 방향:

```text
대표 화면만 적당히 만들어줘.
```

좋은 방향:

```text
Brief의 전체 화면/탭/라우트/상태 인벤토리를 먼저 확인하고,
모든 핵심 화면을 빠짐없이 전체 화면 세트로 만들어줘.
한 번에 다 못 만들면 대표 화면만 고르지 말고,
이번 배치에서 만든 화면과 아직 남은 화면을 표시해줘.
```

### 레퍼런스 이미지로 DESIGN.md 만들 때

나쁜 말:

```text
이걸 DESIGN.md로 만들어줘.
```

좋은 말:

```text
이 레퍼런스 이미지는 전체 화면 세트에 적용할 디자인 시스템을 추출하기 위한 참고자료야.
원본 사이트의 레이아웃, 브랜드, 문구, 로고는 복사하지 말고,
색상 토큰, 타이포그래피, 여백, 컴포넌트 규칙, 상태 규칙을 추출해서
내 제품 유형에 맞는 DESIGN.md로 재해석해줘.
```

### DESIGN.md를 적용할 때

나쁜 말:

```text
이 화면을 DESIGN.md로 고쳐줘.
```

좋은 말:

```text
제품 목적, 기능, 사용자 흐름, 전체 화면 커버리지는 유지하고,
선택한 DESIGN.md의 색상, 타이포그래피, 여백, 컴포넌트, 상태 규칙을
전체 화면 세트에 적용해줘.
기존 Codex UI나 레퍼런스 사이트 레이아웃은 복사하지 마.
```
