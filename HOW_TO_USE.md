# How to Use RetroMeta Studio

[README](README.md) | **How to Use** | [Release Notes](RELEASE_NOTES.md)

**English** · [한국어](HOW_TO_USE.ko.md)

Register a game library on your PC as a Collection, then choose a system and game to browse. To manage a library on an Android device, connect it to your PC and enable file transfer (MTP).

## What is a Collection?

A Collection is a game library used by a frontend such as ES-DE and registered in this app. Choose its frontend format and ROM, metadata and media folders; the app scans those folders to display the games. Each open Collection appears as a tab. Registering it keeps the original game files in their existing locations.

Use one Collection per library or device layout, with recognizable names. For example, keep a desktop library and a living-room library as separate Collections. Browse and edit each independently, then compare them when you want to reconcile information. Android storage is accessed by the Windows app through MTP.

## What is an Archive?

Archive stores games, metadata and media collected from multiple Collections, together with revision history. For example, save information edited in one Collection to Archive, then send it to another Collection. It retains content you explicitly send; it does not automatically back up every Collection.

1. Open **Settings → Archive** and configure its storage format and location.
2. In the Collection header, click the upward arrow to choose content to send to Archive. Check the selected items and operation details before proceeding.
3. Open the **Archive** tab, choose a system under SYSTEMS or search for a game in Gamelist. Select the game to view its information and **Revision** history in Detail.
4. Use **Send to Collection** when you want to reuse archived content in a registered Collection; check the destination and operation options before confirming.

Start without Archive if you only need to browse or edit a library. Add it when you want to retain curated metadata, reconcile several libraries, or reuse selected content. Keep separate backups of files you cannot replace.

## Workspace at a glance

![Workspace overview](images/overview-guide.png)

① **Archive tab** — Open content stored in Archive. This tab appears at the far left when Archive is configured; its position is fixed.

② **Collection tabs** — Switch between registered libraries. Use the (+) button to add a Collection, or drag Collection tabs to change their order.

③ **SYSTEMS** — Choose the game system to browse. All games shows every game in the active library; Favorite shows favorites.

④ **Gamelist** — Browse, search and sort games in the selected system. Click a game to display its information in the Detail pane on the right.

⑤ **Detail** — Inspect the selected game's metadata, media and ROMs, and edit its metadata. Archive entries also have a Revision tab for change history.

## 1. Add your first collection

![Numbered Add Collection dialog](images/add-collection-guide.png)

Click the **+ beside the collection tabs** (① in the main-screen image below). Choose your storage location and the frontend format used by your collection. A collection is a registered library, not a copy of its ROM files.

| Number | Setting | What to choose |
|---|---|---|
| ① | Storage location | **This PC** for local or Windows-accessible storage. **Android (MTP)** for a connected device; enable file transfer and approve access on the device. |
| ② | Frontend Directory | Browse to the folder containing the frontend's collection data. The folder help beside the field describes the expected layout for the selected format. |
| ③ | Storage Format | Confirm the detected format or choose the correct adapter, such as ES-DE. Detection is a suggestion; check it before adding. |
| ④ | ROM Directory | Choose the collection's ROM root when it is separate. At least one metadata or ROM location is required. For Pegasus, the separate ROM field is hidden because metadata normally lives alongside ROMs. |
| ⑤ | External ROM Directory | Optional additional ROM location. Leave it empty for a simple collection without external ROM storage. |
| ⑥ | Name | Use a recognizable name, such as **Demo Library** or **Living-room Library**. If left blank, the app supplies a frontend-based name. |
| ⑥ | Target | Target-platform information describes the collection's intended environment. Leave automatic choices in place unless your collection requires an explicit target. |

Click **Add** (⑦) after checking the format and paths. Registration scans the collection to populate its list. If you change files outside the app, use **Rescan** (④ below) to refresh the view. Folder requirements vary by frontend: do not assume every metadata folder is the same as a ROM root.

The **?** beside Frontend Directory explains the expected folder layout. **Browse** selects a folder. **History** reopens a previously registered collection. Frontend Directory and ROM Directory are individually optional, but at least one must be supplied. Storage Format must be selected.

## 2. Understand the main collection screen

![Numbered collection screen with fictional demonstration content](images/collection-guide.png)

