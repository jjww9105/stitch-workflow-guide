# 04. 생성된 제품 UI에 DESIGN.md를 적용할 때 쓰는 프롬프트

사용 위치: Google Stitch

사용법:

1. Step 2에서 만든 제품 UI 예시 화면을 Stitch에서 선택한다.
2. Step 3에서 만든 DESIGN.md / design system을 선택한다.
3. 아래 프롬프트를 붙여넣는다.

```text
선택한 제품 UI를 선택한 DESIGN.md / design system 기준으로 재작업해줘.

언어 규칙:
- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성해.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/고유명사는 영어를 유지해도 돼.

중요:
Semantic Rebuild Brief의 제품 목적, 기능, 사용자 흐름, 화면 의도, 핵심 액션은 유지해.

단순히 색만 바꾸지 마.
선택한 DESIGN.md가 전체 디자인 시스템으로 적용되도록 UI를 다시 구성해.

적용할 것:
- color token
- 타이포그래피 규칙
- 여백 리듬
- 버튼 스타일
- 카드 스타일
- form/input 스타일
- 필요하면 table / data-display 스타일
- 내비게이션 스타일
- radius, border, shadow, elevation 규칙
- hover, focus, loading, empty, error, success 상태
- 모바일/데스크톱 반응형 동작

복사하지 말 것:
- 기존 Codex UI의 레이아웃, 색상, 타이포그래피, 컴포넌트 구조, 여백, 섹션 순서, 시각 스타일
- 레퍼런스 사이트의 정확한 레이아웃, 브랜드, 로고, 문구, 콘텐츠, 고유한 정체성

사용 기준:
- 제품 의미는 Semantic Rebuild Brief를 따른다.
- 시각 시스템은 선택한 DESIGN.md를 따른다.
- 선택한 제품 UI는 개선할 현재 작업 화면으로만 사용한다.

출력:
1. 재작업된 메인 화면
2. 필요하면 핵심 보조 화면 수정안
3. 관련 상태 화면
4. 무엇이 바뀌었는지 짧은 요약
5. 구현에 영향을 주는 가정
```
