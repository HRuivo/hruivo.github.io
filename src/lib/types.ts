import type { Component } from "svelte";

export const pageSlugs = ["intro", "work", "projects"] as const;
export type PageSlug = (typeof pageSlugs)[number];

export type SectionLayout =
    "hero" | "text" | "split" | "list" | "project" | "feature" | "contact";

export interface SectionMeta {
    title: string;
    description?: string;
    eyebrow?: string;
    order: number;
    layout?: SectionLayout;
    year?: string;
    stack?: string[];
    href?: string;
    linkLabel?: string;
    download?: boolean;
    actions?: {
        label: string;
        href: string;
        download?: boolean;
    }[];
    screenshot?: string;
    screenshotAlt?: string;
    videoSrc?: string;
    videoCaptions?: string;
    videoLanguage?: string;
    videoUrl?: string;
}

export interface MarkdownModule {
    default: Component;
    metadata: SectionMeta;
}

export interface ContentSection extends SectionMeta {
    id: string;
    component: Component;
}
