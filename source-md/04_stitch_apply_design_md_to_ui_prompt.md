# 04. 전체 화면 세트에 DESIGN.md 적용하기

사용 위치: Google Stitch

목적:

Step 02에서 만든 새 화면 구조와 기능 보존 매핑을 유지한 채, Step 03의 DESIGN.md를 전체 화면 세트에 적용한다.

사용법:

1. Step 02에서 만든 전체 화면 세트 또는 현재 배치의 화면들을 Stitch에서 선택한다.
2. Step 03에서 만든 DESIGN.md / design system을 선택한다.
3. 아래 프롬프트를 붙여넣는다.

```text
선택한 전체 화면 세트를 선택한 DESIGN.md / design system 기준으로 재작업해줘.

언어 규칙:
- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성해.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/고유명사는 영어를 유지해도 돼.
- 영어 UI로 바꾸지 마.

반드시 유지할 것:
- Semantic Rebuild Brief의 제품 목적
- 전체 화면/탭/라우트 커버리지
- Functional Contract의 기능, 액션, 데이터 흐름, validation, permission, 상태 처리
- Step 02에서 만든 기능 보존 매핑표
- 사용자가 실제로 완료해야 하는 핵심 작업 흐름

기존 Codex UI는 시각 참조도 구조 참조도 아니다.
기존 UI의 레이아웃, 색상, 타이포그래피, 컴포넌트 구조, 탭 배치 방식, 여백, 섹션 순서, 정보 위계, 시각 스타일을 따라 하지 마.

단순히 색만 바꾸지 마.
선택한 DESIGN.md가 전체 디자인 시스템으로 적용되도록 모든 화면을 다시 구성해.
다만 디자인 적용 과정에서 기능을 삭제하거나 액션을 숨기거나 상태를 빠뜨리지 마.

적용할 것:
- color token
- 타이포그래피 규칙
- 여백 리듬
- 버튼 스타일
- 카드 스타일
- form/input 스타일
- table / data-display 스타일
- navigation / tab 스타일
- modal / drawer 스타일
- prompt/code block처럼 긴 텍스트를 다루는 UI 규칙
- radius, border, shadow, elevation 규칙
- hover, focus, loading, empty, error, success, permission, validation 상태
- 모바일/데스크톱 반응형 동작

복사하지 말 것:
- 기존 Codex UI의 레이아웃, 색상, 타이포그래피, 컴포넌트 구조, 탭 배치 방식, 여백, 섹션 순서, 정보 위계, 시각 스타일
- 레퍼런스 사이트의 정확한 레이아웃, 브랜드, 로고, 문구, 콘텐츠, 고유한 정체성

화면/기능 커버리지 규칙:
- Step 02에서 만든 전체 화면 세트의 화면을 임의로 줄이지 마.
- Functional Contract의 기능을 임의로 줄이지 마.
- 선택된 화면이 전체가 아니라 일부 배치라면, 이번 배치에 적용한 화면과 아직 적용하지 않은 화면을 구분해.
- 마지막에 `DESIGN.md 적용 커버리지 표`와 `기능 보존 확인표`를 남겨.

출력:
1. DESIGN.md가 적용된 전체 화면 세트 또는 현재 배치 화면
2. 적용한 디자인 시스템 규칙
3. DESIGN.md 적용 커버리지 표
4. 기능 보존 확인표
5. 아직 DESIGN.md가 적용되지 않은 남은 화면
6. 아직 재확인해야 하는 기능 계약
7. 관련 상태 화면
8. 구현에 영향을 주는 가정
```
