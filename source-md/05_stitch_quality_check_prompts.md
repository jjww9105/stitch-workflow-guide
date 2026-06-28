# 05. Stitch 품질 검사 프롬프트

사용 위치: Google Stitch

이 파일은 선택 사항이지만 추천한다.  
생성된 화면이 좋아 보여도 제품 의미, 상태, 디자인 시스템이 빠졌을 수 있다.

## 1. 기존 Codex UI 오염 검사

```text
Review the selected design for accidental inheritance from the old Codex-generated UI.

The old Codex UI must not influence:
- layout
- colors
- typography
- component structure
- spacing
- section order
- information hierarchy
- decorative style

It may influence only:
- product purpose
- features
- user flows
- screen intent
- data states
- missing states
- anti-patterns to avoid

If you find visual inheritance from the old Codex UI, revise the design to remove it while preserving the product meaning and the selected DESIGN.md.

Return:
1. inherited visual choices found
2. revisions made
3. remaining assumptions
```

## 2. 레퍼런스 사이트 과복사 검사

```text
Review the selected design for excessive copying from the reference site.

The reference image should influence:
- mood
- quality bar
- color feel
- typography feel
- spacing rhythm
- component atmosphere

It should not copy:
- exact layout
- section structure
- brand identity
- logo
- text/content
- proprietary visual identity

If the design copies the reference too literally, revise it so it becomes an original product UI that only borrows the design-system direction.

Return:
1. copied elements found
2. revisions made
3. what reference qualities were preserved
```

## 3. 상태 보강

```text
Audit the selected design for missing product states.

Add or revise:
- loading state
- empty state
- error state
- validation state
- success/confirmation state
- permission or locked state if relevant

Every state should help the user understand:
- what happened
- what they can do next
- whether the system is still working

Keep the design consistent with the selected DESIGN.md.

Return:
1. revised state designs
2. missing states fixed
3. assumptions
```

## 4. DESIGN.md 준수 검사

```text
Audit the selected UI against the selected DESIGN.md / design system.

Check:
- color tokens
- typography
- spacing
- radius
- borders
- shadows/elevation
- buttons
- cards
- forms
- tables/data displays
- navigation
- hover/focus states
- loading/empty/error/success states

Revise any part that conflicts with DESIGN.md.

Return:
1. revisions made
2. DESIGN.md rules applied
3. DESIGN.md rules that were ambiguous or missing
```

## 5. 모바일/데스크톱 검사

```text
Review the selected design for mobile and desktop usability.

Check:
- primary action visibility
- readable text sizes
- touch target size
- navigation behavior
- table/list behavior on small screens
- form usability
- scrolling behavior
- no overlapping text or controls

Revise the design so both mobile and desktop are usable.

Return:
1. mobile changes
2. desktop changes
3. remaining responsive assumptions
```

