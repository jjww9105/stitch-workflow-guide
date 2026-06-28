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
기존 UI의 레이아웃, 색상, 폰트, 컴포넌트, 스타일, 여백, 장식, 정보 위계는 절대 보존하지 마.
기존 UI에서는 제품 목적, 기능, 사용자 흐름, 화면 의도, 데이터 상태, 누락 상태, anti-pattern만 추출해.

목표:
Stitch가 기존 UI를 리디자인하는 것이 아니라, 제품 의미를 바탕으로 완전히 새 프론트엔드를 만들 수 있게 하는 것이다.

작성할 내용:
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

4. Screen Goal Cards
   - 화면 이름
   - 사용자 목표
   - 제품 목표
   - 핵심 콘텐츠
   - 주요 액션
   - 보조 액션
   - 필요한 상태: loading / empty / error / success / permission

5. Data And State Matrix
   - 데이터 엔티티
   - 필드
   - 어디에 표시되는지
   - 사용자가 할 수 있는 액션
   - loading / empty / error / success / permission 상태

6. Interaction Requirements
   - 네비게이션
   - CTA
   - 폼/검증
   - 검색/필터/정렬
   - 모달/드로어
   - 반응형 요구사항

7. Anti-Patterns From Current UI
   - 현재 UI에서 버려야 할 문제
   - 왜 문제인지
   - 새 UI에서는 어떻게 해결해야 하는지

8. Unknowns And Assumptions
   - 확실하지 않은 점
   - 네가 추정한 점
   - 사용자 확인이 필요한 점

출력 형식:
Markdown으로 작성해줘.
제목은 `# Semantic Rebuild Brief`로 시작해줘.

마지막에 Stitch에 처음 넣을 때 사용할 짧은 요약도 붙여줘.

다시 강조:
기존 Codex UI는 디자인 참고자료가 아니다.
기존 UI는 제품 의미를 추출하는 자료일 뿐이다.
```

