# Minimal developer portfolio

A content-driven portfolio built with SvelteKit, TypeScript, Bun, and mdsvex. The site has three top-level pages—Intro, Resume, and Projects—and assembles each page automatically from Markdown sections.

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

Available layouts are `hero`, `text`, `split`, `list`, `project`, and `contact`. The layout controls presentation only; all content stays in Markdown.

To add a section, create another `.md` file in the appropriate page folder. To reorder sections, change `order`. Update the placeholder email addresses, résumé details, project links, and personal copy before publishing.

## Add a page

1. Add its slug to `pageSlugs` in `src/lib/types.ts`.
2. Add a navigation entry in `src/lib/components/Header.svelte`.
3. Create `src/content/<slug>/` and add Markdown section files.

## Deploy to GitHub Pages

The site uses `adapter-static` to prerender every page into `build/`. No server is required.

Place your résumé PDF at `static/resume.pdf` before publishing. The résumé page links directly to this file for download.

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
