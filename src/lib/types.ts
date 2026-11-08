import type { Component } from "svelte";

export const pageSlugs = ["intro", "resume", "projects"] as const;
export type PageSlug = (typeof pageSlugs)[number];

export type SectionLayout =
    "hero" | "text" | "split" | "list" | "project" | "contact";

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
}

export interface MarkdownModule {
    default: Component;
    metadata: SectionMeta;
}

export interface ContentSection extends SectionMeta {
    id: string;
    component: Component;
}
