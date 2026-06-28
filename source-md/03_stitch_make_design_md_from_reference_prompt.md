# 03. 레퍼런스 이미지에서 DESIGN.md를 만들 때 쓰는 프롬프트

사용 위치: Google Stitch

사용법:

1. 원하는 레퍼런스 사이트 캡처 이미지를 Stitch에 올린다.
2. Stitch에서 그 이미지를 클릭하거나 선택한다.
3. 아래 프롬프트를 붙여넣는다.

```text
Create a DESIGN.md / design system from the selected reference image.

Important:
This reference image is for extracting visual direction and design-system rules.
Do not copy the original site's layout, section structure, brand name, logo, text, content, or proprietary identity.

Extract and reinterpret:
- color palette
- semantic color tokens
- typography style
- heading, body, label, and data-text rules
- spacing rhythm
- radius, borders, shadows, and elevation
- button style
- card style
- form/input style
- table or data display style if relevant
- navigation style
- hover, focus, loading, empty, error, and success states
- overall mood
- do's and don'ts

Design-system goal:
Create a reusable DESIGN.md that can be applied to a different product UI.

The target product type is:
[여기에 제품 유형 입력: 예: 업무용 SaaS 대시보드 / 데이터 관리 툴 / 소비자 앱 / 랜딩페이지 / 에디터 / 커머스]

Adapt the reference style to this product type.

Do not make the design system too literal.
Preserve the mood and quality bar, but make it usable for a new product.

Output:
1. DESIGN.md
2. Short explanation of the extracted visual direction
3. What was intentionally not copied from the reference image
```

## 제품 유형 예시

위 프롬프트의 `[여기에 제품 유형 입력]`에는 이런 식으로 적으면 된다.

```text
업무용 SaaS 대시보드
```

```text
반복 사용이 많은 데이터 관리 툴
```

```text
소비자용 모바일 웹 앱
```

```text
제품 소개용 랜딩페이지
```

