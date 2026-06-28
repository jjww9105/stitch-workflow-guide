# One Page Cheatsheet

다음에 기억이 안 나면 이 파일만 먼저 본다.

## 한 줄 원칙

```text
기존 UI 구조는 버리고, 기존 구현의 기능 계약은 보존한다.
```

## 전체 순서

```text
1. 제품 프로젝트를 Codex에서 연다
2. 01 프롬프트로 Semantic Rebuild Brief + Functional Contract를 만든다
3. Brief 안의 전체 화면/탭/라우트/상태 인벤토리와 기능 계약을 확인한다
4. Stitch에 Brief + 02 프롬프트를 넣는다
5. Stitch가 새 전체 앱 구조와 전체 화면 세트를 만든다
6. 기능 보존 매핑표에서 삭제/누락된 기능이 없는지 본다
7. 한 번에 다 못 만들면 만든 화면 / 남은 화면 / 남은 기능 계약을 확인하고 다음 배치로 이어간다
8. 레퍼런스 사이트 캡처를 Stitch에 올린다
9. 이미지 선택 후 03 프롬프트로 DESIGN.md를 만든다
10. 전체 화면 세트 + DESIGN.md를 선택한다
11. 04 프롬프트로 전체 화면 세트를 DESIGN.md 기준으로 재작업한다
12. 05 프롬프트로 화면 커버리지와 기능 계약 보존을 검사한다
13. zip 다운로드
14. 제품 프로젝트 Codex에 zip + 06 프롬프트로 통합시킨다
15. Codex가 빌드/테스트/브라우저 확인으로 기능이 살아있는지 검증한다
```

## 각 파일 역할

| 파일 | 붙이는 곳 | 하는 일 |
|---|---|---|
| `01_codex_make_semantic_brief_prompt.md` | Codex | 제품 의미, 화면 커버리지, 기능 계약 추출 |
| `02_stitch_make_product_ui_prompt.md` | Stitch | 새 전체 앱 구조와 전체 화면 세트 생성 |
| `03_stitch_make_design_md_from_reference_prompt.md` | Stitch | 레퍼런스 이미지에서 DESIGN.md 생성 |
| `04_stitch_apply_design_md_to_ui_prompt.md` | Stitch | 전체 화면 세트에 DESIGN.md 적용 |
| `05_stitch_quality_check_prompts.md` | Stitch | 커버리지, 기능 계약, 상태, 반응형 검사 |
| `06_codex_integrate_stitch_zip_prompt.md` | Codex | Stitch zip을 실제 프로젝트에 통합 |

## 절대 금지

```text
기존 Codex UI를 예쁘게 리디자인해줘
```

이렇게 말하지 않는다.

대신:

```text
기존 UI는 제품 의미와 기능 계약 추출용으로만 사용해.
기존 UI의 정보구조와 화면 배치는 보존하지 마.
새 UI는 Semantic Rebuild Brief, Functional Contract, DESIGN.md를 기준으로 전체 화면 세트로 만들어.
```

## Stitch에 Step 02를 넣을 때

나쁜 방향:

```text
대표 화면만 적당히 만들어줘.
```

좋은 방향:

```text
Brief의 전체 화면/탭/라우트/상태 인벤토리와 Functional Contract를 먼저 확인해.
모든 핵심 화면과 필수 기능을 빠짐없이 새 전체 화면 세트로 만들어줘.
한 번에 다 못 만들면 대표 화면만 고르지 말고,
이번 배치에서 만든 화면, 아직 남은 화면, 아직 배치되지 않은 기능 계약을 표시해줘.
```

## DESIGN.md를 만들 때

나쁜 말:

```text
이걸 DESIGN.md로 만들어줘.
```

좋은 말:

```text
이 레퍼런스 이미지는 전체 화면 세트에 적용할 디자인 시스템을 추출하기 위한 참고자료야.
원본 사이트의 레이아웃, 브랜드, 문구, 로고, 기능 구조는 복사하지 말고,
색상 토큰, 타이포그래피, 여백, 컴포넌트 규칙, 상태 규칙을 추출해서
내 제품 유형에 맞는 DESIGN.md로 재해석해줘.
```

## Stitch zip을 Codex에 줄 때

나쁜 방향:

```text
현재 프로젝트 구조에 맞게 적당히 스타일만 입혀줘.
```

좋은 방향:

```text
Stitch zip의 새 화면 구조/배치/흐름을 먼저 분석해.
기존 UI 구조는 보존하지 말고, 기존 구현의 기능 계약은 보존해.
Stitch 구조가 기능 계약과 충돌하면 기능 계약을 우선하되,
기존 UI로 되돌아가지 말고 새 구조 안에서 기능을 다시 배치해.
```
