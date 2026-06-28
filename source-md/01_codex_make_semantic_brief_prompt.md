# 01. Codex에서 Semantic Brief + Functional Contract 만들기

사용 위치: 실제 제품의 Codex 프로젝트 폴더

목적:

Stitch가 기존 UI를 따라 하지 않고 새 프론트엔드 구조를 만들 수 있도록, Codex가 제품 의미와 구현 계약을 분리해서 정리한다.

사용법:

1. 새 프론트엔드를 만들 실제 제품 프로젝트를 Codex에서 연다.
2. 아래 프롬프트를 붙여넣는다.
3. Codex가 만든 `Semantic Rebuild Brief + Functional Contract`를 Stitch Step 02에 함께 넘긴다.

```text
이 프로젝트를 Google Stitch에서 새 프론트엔드로 만들 수 있도록 `Semantic Rebuild Brief + Functional Contract`를 작성해줘.

핵심 원칙:
- 기존 Codex UI는 디자인 참고자료가 아니다.
- 기존 UI의 레이아웃, 색상, 폰트, 컴포넌트 모양, 섹션 순서, 탭 배치, 정보 위계, 장식은 보존하지 않는다.
- 기존 UI에서는 제품 목적, 기능, 사용자 흐름, 화면/라우트/상태의 존재, 데이터 의미, 누락 상태, anti-pattern만 추출한다.
- 기존 구현은 버리는 대상이 아니다. 실제 기능, 라우팅, API 연동, 상태관리, 인증/권한, 데이터 흐름, 검증, 에러 처리는 기능 계약으로 보존한다.
- UI 구조와 기능 계약을 반드시 분리해서 작성한다.

목표:
Stitch가 기존 UI를 리디자인하는 것이 아니라, 제품 의미와 기능 계약을 바탕으로 완전히 새 프론트엔드의 전체 화면 구조를 만들 수 있게 한다.

먼저 확인할 것:
1. 현재 프로젝트의 프론트엔드 스택
2. 라우팅 구조
3. 주요 컴포넌트/페이지
4. 상태관리 방식
5. API 호출 또는 데이터 로딩 방식
6. 인증/권한이 있다면 처리 방식
7. 폼 검증과 에러 처리 방식
8. 빌드/테스트 명령

언어 규칙:
- 최종 UI의 기본 언어는 한국어로 둔다.
- 모든 화면 문구, 메뉴, 버튼, 라벨, 안내문, 상태 메시지, 예시 데이터는 한국어로 작성한다.
- Codex, Stitch, DESIGN.md, GitHub Pages, zip, Copy 같은 도구명/파일명/고유명사는 영어를 유지해도 된다.
- 영어 UI로 생성하지 않는다.

작성할 내용:

0. Evidence And Scope
   - 확인한 파일/폴더
   - 확인한 라우트/페이지/컴포넌트
   - 확인한 데이터/API/상태관리 근거
   - 확실한 것과 추정한 것의 구분

1. Product Snapshot
   - 제품명
   - 한 줄 목적
   - 대상 사용자
   - 사용자가 해결하려는 문제
   - 제품이 반드시 도와야 하는 일

2. Coverage Inventory
   - 전체 탭 목록
   - 전체 라우트/페이지 목록
   - 전체 핵심 화면 목록
   - 모달/드로어/상세/설정/온보딩 등 보조 화면 목록
   - loading / empty / error / success / permission / validation 상태 목록
   - 각 화면이 필수인지 선택인지
   - Stitch가 반드시 만들어야 하는 전체 화면 세트

3. Users And Jobs
   - 사용자 유형
   - 사용자가 처한 상황
   - 해야 할 일
   - 성공/실패 기준

4. Core Workflows
   - 주요 사용자 흐름
   - 시작 지점
   - 단계
   - 성공 상태
   - 에러/막힘 상태
   - 복구 경로
   - 이 흐름에 필요한 모든 화면/탭/라우트
   - 이 흐름에서 반드시 보존해야 할 기능 계약

5. Functional Contract
   각 기능마다 아래 항목을 표로 정리해:
   - 기능 이름
   - 사용자가 하는 일
   - 시작 트리거
   - 현재 구현에서 관련된 라우트/컴포넌트/함수/훅/파일
   - 읽는 데이터
   - 쓰는 데이터
   - API 호출 또는 로컬 처리
   - 상태 변화
   - validation 규칙
   - permission/auth 규칙
   - loading / empty / error / success 상태
   - 이 기능이 깨졌다고 판단하는 기준
   - 새 UI에서 위치나 표현은 바뀌어도 절대 삭제하면 안 되는 동작

6. Data And State Contract
   - 데이터 엔티티
   - 필드
   - 출처: API / localStorage / 파일 / 상수 / 사용자 입력 / 계산값
   - 어디에 표시되는지
   - 어떤 기능이 이 데이터를 읽거나 쓰는지
   - loading / empty / error / success / permission / validation 상태
   - 더미 데이터와 실제 데이터의 구분

7. Screen Goal Cards
   - 화면 이름
   - 화면 유형: route / tab / modal / drawer / detail / settings / state
   - 사용자 목표
   - 제품 목표
   - 핵심 콘텐츠
   - 주요 액션
   - 보조 액션
   - 필요한 상태
   - 연결된 Functional Contract 항목
   - 이 화면이 누락되면 깨지는 사용자 흐름

8. Rebuild Rules For Stitch
   - 기존 UI에서 절대 가져오면 안 되는 시각/구조 요소
   - 새 UI에서 반드시 새로 재해석해야 하는 정보구조
   - 유지해야 할 제품 의미
   - 유지해야 할 기능 계약
   - Stitch가 화면 구조를 바꿔도 되는 범위
   - Stitch가 기능을 삭제/병합/숨기면 안 되는 범위

9. Anti-Patterns From Current UI
   - 현재 UI에서 버려야 할 문제
   - 왜 문제인지
   - 새 UI에서는 어떻게 해결해야 하는지
   - 단, 기존 UI를 개선 대상으로 삼지 말고 새 구조 설계의 금지 목록으로만 사용한다

10. Unknowns And Assumptions
   - 확실하지 않은 점
   - 네가 추정한 점
   - 사용자 확인이 필요한 점
   - 화면/라우트/기능 계약에서 불확실한 점

출력 형식:
Markdown으로 작성해줘.
제목은 `# Semantic Rebuild Brief + Functional Contract`로 시작해줘.

반드시 포함할 것:
- 전체 화면/탭/라우트 인벤토리
- Stitch가 만들어야 할 전체 화면 세트 목록
- 기능 계약 표
- 데이터/상태 계약 표
- 누락되면 안 되는 상태 목록
- 기존 UI에서 절대 가져오면 안 되는 시각/구조 요소 목록
- Stitch에 처음 넣을 때 사용할 짧은 요약

다시 강조:
기존 UI 구조는 보존하지 않는다.
기존 구현의 기능 계약은 보존한다.
Stitch에 넘길 것은 기존 UI가 아니라 제품 의미, 화면 커버리지, 기능 계약이다.
```