| Number | Area | How to use it |
|---|---|---|
| ① | Collection tabs and **+** | Click a tab to open that Collection's game list. Use the **(+) button** to register another Collection or reopen one from History. Drag Collection tabs to change their order. |
| ② | Systems navigation | Choose the game system to browse. **All games** shows every game in the current Collection; **Favorite** shows favorites. **Add system** adds a system, and **Add External Storage** connects external ROM storage. |
| ③ | List controls and search | Display games in the selected system as a list or cards. Find games with the search box and click column headings to sort. You can also show favorites only or put games with ROMs, metadata or media first. |
| ④ | Collection action icons | Send Collection content to Archive or import metadata. Rescan after changing files outside the app; expand the header details to inspect Collection folders and storage information. |
| ⑤ | Selected-game details | Select a game in Gamelist to view and edit its title, description and other fields under **Metadata**. Open **Media** for images and videos, or **ROMs** for ROM files. **Preview** opens or closes the preview pane. |
| ⑥ | **Save (Ctrl+S)** | Save changes made to the selected game's title, description and other metadata fields. Click **Save** or press **Ctrl+S** after editing. |
| ⑦ | Settings gear | Open application settings, including language, appearance, Archive location, copy preferences and other categories. |

| Icon/control | Purpose |
|---|---|
| List / four-square grid | Choose list or card presentation. |
| ☆ / ★ in the toolbar | Toggle favorites-only display. |
| Database icon in the list toolbar | Show collection entries missing from Archive; requires an appropriately configured Archive. |
| **Show all** dropdown | Put games with ROMs, metadata or media first in the list. |
| Upward arrow in the collection header | Choose Collection content to send to the configured Archive. |
| Downward arrow in the collection header | Open the metadata import source chooser. |
| Circular arrow in the collection header | Read files again for the current Collection or selected system and refresh the game list. |
| Down/up chevron in the collection header | Expand/collapse collection details and storage information. |
| **Scrape** | Open scraping controls. Ordinary-account ScreenScraper access is not yet approved or verified in this preview. |

For a first session, add one collection, choose a system, select a game, and inspect the detail tabs before changing any files. Configure Archive only if you want to use its features; it is not required for viewing a collection.

### Delete games with the Delete key

The same **Delete (Del)** key acts on different content depending on the active tab. Check the deletion confirmation before proceeding.

| Active tab | Delete key action | Physical files |
|---|---|---|
| **Archive** | Removes the selected game's Archive record and list entry. | Keeps ROM/media files and the source Collection's metadata. |
| **ES-DE Collection** | Deletes the selected game's ROM and metadata. | Removes the ROM file and its metadata entry from the gamelist. |

To delete files physically stored in Archive, use the file deletion action in the context menu. Archive does not delete original files linked from an external Collection.

**From 0.2.7**, refreshing does not automatically re-register deleted Archive entries. Collect them explicitly from their Collection to restore them.

## 3. Compare two collections

Open both collections. Right-click the first collection tab and set it as the comparison base. Right-click the other tab and choose the comparison action naming that base. You can also compare specific systems through their context menus.

![Numbered single-window comparison screen with fictional demonstration content](images/compare-guide.png)

The left and right headings identify the two sides. Select a comparison row to inspect both versions in the side panels.

| Number | Control | Purpose |
|---|---|---|
| ① | Comparison dropdown | Show all pairs, differing entries, same entries, one-sided entries, conflicts, or media differences. |
| ② | `* / ≠ / ≒ / =` quick filters | `*`: all; **≠**: differing metadata/one-sided results; **≒**: same metadata but different media; **=**: same comparison entries. "Same" does not prove byte-for-byte ROM equality. |
| ③ | **❮ / ❯** direction buttons | Copy the selected entries toward the indicated side. **❮** uses right → left; **❯** uses left → right. Check the source and destination before confirming. |
| ④ | Swap / refresh | Swap the comparison sides or rebuild the comparison from their current state. |
| ⑤ | **Copy ROM files too** | Include ROM files in directional transfers. Leave it off when reconciling metadata/media only. |
| ⑥ | Left and right detail panes | Inspect titles, descriptions, media and ROM details for the selected pair before copying anything. |
| ⑦ | **Exit Compare** | Return to normal collection browsing. |

