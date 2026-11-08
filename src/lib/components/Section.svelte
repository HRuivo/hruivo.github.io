<script lang="ts">
  import type { ContentSection } from '$lib/types';
  import { base } from '$app/paths';

  let { section, index }: { section: ContentSection; index: number } = $props();
  let Content = $derived(section.component);
</script>

<section class:hero={section.layout === 'hero'} class:project={section.layout === 'project'} class:contact={section.layout === 'contact'} id={section.id}>
  <div class="section-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>

  <div class="section-heading">
    {#if section.eyebrow}<p class="eyebrow">{section.eyebrow}</p>{/if}
    <h2>{section.title}</h2>
    {#if section.description}<p class="description">{section.description}</p>{/if}
  </div>

  <div class="section-content">
    {#if section.year}<p class="project-year">{section.year}</p>{/if}
    <Content />
    {#if section.stack?.length}
      <ul class="stack" aria-label="Technologies">
        {#each section.stack as item}<li>{item}</li>{/each}
      </ul>
    {/if}
    {#if section.href}
      <a class="text-link" href={section.href.startsWith('/') ? `${base}${section.href}` : section.href} download={section.download}>
        {section.linkLabel ?? 'View project'} <span aria-hidden="true">{section.download ? '↓' : '↗'}</span>
      </a>
    {/if}
  </div>
</section>
