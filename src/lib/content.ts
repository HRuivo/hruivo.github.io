import type { ContentSection, MarkdownModule, PageSlug } from '$lib/types';

const markdown = import.meta.glob<MarkdownModule>('/src/content/**/*.md', {
  eager: true
});

export function getSections(page: PageSlug): ContentSection[] {
  return Object.entries(markdown)
    .filter(([path]) => path.includes(`/content/${page}/`))
    .map(([path, module]) => ({
      ...module.metadata,
      id: path.split('/').pop()?.replace(/\.md$/, '') ?? path,
      component: module.default
    }))
    .sort((a, b) => a.order - b.order);
}
