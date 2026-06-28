# 04. 전체 화면 세트에 DESIGN.md를 적용할 때 쓰는 프롬프트

사용 위치: Google Stitch

사용법:

1. Step 02에서 만든 전체 화면 세트 또는 현재 배치의 화면들을 Stitch에서 선택한다.
2. Step 03에서 만든 DESIGN.md / design system을 선택한다.
3. 아래 프롬프트를 붙여넣는다.

```text
선택한 전체 화면 세트를 선택한 DESIGN.md / design system 기준으로 재작업해줘.

언어 규칙:
- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성해.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/고유명사는 영어를 유지해도 돼.

중요:
Semantic Rebuild Brief의 제품 목적, 기능, 사용자 흐름, 화면 의도, 핵심 액션, 전체 화면/탭/라우트 커버리지는 유지해.

기존 Codex UI는 시각 참조가 아니다.
기존 UI의 레이아웃, 색상, 타이포그래피, 컴포넌트 구조, 탭 배치 방식, 여백, 섹션 순서, 정보 위계, 시각 스타일을 따라 하지 마.

단순히 색만 바꾸지 마.
선택한 DESIGN.md가 전체 디자인 시스템으로 적용되도록 모든 화면을 다시 구성해.

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
- radius, border, shadow, elevation 규칙
- hover, focus, loading, empty, error, success, permission, validation 상태
- 모바일/데스크톱 반응형 동작

복사하지 말 것:
- 기존 Codex UI의 레이아웃, 색상, 타이포그래피, 컴포넌트 구조, 탭 배치 방식, 여백, 섹션 순서, 시각 스타일
- 레퍼런스 사이트의 정확한 레이아웃, 브랜드, 로고, 문구, 콘텐츠, 고유한 정체성

화면 커버리지 규칙:
- Step 02에서 만든 전체 화면 세트의 화면을 임의로 줄이지 마.
- 선택된 화면이 전체가 아니라 일부 배치라면, 이번 배치에 적용한 화면과 아직 적용하지 않은 화면을 구분해.
- 마지막에 `DESIGN.md 적용 커버리지 표`를 남겨.

출력:
1. DESIGN.md가 적용된 전체 화면 세트 또는 현재 배치 화면
2. 적용한 디자인 시스템 규칙
3. DESIGN.md 적용 커버리지 표
4. 아직 DESIGN.md가 적용되지 않은 남은 화면
5. 관련 상태 화면
6. 구현에 영향을 주는 가정
```
