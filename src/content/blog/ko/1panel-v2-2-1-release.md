---
title: "1Panel v2.2.1 출시: 방화벽 포트 화이트리스트, 멀티 노드 개요, Dynadot DNS"
description: "1Panel v2.2.1은 Dynadot DNS, 방화벽 포트 화이트리스트, 원격 다운로드 프록시, 멀티 노드 Agents/인증서 개요, App Store·컨테이너·Cron·멀티 노드 전반의 UI 개선과 수정을 포함합니다."
pubDate: 2026-06-11
updatedDate: 2026-06-11
tags:
  - 1Panel
  - Release Notes
  - Firewall
  - Multi-Node
  - MCP
  - File Browser
  - Certificates
  - Panel Settings
---

1Panel v2.2.1이 배포되었습니다. 인증서·방화벽 기능 확장, 멀티 노드 관리 강화, 컨테이너·Cron·시스템 설정 UI 개선과 안정성 수정이 중심입니다.

## Highlights

- **Dynadot DNS** — 인증서 자동 발급용 DNS 제공자 추가
- **포트 화이트리스트** — 방화벽 허용 포트 중앙 관리
- **멀티 노드 개요** — 개요 페이지에 Agents·인증서 정보 표시
- **File Browser** — 원격 다운로드 프록시, Shift 다중 행 선택
- **패널 알림** — 동일 유형 알림 여러 개, SMS 표시 이름·검증 강화
- **전반적 개선** — 컨테이너 로그, 다크 테마, 작업 목록, MCP 메뉴, 터미널 보안

---

## New Features

### Certificates

