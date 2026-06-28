# 01. Codex에게 Semantic Rebuild Brief 만들라고 시키는 프롬프트

사용 위치: 실제 제품의 Codex 프로젝트 폴더

사용법:

1. 새 프론트엔드를 만들 제품 프로젝트를 Codex에서 연다.
2. 아래 프롬프트를 붙여넣는다.
3. Codex가 만든 `Semantic Rebuild Brief`를 복사해서 Stitch로 가져간다.

```text
이 프로젝트를 Google Stitch에서 새 프론트엔드로 만들 수 있게 Semantic Rebuild Brief를 작성해줘.

중요:
기존 Codex UI는 시각 참조가 아니다.
기존 UI의 레이아웃, 색상, 폰트, 컴포넌트, 스타일, 여백, 장식, 정보 위계, 탭 배치 방식은 절대 보존하지 마.
기존 UI에서는 제품 목적, 기능, 사용자 흐름, 화면 의도, 탭/라우트/화면의 존재, 데이터 상태, 누락 상태, anti-pattern만 추출해.

목표:
Stitch가 기존 UI를 리디자인하는 것이 아니라, 제품 의미를 바탕으로 완전히 새 프론트엔드의 전체 화면 세트를 만들 수 있게 하는 것이다.

언어 규칙:
최종 Stitch 결과물의 사용자-facing UI 언어를 Brief에 반드시 명시해줘.
이 워크플로우에서는 최종 UI의 기본 언어를 한국어로 둔다.
따라서 Brief에 아래 규칙을 포함해:
- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성한다.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/파일명/고유명사는 영어를 유지해도 된다.
- 영어 UI로 생성하지 않는다.

작성할 내용:

0. Coverage Inventory
   - 전체 탭 목록
   - 전체 라우트/페이지 목록
   - 전체 핵심 화면 목록
   - 모달/드로어/상세/설정/온보딩 등 보조 화면 목록
   - 각 화면이 필수인지 선택인지
   - 기존 UI에서 확인한 기능적 존재와, 새 UI에서 재해석해야 하는 방식
   - Stitch가 반드시 만들어야 하는 화면과 상태

1. Product Snapshot
   - 제품명
   - 한 줄 목적
   - 대상 사용자
   - 사용자가 해결하려는 문제
   - 제품이 반드시 도와야 하는 일

2. Users And Jobs
   - 사용자 유형
   - 사용자가 처한 상황
   - 해야 할 일
   - 성공/실패 기준

3. Core Workflows
   - 주요 사용자 흐름
   - 시작 지점
   - 단계
   - 성공 상태
   - 에러/막힘 상태
   - 복구 경로
   - 이 흐름에 필요한 모든 화면/탭/라우트

4. Screen Goal Cards
   - 화면 이름
   - 화면 유형: route / tab / modal / drawer / detail / settings / state
   - 사용자 목표
   - 제품 목표
   - 핵심 콘텐츠
   - 주요 액션
   - 보조 액션
   - 필요한 상태: loading / empty / error / success / permission / validation
   - 이 화면이 누락되면 깨지는 사용자 흐름

5. Data And State Matrix
   - 데이터 엔티티
   - 필드
   - 어디에 표시되는지
   - 사용자가 할 수 있는 액션
   - loading / empty / error / success / permission / validation 상태
   - 이 데이터가 필요한 화면 목록

6. Interaction Requirements
   - 네비게이션
   - 탭/라우트 전환
   - CTA
   - 폼/검증
   - 검색/필터/정렬
   - 모달/드로어
   - 반응형 요구사항

7. Anti-Patterns From Current UI
   - 현재 UI에서 버려야 할 문제
   - 왜 문제인지
   - 새 UI에서는 어떻게 해결해야 하는지
   - 단, 기존 UI의 시각 스타일을 개선 대상으로 삼지 말 것

8. Unknowns And Assumptions
   - 확실하지 않은 점
   - 네가 추정한 점
   - 사용자 확인이 필요한 점
   - 화면/탭/라우트 커버리지에서 불확실한 점

출력 형식:
Markdown으로 작성해줘.
제목은 `# Semantic Rebuild Brief`로 시작해줘.

반드시 포함할 것:
- 전체 화면/탭/라우트 인벤토리
- Stitch가 만들어야 할 전체 화면 세트 목록
- 누락되면 안 되는 상태 목록
- 기존 Codex UI에서 절대 가져오면 안 되는 시각 요소 목록

마지막에 Stitch에 처음 넣을 때 사용할 짧은 요약도 붙여줘.

다시 강조:
기존 Codex UI는 디자인 참고자료가 아니다.
기존 UI는 제품 의미와 화면 커버리지를 추출하는 자료일 뿐이다.
```
