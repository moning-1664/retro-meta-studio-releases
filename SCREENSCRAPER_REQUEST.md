# ScreenScraper developer authorization request

The official API documentation directs developers to introduce their software through the WebAPI forum to obtain developer credentials. It does not identify a dedicated application email address. Use the forum first; the email-style draft below can also be used as a forum post or sent to an address the maintainers explicitly provide.

- API documentation: https://www.screenscraper.fr/webapi2.php
- WebAPI forum: https://www.screenscraper.fr/forumsujets.php?frub=12&numpage=0
- Public project: https://github.com/moning-1664/retro-meta-studio-releases
- Preview download: https://github.com/moning-1664/retro-meta-studio-releases/releases/tag/v0.2.0

## Draft

Subject: Developer API access request — RetroMeta Studio (free Windows application)

Hello ScreenScraper team,

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
