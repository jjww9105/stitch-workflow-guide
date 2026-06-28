# 02. Stitch에서 제품 UI 예시를 만들 때 쓰는 프롬프트

사용 위치: Google Stitch

사용법:

1. Codex가 만든 `Semantic Rebuild Brief` 전체를 먼저 붙여넣는다.
2. 구분선 `---`를 넣는다.
3. 아래 프롬프트를 이어서 붙여넣는다.

```text
Use the Semantic Rebuild Brief above to create a new frontend concept for this product.

Critical rule:
The existing Codex-generated UI is not a visual reference. Do not preserve, improve, redesign, imitate, or borrow its layout, colors, typography, component structure, spacing, section order, information hierarchy, or decorative style.

Use the existing UI only as semantic evidence for:
- product purpose
- feature inventory
- user flows
- screen intent
- data states
- missing states
- anti-patterns to avoid

Goal:
Create a new UI concept that fits the product meaning and user workflows.

For this first pass, focus on product structure and UX clarity, not final visual styling.

Generate:
1. A strong main screen concept
2. Key secondary screens if needed
3. Mobile and desktop direction
4. Realistic product content
5. Loading, empty, error, and success states where relevant
6. Notes on assumptions

Avoid:
- generic landing page sections unless the brief clearly asks for a landing page
- decorative content that does not support the workflow
- visual inheritance from the old Codex UI
- fake features not supported by the brief

If multiple directions are useful, generate 2-3 options and explain the difference between them.
```

