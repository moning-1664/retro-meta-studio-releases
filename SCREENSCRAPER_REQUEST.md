# ScreenScraper developer authorization request

The official API documentation directs developers to introduce their software through the WebAPI forum to obtain developer credentials. It does not identify a dedicated application email address. Use the forum first; the email-style draft below can also be used as a forum post or sent to an address the maintainers explicitly provide.

- API documentation: https://www.screenscraper.fr/webapi2.php
- WebAPI forum: https://www.screenscraper.fr/forumsujets.php?frub=12&numpage=0
- Public project: https://github.com/moning-1664/retro-meta-studio-releases
- Preview download: https://github.com/moning-1664/retro-meta-studio-releases/releases/tag/v0.2.0

## 신청 절차 (한국어)

1. [ScreenScraper](https://www.screenscraper.fr/)에서 본인의 계정으로 로그인합니다. 계정이 없으면 사이트의 Register로 가입하고 안내된 활성화 절차를 완료합니다.
2. [WebAPI 포럼](https://www.screenscraper.fr/forumsujets.php?frub=12&numpage=0)을 엽니다. 로그인 후 새 주제 작성 기능을 사용합니다. 로그인 상태의 버튼 이름은 여기서 검증하지 않았습니다.
3. 아래 제목과 본문을 사용합니다. `[YOUR SCREENSCRAPER USERNAME]`을 본인 계정 이름으로 바꿉니다. 비밀번호는 적지 않습니다.
4. 공개 프로젝트와 0.2.0 다운로드 링크를 포함합니다. README의 화면을 볼 수 있으므로 큰 ZIP을 포럼에 직접 첨부할 필요는 없습니다.
5. 운영진에게 앱의 개발자 API 사용 승인, `devid`·`devpassword` 발급, 사용할 `softname`, 사용자 계정 연동 방식과 클라이언트 배포 조건을 문의합니다. 인증 정보는 비공개 채널로 받습니다.
6. 운영진의 답변에 따라 추가 자료를 제공하고 조건을 확인합니다. 무료 비공개 소스 앱의 승인 여부는 운영진의 판단이며, 공개 릴리스만으로 승인이 완료되지는 않습니다.
7. 승인 후 발급된 앱 인증 정보와 테스트용 일반 사용자 계정을 함께 사용하여 로그인·게임 검색·미디어 다운로드를 검증합니다. 계정별 동시 요청 수와 사용량 제한, 오류·취소 처리를 확인한 뒤 새 배포본으로 제공합니다.

신청할 대상은 **앱의 개발자 API 이용 권한**입니다. 사용자마다 개발자 승인을 받는 구조를 요청하는 것이 아니라, 승인된 앱에서 각 사용자의 ScreenScraper 계정으로 이용하도록 신청합니다. 일반 계정의 제한은 승인 후에도 적용됩니다.

## Email or forum draft

Subject: Developer API access request — RetroMeta Studio (free Windows application)

Hello ScreenScraper team,

My ScreenScraper username is [YOUR SCREENSCRAPER USERNAME].

I am the developer of RetroMeta Studio, a free Windows desktop application for managing game collections, metadata, and media across frontend formats. The application source is private; public documentation and a downloadable evaluation build are available here:

https://github.com/moning-1664/retro-meta-studio-releases

The first public preview is version 0.2.0:
https://github.com/moning-1664/retro-meta-studio-releases/releases/tag/v0.2.0

I would like to request developer API authorization and the developer credentials required for this application. The intended software name is RetroMetaStudio, subject to your naming requirements.

The intended integration lets each user enter their own ScreenScraper account credentials to retrieve game metadata and selected media. The preview includes integration work, but approved ordinary-account access has not yet been validated. I will validate it after authorization and implement any required changes before advertising general scraping support.

Please advise on your required attribution, credential distribution and protection rules for a closed-source desktop client, and API usage requirements, including concurrency, daily limits, caching, and retry behavior. I intend to respect the limits returned by the API and avoid aggressive retries. No ROM or BIOS downloads are provided by this application.

Could you please let me know the next steps and whether you need any additional information or demonstration? Please provide developer credentials through a private channel rather than a public forum reply.

Thank you,
moning-1664

## Follow-up phase

After authorization: integrate the application credentials using the approved method; expose only user account settings in normal UI; validate account authentication, permitted concurrency and quotas, cancellation and network failures; exclude credentials and authenticated URLs from logs. Then add the update checker and installer with data migration. These features are not promised as completed in 0.2.0.

## 제출 상태와 후속 연락

이 파일은 제출용 초안입니다. ScreenScraper 포럼 게시나 이메일 발송은 아직 하지 않았습니다. 이메일로 요청하라는 안내를 받으면 운영진이 제공한 주소에 위 제목과 본문을 보내세요. 확인되지 않은 주소로 비밀번호나 개발자 인증 정보를 보내지 마세요.

승인 답변에서 확인할 내용:

- 무료 비공개 소스 Windows 앱의 API 이용 허용 여부
- 앱 전용 개발자 인증 정보와 승인된 소프트웨어 이름
- 각 사용자의 계정으로 로그인하는 방식
- 데스크톱 배포본의 개발자 인증 정보 포함·보호 방법
- 출처 표시, 캐싱과 API 요청 제한 관련 조건

접수 후에는 같은 주제에서 답변을 이어가고, 요청한 추가 정보를 제공합니다. 승인 전까지는 README의 승인·일반 계정 검증 대기 상태를 유지합니다.
