# Minimal developer portfolio

A content-driven portfolio built with SvelteKit, TypeScript, Bun, and mdsvex. The site has three top-level pages—Intro, Work, and Projects—and assembles each page automatically from Markdown sections. Intro contains the professional overview, skills, experience, and CV download.

## Run it

Install [Bun](https://bun.sh), then:

```sh
bun install
bun run dev
```

For a production check:

```sh
bun run check
bun run build
```

## Edit content

Content lives in `src/content/<page>/`. Each Markdown file becomes one section on that page. Files are sorted by the `order` value in their frontmatter, so filenames can be anything meaningful.

```md
---
title: Project name
eyebrow: Product platform · 01
description: A short subtitle shown beside the content.
order: 2
layout: project
year: 2026
stack:
  - SvelteKit
  - TypeScript
href: https://example.com
linkLabel: View project
---

The Markdown body is the section content. Use **normal Markdown** here.
```

Available layouts are `hero`, `text`, `split`, `list`, `project`, `feature`, and `contact`. The `feature` layout creates a highlighted case study card with a linked title and call to action. The layout controls presentation only; all content stays in Markdown.

To add a section, create another `.md` file in the appropriate page folder. To reorder sections, change `order`. Update the placeholder email addresses, résumé details, project links, and personal copy before publishing.

### Project screenshots and videos

Each project shows a blank 16:9 screenshot placeholder until you provide an image. Put screenshots in `static/images/` and replace the existing fields in the project's Markdown frontmatter (between the opening and closing `---`). Keep only one of each field:

```yaml
screenshot: /images/neotron.png
screenshotAlt: Neotron OS running its shell in QEMU
videoUrl: https://www.youtube.com/watch?v=YOUR_VIDEO_ID
```

To embed a video, put an MP4 or WebM file in `static/videos/` and add this field to the project's frontmatter:

```yaml
videoSrc: /videos/neotron-demo.mp4
```

The video replaces the screenshot with a responsive player with playback controls and inline mobile playback. When `screenshot` is set, it becomes the video's poster image. Videos load metadata only until played. Use a browser-compatible format such as MP4 with H.264 video and AAC audio. Omit `static` from asset URLs; image and embedded video paths automatically include the GitHub Pages base path.

For videos with speech or meaningful audio, add a WebVTT captions file using `videoCaptions: /videos/neotron-demo.vtt`. Set `videoLanguage` to its language code (defaults to `en`).

Leave `videoSrc` empty to show the screenshot, or the blank placeholder when `screenshot` is also empty. `videoUrl` remains an optional external “Watch demo” link; leave it empty to hide the link.

## Professional case study

The automotive CGI pipeline case study lives at `/work/automotive-cgi-pipeline/`, implemented in `src/routes/work/automotive-cgi-pipeline/+page.svelte`. It is prerendered alongside the Markdown pages. Earlier conceptual diagrams remain in `static/images/automotive-pipeline-architecture.svg` and `static/images/vehicle-data-normalization.svg` for reuse.

The current-role section on Intro and the featured Work card link to the case study through Markdown frontmatter. Internal links and diagrams include the configured GitHub Pages base path. The Work navigation tab stays active on the nested case study route.

The case study uses verified facts from `halon_portfolio_codex_handoff.md`. Detailed API paths, Perforce stream topology, Deadline execution modes, and performance metrics are intentionally omitted pending owner confirmation. Keep Docker deployment scoped to the web frontend and backend.

The downloadable CV is `static/HugoRuivoResume.pdf`; its application-specific editable source is in `documents/halon/`.

## Add a page

1. Add its slug to `pageSlugs` in `src/lib/types.ts`.
2. Add a navigation entry in `src/lib/components/Header.svelte`.
3. Create `src/content/<slug>/` and add Markdown section files.

## Deploy to GitHub Pages

The site uses `adapter-static` to prerender every page into `build/`. No server is required.

Place your résumé PDF at `static/HugoRuivoResume.pdf` before publishing. The Intro page links directly to this file for download.

1. Push this repository to GitHub with `main` as the default branch.
2. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
3. Run **Deploy portfolio to GitHub Pages** from the **Actions** tab, or push another commit to `main`.

The workflow installs dependencies, checks the source, builds, and deploys `build/`. It reads the base path from GitHub Pages automatically, supporting both repository URLs and root/custom-domain sites.

To test a repository subpath locally:

```sh
BASE_PATH=/your-repository bun run build
BASE_PATH=/your-repository bun run preview
```

Open the preview URL at `/your-repository/`. For root hosting, omit `BASE_PATH`.
