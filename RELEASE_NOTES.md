## RetroMeta Studio 0.6b · Build 0.6.0

Windows 10/11 x64 preview. Download **RetroMetaStudio-0.6b-windows-x64-Setup.exe** (installer) or **RetroMetaStudio-0.6b-windows-x64-Portable.zip** (extract and run). GitHub source archives are not the application. Both packages use build **0.6.0**. Portable includes a Microsoft WebView2 setup helper for PCs without the Runtime (internet required).

### 설치 및 주요 변경
- 현재 사용자용 Windows 설치 프로그램. Python 포함, 관리자 권한 없이 설치.
- WebView2가 없으면 Microsoft에서 자동 다운로드·설치합니다. 이 경우 인터넷 연결이 필요합니다.
- Collection/Archive 대시보드의 반복 로딩과 미디어 집계를 개선했습니다.
- 미아 미디어 정리, 중복 ROM 정보 합치기, 붙여넣기 후 선택과 포커스를 개선했습니다.
- 우클릭 메뉴와 ROM 복사 옵션, 진행률·남은 시간 표시를 정리했습니다.
- 기능·설치·백업·무료 사용과 책임 안내 및 외부 구성요소 고지를 포함합니다.

### 업데이트와 데이터
설정 → About에서 새 공개 버전을 확인할 수 있습니다. **자동 다운로드·설치는 아직 없습니다.** 업데이트 시 앱을 종료하고 새 Setup을 같은 설치 폴더에 실행하세요. 앱이 생성한 데이터는 재설치와 제거 시 유지합니다. 기존 포터블 데이터는 자동 이전되지 않습니다. 파일 변경 전 백업하세요.

같은 공개 버전 내 내부 빌드 갱신은 아직 업데이트 확인에 반영되지 않습니다. 내부 빌드는 마지막 숫자만 증가하며 이번 빌드는 `0.6.0`입니다.

### Installation and changes
- Per-user Windows installer; Python is bundled and elevation is not requested.
- Missing WebView2 is downloaded and installed from Microsoft; internet access is required in this case.
- Improved Collection/Archive dashboard loading and media accounting, unreferenced-media cleanup, duplicate-ROM metadata merging, and selection/focus after paste.
- Unified context menus, ROM copy controls and progress/ETA displays.
- Includes feature, installation, backup, existing free-use/responsibility and third-party notices.

### Updates and data
Settings → About checks for new public releases. **Automatic download/installation is not implemented.** Close the app and run new Setup in the same folder to update. Reinstallation and uninstall preserve app-created data. Existing portable data are not migrated automatically. Back up before file operations. Same-public-version internal build updates are not detected yet.

### Validation and preview limits
Local install/reinstall/uninstall and user-data preservation verified. Version/release tests (17), translated UI tests (72), and focused About/scan/ETA checks (3) passed. This installer is unsigned. Clean-Windows and missing-WebView2 download-path validation are pending. Format compatibility and external-service support vary; ScreenScraper authorization and ordinary-account validation remain under review. ROM/BIOS game content is not included.

Checksum: see **SHA256SUMS.txt**. Third-party license texts are included in the installed application folder. Product names and logos belong to their respective owners; no affiliation is claimed. The project source license and artwork provenance remain under review; this preview does not grant rights to third-party assets.
