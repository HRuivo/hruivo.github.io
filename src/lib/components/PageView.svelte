<script lang="ts">
  import { getSections } from '$lib/content';
  import Section from '$lib/components/Section.svelte';
  import type { PageSlug } from '$lib/types';

  let { slug }: { slug: PageSlug } = $props();
  const pageMeta: Record<PageSlug, { title: string; description: string }> = {
    intro: {
      title: 'Hugo Ruivo — Senior Software Engineer · CGI Pipelines & Production Systems',
      description: 'Senior software engineer with 10+ years in CGI pipelines, C++, Python, Unreal Engine, and simulation. Experience, core skills, and a downloadable CV.'
    },
    work: {
      title: 'Professional Work — Hugo Ruivo',
      description: 'Professional case studies in CGI pipeline engineering, software architecture, and production tooling. Explore a multi-brand automotive CGI pipeline.'
    },
    projects: {
      title: 'Personal Projects — Hugo Ruivo',
      description: 'Independent work in compiler design, telemetry, RISC-V systems, FPGA development, and AI integration with Unreal Engine.'
    }
  };
  let sections = $derived(getSections(slug));
  let isProjectPage = $derived(slug === 'projects' || slug === 'work');
  let pageIntro = $derived(isProjectPage ? sections.find((section) => section.layout === 'hero') : undefined);
  let listedSections = $derived(sections.filter((section) => section !== pageIntro));
</script>

<svelte:head>
  <title>{pageMeta[slug].title}</title>
  <meta name="description" content={pageMeta[slug].description} />
</svelte:head>

<div class="page-layout">
  <main class="page-content">
    {#if pageIntro}
      <Section section={pageIntro} index={0} />
    {/if}
    {#each listedSections as section, index (section.id)}
      <Section {section} {index} showMedia={isProjectPage && section.layout === 'project'} />
    {/each}
  </main>

  <aside class="page-index" aria-label="On this page">
    <p>On this page</p>
    <nav>
      {#each listedSections.filter((section) => section.layout !== 'hero' && section.layout !== 'contact') as section}
        <a href={`#${section.id}`}>
          {section.title}{#if slug === 'intro' && section.layout === 'project' && section.description} · {section.description.split(' · ')[0]}{/if}
        </a>
      {/each}
    </nav>
  </aside>
</div>
