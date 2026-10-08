# RetroMeta Studio

**README** | [How to Use](HOW_TO_USE.ko.md) | [Release Notes](RELEASE_NOTES.ko.md)

[English](README.md) · **한국어**

게임 컬렉션, 메타데이터와 미디어를 정리하는 무료 Windows 데스크톱 앱입니다.

**첫 공개 프리뷰: 0.2.0 · Windows x64 · 기본 UI 언어: 영어**

[0.2.0 다운로드](https://github.com/moning-1664/retro-meta-studio-releases/releases/tag/v0.2.0) · [질문하기](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a)

여러 게임 라이브러리를 한 작업 공간에서 탐색하고, 메타데이터와 미디어 연결을 편집하며, 컬렉션 간 차이를 비교할 수 있습니다. ES-DE, EmulationStation, Pegasus, LaunchBox 형식의 어댑터를 지원합니다. 호환 범위는 형식과 설정에 따라 다릅니다.

## Quick Start

1. 배포 ZIP 전체를 압축 해제한 뒤 `RetroMetaStudio.exe`를 실행합니다. Python 설치는 필요하지 않습니다.
2. 탭 옆 **+**를 눌러 컬렉션을 추가하고 프런트엔드 형식과 폴더를 선택합니다.
3. 시스템과 게임을 선택하고 상세 정보를 확인합니다. 편집이나 전송 전에는 기존 파일을 백업하세요.
4. 선택한 데이터와 변경 이력을 보관하려면 **Settings → Archive**에서 Archive를 설정합니다.

![RetroMeta Studio 화면 구성](images/overview-guide.png)

| 영역 | 역할 |
|---|---|
| ①&nbsp;**Archive&nbsp;탭** | 선택하여 보관한 게임, 메타데이터, 미디어와 변경 이력을 탐색합니다. |
| ②&nbsp;**Collection&nbsp;탭** | 프런트엔드 형식과 ROM·메타데이터·미디어 폴더를 연결한 라이브러리 사이를 전환합니다. |
| ③ **SYSTEMS** | 시스템별 게임, 전체 게임 또는 즐겨찾기를 선택합니다. |
| ④ **Gamelist** | 현재 Archive 또는 Collection의 게임을 탐색·검색·정렬합니다. |
| ⑤ **Detail** | 선택한 게임의 메타데이터, 미디어와 ROM 정보를 확인하고 편집합니다. Archive 항목에는 변경 이력도 있습니다. |

## How to Use

컬렉션 등록, Archive 활용, 비교 화면과 설정은 [**How to Use**](HOW_TO_USE.ko.md)를 참고하세요.

## ScreenScraper 연동 상태

ScreenScraper 연동은 개발 중이며 개발자 API 승인을 준비하고 있습니다. 이 버전은 ScreenScraper의 승인을 받았거나 일반 계정 이용을 검증한 버전이 아닙니다. 일반 ScreenScraper 계정만으로 이 프리뷰의 연동을 설정할 수 없습니다. 개발자 승인 후 일반 사용자 계정으로 검증할 예정입니다.

개발자 인증 정보, 계정 비밀번호 또는 인증 정보가 포함된 요청 URL을 공개 게시하지 마세요.

## 다운로드와 실행

1. 릴리스 페이지에서 `RetroMetaStudio-0.2.0-windows-x64.zip`을 다운로드합니다. GitHub가 자동 생성하는 소스 압축 파일이 아닙니다.
2. ZIP **전체**를 사용자 폴더처럼 쓰기 가능한 위치에 압축 해제합니다. 이 프리뷰는 `Program Files`보다 사용자 폴더를 권장합니다.
3. `RetroMetaStudio.exe`와 `_internal` 폴더를 함께 유지하고 실행합니다.
4. 웹 인터페이스 초기화에 실패하면 [Microsoft Evergreen WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)을 설치합니다.

Python은 별도로 설치하지 않아도 됩니다. 설치 위저드와 자동 업데이트 확인 기능은 아직 없습니다. 신규 사용자는 영어 UI로 시작하며 기존에 저장한 언어 설정이 우선 적용됩니다. 한국어·일본어·스페인어·프랑스어 UI도 지원합니다. UI 언어 변경은 기존 게임 데이터를 번역하지 않습니다.

## 문의와 문제 보고

[GitHub Q&A](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a)에 앱 버전, Windows 버전, 재현 순서, 기대 결과와 실제 결과를 작성하세요. 필요한 경우 `logs/retrometa.log`의 관련 부분을 `.log` 또는 `.txt`로 첨부합니다.

문의는 공개됩니다. 로그에서 비밀번호, 토큰, 사용자 이름, 개인 경로와 민감한 파일 이름을 제거한 뒤 올려주세요. 자동 로그 정리 기능은 아직 없습니다.

## 무료 사용과 책임

합법적인 용도로 무료 제공됩니다. 사용자는 처리하는 ROM, BIOS, 메타데이터, 이미지 등 콘텐츠의 필요한 권리를 확보하고 관련 법령과 외부 서비스 이용약관을 준수할 책임이 있습니다. 컬렉션 콘텐츠로 ROM, BIOS 또는 상업 게임 아트워크를 제공하지 않습니다.

소프트웨어는 현 상태로 제공됩니다. 관련 법률이 허용하는 범위에서 정확성, 특정 목적 적합성 또는 중단 없는 동작을 보증하지 않으며 제공자의 책임은 법률이 허용하는 범위로 제한됩니다. 고의, 중대한 과실 또는 법적으로 배제할 수 없는 책임은 제외하지 않습니다. 파일 작업을 확인하고 백업을 유지하세요.

무료 사용이 소스 코드의 이용 허락을 의미하지는 않습니다. 외부 구성요소는 각각의 라이선스가 적용되며 다운로드에 포함된 고지를 확인하세요. 제품·서비스명은 호환 형식과 연동을 식별하기 위한 것으로 제휴나 보증을 뜻하지 않습니다.

## 프리뷰 범위와 다음 단계

평가와 개발자 API 검토를 위한 초기 프리뷰입니다. Windows만 지원하며 Linux·macOS 빌드는 없습니다. 새 PC 환경과 모든 프런트엔드 변형에 대한 검증은 아직 충분히 완료하지 않았습니다.

다음 단계는 승인된 ScreenScraper 연동과 사용자 계정 검증, GitHub 릴리스 업데이트 알림, 사용자 데이터 이전을 고려한 Windows 설치 위저드입니다.
