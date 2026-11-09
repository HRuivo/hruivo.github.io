<script lang="ts">
  import { getSections } from '$lib/content';
  import Section from '$lib/components/Section.svelte';
  import type { PageSlug } from '$lib/types';

  let { slug }: { slug: PageSlug } = $props();
  let sections = $derived(getSections(slug));
  let pageIntro = $derived(slug === 'projects' ? sections.find((section) => section.layout === 'hero') : undefined);
  let listedSections = $derived(sections.filter((section) => section !== pageIntro));
</script>

<div class="page-layout">
  <main class="page-content">
    {#if pageIntro}
      <Section section={pageIntro} index={0} />
    {/if}
    {#each listedSections as section, index (section.id)}
      <Section {section} {index} showMedia={slug === 'projects' && section.layout === 'project'} />
    {/each}
  </main>

  <aside class="page-index" aria-label="On this page">
    <p>On this page</p>
    <nav>
      {#each listedSections.filter((section) => section.layout !== 'hero' && section.layout !== 'contact') as section}
        <a href={`#${section.id}`}>
          {section.title}{#if slug === 'resume' && section.layout === 'project' && section.description} · {section.description.split(' · ')[0]}{/if}
        </a>
      {/each}
    </nav>
  </aside>
</div>