- **Dynadot DNS 제공자** — Dynadot DNS 검증으로 인증서 발급·갱신 ([`#12829`](https://github.com/1Panel-dev/1Panel/pull/12829)).

### File Browser

- **원격 다운로드 프록시** — 직접 접근이 차단되거나 라우팅될 때 프록시 설정 ([`#12942`](https://github.com/1Panel-dev/1Panel/pull/12942)).

### Firewall

- **포트 화이트리스트 관리** — 패널에서 방화벽 포트 화이트리스트 정의·관리 ([`#12912`](https://github.com/1Panel-dev/1Panel/pull/12912)).

### Multi-Node

- **개요: Agents 및 인증서** — 멀티 노드 개요 페이지에 Agents·인증서 정보 표시 ([`#12933`](https://github.com/1Panel-dev/1Panel/pull/12933)).
- **시스템 패키지 관리** — 노드 간 1Panel 시스템 설치 패키지 관리 ([`#12982`](https://github.com/1Panel-dev/1Panel/pull/12982)).

### Panel Settings

- **동일 유형 다중 알림** — 채널 유형별 여러 알림 방법 추가 ([`#12922`](https://github.com/1Panel-dev/1Panel/pull/12922)).

---

## Enhancements

### Overview

- **메모 스타일** — 홈 메모 위젯 표시 개선 ([`#12958`](https://github.com/1Panel-dev/1Panel/pull/12958)).

### Containers

- **로그 표시** — 컨테이너 로그 가독성 향상 ([`#12939`](https://github.com/1Panel-dev/1Panel/pull/12939)).
- **이미지 삭제 후 로그** — 이미지 삭제 후 작업 로그 자동 표시 ([`#12868`](https://github.com/1Panel-dev/1Panel/pull/12868)).

### File Browser

- **Shift 다중 선택** — Shift로 연속 행 빠르게 선택 ([`#12941`](https://github.com/1Panel-dev/1Panel/pull/12941)).
- **에디터 저장 로직** — 파일 에디터 저장 동작 개선 ([`#12852`](https://github.com/1Panel-dev/1Panel/pull/12852)).

### Firewall

- **포트 범위 점유 확인** — 포트 범위 규칙에서 사용 중 포트 확인 ([`#12950`](https://github.com/1Panel-dev/1Panel/pull/12950)).

### SSH Management

- **로그 파싱** — SSH 로그 파싱 로직 개선 ([`#12803`](https://github.com/1Panel-dev/1Panel/pull/12803)).

### Terminal

- **생성 명령 보안 검증** — 생성된 터미널 명령 추가 보안 검증 ([`#12826`](https://github.com/1Panel-dev/1Panel/pull/12826)).

### Multi-Node

- **노드 수 제한** — 노드 상한 도달 시 처리 개선 ([`#12867`](https://github.com/1Panel-dev/1Panel/pull/12867)).
- **대규모 전환** — 많은 노드 환경에서 노드 전환 최적화 ([`#12928`](https://github.com/1Panel-dev/1Panel/pull/12928)).

### MCP

- **메뉴 제목** — 사이드바 MCP 메뉴 제목 표시 개선 ([`#12818`](https://github.com/1Panel-dev/1Panel/pull/12818)).

### Panel Settings

- **SMS 알림** — 표시 이름 및 설정 검증 강화 ([`#12945`](https://github.com/1Panel-dev/1Panel/pull/12945)).
- **라이선스 가져오기 경고** — 라이선스 가져올 때 경고 표시 ([`#12952`](https://github.com/1Panel-dev/1Panel/pull/12952)).

### System

- **명령 결과 표시** — 명령 실행 결과 가독성 향상 ([`#12837`](https://github.com/1Panel-dev/1Panel/pull/12837)).
- **작업 목록·사이드바** — 상호작용 개선 ([`#12839`](https://github.com/1Panel-dev/1Panel/pull/12839)).
- **Captcha 검증** — 검증 방식 최적화 ([`#12946`](https://github.com/1Panel-dev/1Panel/pull/12946)).
- **API 문서** — 주석 및 로그 개선 ([`#12915`](https://github.com/1Panel-dev/1Panel/pull/12915), [`#12962`](https://github.com/1Panel-dev/1Panel/pull/12962)).
- **테이블 비활성 버튼** — 비활성 버튼 스타일 개선 ([`#12937`](https://github.com/1Panel-dev/1Panel/pull/12937)).
- **다크 테마** — 다크 테마 스타일 개선 ([`#12944`](https://github.com/1Panel-dev/1Panel/pull/12944)).

---

## Bug Fixes

| 영역 | 수정 |
|---|---|
| **App Store** | 사용자 정의 앱 저장소 사용 시 Runtime 환경 생성 가능 ([`#12887`](https://github.com/1Panel-dev/1Panel/pull/12887)). |
| **Websites** | 사용자 정의 rewrite 템플릿 이름 대소문자 유지 ([`#12714`](https://github.com/1Panel-dev/1Panel/pull/12714)). |
| **Certificates** | 자동 갱신 후 패널 인증서 동기화 ([`#12858`](https://github.com/1Panel-dev/1Panel/pull/12858)). |
| **Containers** | Compose 업그레이드 후 컨테이너 IP 유지 ([`#12902`](https://github.com/1Panel-dev/1Panel/pull/12902)). |
| **File Browser** | 와일드카드 파일 복사 이상 수정 ([`#12883`](https://github.com/1Panel-dev/1Panel/pull/12883)). |
| **Firewall** | 포트 점유 정보 표시 수정 ([`#12961`](https://github.com/1Panel-dev/1Panel/pull/12961)). |
| **Toolbox** | 일부 시나리오 바이러스 검사 실패 수정 ([`#12892`](https://github.com/1Panel-dev/1Panel/pull/12892)). |
| **Toolbox** | 프로세스 가드 1일 초과 uptime 파싱 수정 ([`#12713`](https://github.com/1Panel-dev/1Panel/pull/12713)). |
| **SSH Management** | SSH 서비스 자동 활성화 수정 ([`#12898`](https://github.com/1Panel-dev/1Panel/pull/12898)). |
| **Cron** | 자식 노드에서 스크립트 라이브러리 실행 ([`#12869`](https://github.com/1Panel-dev/1Panel/pull/12869)). |
| **Cron** | 스크립트 업데이트 시 백업 보존 수 적용 ([`#12896`](https://github.com/1Panel-dev/1Panel/pull/12896)). |
| **Multi-Node** | 노드 자동 업그레이드 실패 수정 ([`#12875`](https://github.com/1Panel-dev/1Panel/pull/12875)). |
| **Multi-Node** | 개요 페이지 노드 터미널 연결 수정 ([`#12901`](https://github.com/1Panel-dev/1Panel/pull/12901)). |
| **Log Audit** | 작업 로그 표시 이상 수정 ([`#12936`](https://github.com/1Panel-dev/1Panel/pull/12936)). |
| **System** | 파일 열기 실패로 인한 시스템 예외 수정 ([`#12808`](https://github.com/1Panel-dev/1Panel/pull/12808)). |
| **System** | 라이선스 가져온 후 테마 업데이트 지연 수정 ([`#12911`](https://github.com/1Panel-dev/1Panel/pull/12911)). |
| **System** | 사용자 정의 로그인 배경 이미지 표시 수정 ([`#12977`](https://github.com/1Panel-dev/1Panel/pull/12977)). |

---

## How to Upgrade

대시보드 오른쪽 아래 `Update`를 눌러 업그레이드하세요.

처음이신가요? [1panel.pro](https://1panel.pro/)를 참고하세요.

---

## Source

전체 릴리스 노트: [1Panel v2.2.1 on GitHub](https://github.com/1Panel-dev/1Panel/releases/tag/v2.2.1)