Begin with comparison and inspection only. If you choose to transfer data, back up the destination, select the intended rows, check direction and the ROM checkbox, then review the operation-specific confirmation. The transfer buttons can change files; there is no standalone Plan review screen in 0.2.0.

## 4. Choose initial application settings

Open the gear (⑦ in the main-screen image), then select **General**.

![Numbered General settings screen](images/settings-guide.png)

| Number | Setting | Suggested first-use choice |
|---|---|---|
| ① | Settings categories | Use **General** for language/playback, **Collections** for tab/navigation behavior, and **Appearance** for theme, density and scale. Configure other categories when needed. |
| ② | **Language** | Choose your preferred UI language. English is the default for new users. Game titles and descriptions are not automatically translated. |
| ③ | **Video playback / Autoplay delay** | Choose how preview videos start and the delay before autoplay. The example uses Autoplay and 3 seconds. |
| ④ | **Sound / Volume / Loop playback** | Control preview audio, its level, and whether videos repeat. These settings concern media previews. |
| ⑤ | **OK** | Save settings changes and close the dialog. Save game metadata separately using the Detail pane's **Save** button. |

Turn **Sound** off to mute media previews. Use **Appearance** to adjust interface scale and density. ScreenScraper access using ordinary accounts is still awaiting authorization and validation.

## 5. Other settings

Choose a category on the left of the settings dialog. You do not need to configure every category before starting; change the settings needed for your workflow.

| Category | What it configures | When to use it |
|---|---|---|
| **Collections** | Restore open tabs at startup, remember the last system for each Collection, hide empty systems, and set the default ROM/metadata/media priority sort. | Continue your previous session or simplify the SYSTEMS list. |
| **Game list** | Choose visible columns and their order. Configure DeepL Free/Pro or Google and an API key for description translation. | Put frequently used information first or translate game descriptions. Translation is a separate action; changing the UI language does not translate game data. |
| **Title tags** | Set language/region labels before or after titles and choose a multidisc numbering format. | Distinguish language variants or discs by title. After configuring the labels, run the language/disc tag action from the game's context menu. |
| **Scrape** | Manage ScreenScraper account information and usage, ROM hash lookup, and media types to download. | Search for game information and images. In 0.2.0, developer authorization and ordinary-account validation are pending; public account setup instructions will follow. |
| **Copy policy** | Choose whether Collection-to-Collection copy/paste includes ROM files and media. | Turn ROM copying off to transfer game information only; turn media copying off to omit images and videos. Check **Copy ROM files too** separately when transferring from the comparison screen. |
| **Archive** | Choose the storage format, metadata folder, ROM folder and media storage arrangement. Initial setup offers creating a store, using an existing one or converting it. | Retain information from several Collections and send it to other libraries. Check folder detection and the selected operation before applying changes to existing content. |
| **Emulator** | Set the RetroArch executable and Core folder, then choose a default Core per system. Default assignments can also be filled from installed Cores. | Launch games from the app. Install RetroArch and the required Cores on your PC first. |
| **Appearance** | Choose a theme, list spacing, interface scale (80–130%) and default preview visibility for newly opened Collections. | Adjust small text or crowded rows. You can also change scale with Ctrl+mouse wheel. |
| **Advanced** | Manage cleanup of undo backups on exit, backup count/size limits, and resetting appearance settings. | Control backup disk usage or restore the default theme, spacing and scale. |

**Advanced backup cleanup** is separate from Archive. With cleanup on exit enabled, completed operations cannot be undone after closing the app. Backups for recovery of interrupted operations are retained. **Reset appearance settings** restores the theme, list spacing and scale.

## Data, updates, and removal

In this preview, settings and databases are stored in `db`, logs in `logs`, and clipboard handoff files in `clipboard`, beside the executable. ROMs, media, and Archive files may be stored at separately configured locations.

Back up application databases and any affected collection files before making changes. To update, close the app, extract the new release into a separate folder, and migrate your backed-up application data only when the release notes confirm compatibility. Do not overwrite or remove your only copy of user data. An older app may not be able to open a database migrated by a newer version.

To remove the preview, close it and remove the extracted application folder after preserving any data you need. Check separately configured Archive and collection locations before deleting anything.

[Back to the project overview](README.md) · [Ask a question](https://github.com/moning-1664/retro-meta-studio-releases/discussions/categories/q-a)
