# RetroMeta Studio

A free Windows desktop app for organizing game collections, metadata, and media across frontend formats.

**First public preview: 0.2.0 · Windows x64 · English by default · Source code is private**

[Download version 0.2.0](https://github.com/moning-1664/retro-meta-studio-releases/releases/tag/v0.2.0) · [Ask a question](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a)

## What you can do

- Register and scan collections on storage accessible from Windows.
- Review and edit game metadata and media associations.
- Compare collections and review planned file changes before applying them.
- Read and write frontend formats through adapters for ES-DE, EmulationStation, Pegasus, and LaunchBox. Compatibility varies by format and configuration; back up existing frontend files first.
- Configure an optional Archive to retain selected collection data and revision history.

## ScreenScraper integration status

ScreenScraper integration is under development. Developer API authorization is being prepared; this release does **not** claim approval by ScreenScraper or verified access for ordinary user accounts. An ordinary ScreenScraper account alone is not sufficient to configure this preview. Public account-based scraping will be validated after developer authorization.

Do not post developer credentials, account passwords, or authenticated request URLs in public discussions.

## Download and run

1. Download `RetroMetaStudio-0.2.0-windows-x64.zip` from the release page, rather than GitHub's automatically generated source archives.
2. Extract the **entire** ZIP into a writable folder, such as a folder under your user profile. Avoid `Program Files` for this preview.
3. Keep `RetroMetaStudio.exe` and `_internal` together. Run `RetroMetaStudio.exe` from the extracted folder.
4. If the app cannot initialize its web interface, install the [Microsoft Evergreen WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).

Python installation is not required. This preview has no installer or automatic update checker. English is the initial UI language; existing saved preferences take precedence. The UI also supports Korean, Japanese, Spanish, and French. Changing UI language does not translate existing game data.

## First steps

1. Add a collection and configure its frontend and storage paths.
2. Scan the collection, then review the discovered entries.
3. Review metadata and media using the list and detail views.
4. Use Compare when reconciling two collections.
5. Review the Plan before applying file changes or exporting frontend data.

## Data, updates, and removal

In this preview, settings and databases are stored in `db`, logs in `logs`, and clipboard handoff files in `clipboard`, beside the executable. ROMs, media, and Archive files may be stored at separately configured locations.

Back up application databases and any affected collection files before making changes. To update, close the app, extract the new release into a separate folder, and migrate your backed-up application data only when the release notes confirm compatibility. Do not overwrite or remove your only copy of user data. An older app may not be able to open a database migrated by a newer version.

To remove the preview, close it and remove the extracted application folder after preserving any data you need. Check separately configured Archive and collection locations before deleting anything.

## Questions and reports

Use [GitHub Q&A](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a). Include the app version, Windows version, steps to reproduce, and expected versus actual behavior. For troubleshooting, attach relevant portions of `logs/retrometa.log` as a `.log` or `.txt` file.

Discussions are public. Review logs before uploading: remove passwords, tokens, usernames, personal paths, and sensitive filenames. Automatic diagnostic log sanitization is planned and is not available in this release.

## Free use and responsibility

RetroMeta Studio is provided free of charge for lawful use. Users are responsible for ensuring they have the necessary rights to any ROMs, BIOS files, metadata, images, and other content they process, and for complying with applicable law and third-party service terms. No ROMs, BIOS files, or commercial game artwork are supplied as collection content.

The software is provided as-is. To the extent permitted by applicable law, no warranty of accuracy, fitness for a particular purpose, or uninterrupted operation is given, and the provider's liability is limited to the extent permitted by law. These terms do not exclude liability for intentional misconduct, gross negligence, or any liability that cannot legally be excluded. Review file operations and maintain backups.

Free use does not grant a license to the private source code. Third-party components remain subject to their own license terms; see the notices included with the download. Product and service names identify compatible formats and integrations and do not imply affiliation, sponsorship, or endorsement.

## Preview limitations and next steps

This release is an early preview for evaluation and developer API review. Windows only; no Linux or macOS build is provided. Clean-machine compatibility and all frontend variants have not yet been comprehensively validated.

Planned next steps: approved ScreenScraper integration using each user's own account, GitHub release update notifications, and a Windows installation wizard with safe user-data migration.

Screenshots will be added after review using original demonstration content or content whose publication rights have been verified.
