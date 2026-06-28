# 04. 생성된 제품 UI에 DESIGN.md를 적용할 때 쓰는 프롬프트

사용 위치: Google Stitch

사용법:

1. Step 2에서 만든 제품 UI 예시 화면을 Stitch에서 선택한다.
2. Step 3에서 만든 DESIGN.md / design system을 선택한다.
3. 아래 프롬프트를 붙여넣는다.

```text
Rework the selected product UI using the selected DESIGN.md / design system.

Important:
Preserve the product purpose, features, user workflow, screen intent, and core actions from the Semantic Rebuild Brief.

Do not simply recolor the screen.
Recompose the UI so the selected DESIGN.md is applied as a full design system.

Apply:
- color tokens
- typography rules
- spacing rhythm
- button style
- card style
- form/input style
- table or data-display style if relevant
- navigation style
- radius, border, shadow, and elevation rules
- hover, focus, loading, empty, error, and success states
- mobile and desktop responsive behavior

Do not copy:
- the old Codex UI's layout, colors, typography, component structure, spacing, section order, or visual style
- the reference site's exact layout, brand, logo, text, content, or proprietary identity

Use:
- Semantic Rebuild Brief for product meaning
- selected DESIGN.md for visual system
- selected product UI only as the current working screen to improve

Output:
1. Revised main screen
2. Key secondary screen updates if needed
3. Relevant state variants
4. Short summary of what changed
5. Any assumptions that affect implementation
```

