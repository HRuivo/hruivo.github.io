# Minimal developer portfolio

A content-driven portfolio built with SvelteKit, TypeScript, Bun, and mdsvex. The site has four top-level pages—Intro, About, Resume, and Projects—and assembles each page automatically from Markdown sections.

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

SvelteKit's adapter is set to `adapter-auto`, so the project can be deployed to most common platforms without changing the source.
