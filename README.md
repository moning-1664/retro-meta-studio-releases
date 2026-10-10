# RetroMeta Studio

**README** | [How to Use](HOW_TO_USE.md) | [Release Notes](RELEASE_NOTES.md)

**English** · [한국어](README.ko.md)

A free Windows desktop app for organizing game collections, metadata, and media across frontend formats.

**Public preview: 0.6b · Windows x64 · English by default**

[Windows installer](https://github.com/moning-1664/retro-meta-studio-releases/releases/download/v0.6b/RetroMetaStudio-0.6b-windows-x64-Setup.exe) · [Portable ZIP](https://github.com/moning-1664/retro-meta-studio-releases/releases/download/v0.6b/RetroMetaStudio-0.6b-windows-x64-Portable.zip) · [Release notes](https://github.com/moning-1664/retro-meta-studio-releases/releases/tag/v0.6b) · [Ask a question](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a)

RetroMeta Studio brings your game libraries into one workspace. Browse games, edit metadata and media associations, and compare frontend collections to reconcile their differences. Adapters support ES-DE, EmulationStation, Pegasus, and LaunchBox; compatibility varies by format and configuration.

## Quick Start

1. Download and run `RetroMetaStudio-0.6b-windows-x64-Setup.exe`, then launch the app from the Start menu. Python is not required.
2. Click **+** beside the tabs to add a collection. Choose its frontend format and folders.
3. Choose a system, select a game, and inspect its details. Back up existing files before editing or transferring data.
4. Configure **Settings → Archive** if you want to retain selected data and revision history.

![RetroMeta Studio workspace overview](images/overview-guide.png)

| Area | Purpose |
|---|---|
| ①&nbsp;**Archive&nbsp;tab** | Open content stored in Archive. This tab appears at the far left when Archive is configured; its position is fixed. |
| ②&nbsp;**Collection&nbsp;tabs** | Switch between registered libraries. Use the (+) button to add a Collection, or drag Collection tabs to change their order. |
| ③&nbsp;**SYSTEMS** | Choose the game system to browse. All games shows every game in the active library; Favorite shows favorites. |
| ④&nbsp;**Gamelist** | Browse, search and sort games in the selected system. Click a game to display its information in the Detail pane on the right. |
| ⑤&nbsp;**Detail** | Inspect the selected game's metadata, media and ROMs, and edit its metadata. Archive entries also have a Revision tab for change history. |

## How to Use

See [**How to Use**](HOW_TO_USE.md) for collection setup, Archive workflows, comparison controls and application settings.

## ScreenScraper integration status

ScreenScraper integration is under development. Developer API authorization is being prepared; this release does **not** claim approval by ScreenScraper or verified access for ordinary user accounts. An ordinary ScreenScraper account alone is not sufficient to configure this preview. Public account-based scraping will be validated after developer authorization.

Do not post developer credentials, account passwords, or authenticated request URLs in public discussions.

## Download and run

1. Download `RetroMetaStudio-0.6b-windows-x64-Setup.exe` from the release page, rather than GitHub's source archives.
2. Run Setup. Installation is for the current user and does not request administrator rights.
3. Python is included. If Microsoft WebView2 Runtime is missing, Setup downloads it from Microsoft; internet access is required in this case.
4. Launch RetroMeta Studio from the Start menu. A desktop shortcut is optional.

**Portable alternative:** Download `RetroMetaStudio-0.6b-windows-x64-Portable.zip`, extract the entire archive into a writable folder and run `RetroMetaStudio.exe`. Keep `_internal` beside the executable. Python is included. If WebView2 is missing, run the included `MicrosoftEdgeWebview2Setup.exe` (internet required). See `PORTABLE_README.txt`.

**GitHub's Code ZIP / Source code ZIP contains repository documents, not the built app. Use the installer or Portable ZIP links above.**

The public version is **0.6b** and the internal build is **0.6.0**. Settings → About checks GitHub releases; updating currently requires downloading and running Setup manually. Same-public-version build updates are not detected yet.

Reinstalling in the same installation folder preserves app-created data. Uninstall also preserves those data. Back up before updating. Existing portable installations keep their own data; installing does not automatically migrate them.

English is the initial UI language; saved preferences take precedence. Korean, Japanese, Spanish and French are supported.

## Questions and reports

Use [GitHub Q&A](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a). Include the app version, Windows version, steps to reproduce, and expected versus actual behavior. For troubleshooting, attach relevant portions of `logs/retrometa.log` as a `.log` or `.txt` file.

Discussions are public. Review logs before uploading: remove passwords, tokens, usernames, personal paths, and sensitive filenames. Automatic diagnostic log sanitization is planned and is not available in this release.

## Free use and responsibility

RetroMeta Studio is provided free of charge for lawful use. Users are responsible for ensuring they have the necessary rights to any ROMs, BIOS files, metadata, images, and other content they process, and for complying with applicable law and third-party service terms. No ROMs, BIOS files, or commercial game artwork are supplied as collection content.

The software is provided as-is. To the extent permitted by applicable law, no warranty of accuracy, fitness for a particular purpose, or uninterrupted operation is given, and the provider's liability is limited to the extent permitted by law. These terms do not exclude liability for intentional misconduct, gross negligence, or any liability that cannot legally be excluded. Review file operations and maintain backups.

Free use does not grant a license to the private source code. Third-party components remain subject to their own license terms; see the notices included with the download. Product and service names identify compatible formats and integrations and do not imply affiliation, sponsorship, or endorsement.

## Preview limitations and next steps

This release is an early preview for evaluation and developer API review. Windows only; no Linux or macOS build is provided. Clean-machine compatibility and all frontend variants have not yet been comprehensively validated.

Planned next steps: approved ScreenScraper integration, internal-build update detection, automatic installation and clean-PC validation.
