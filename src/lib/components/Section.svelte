<script lang="ts">
  import type { ContentSection } from '$lib/types';
  import { base } from '$app/paths';

  let { section, index, showMedia = false }: { section: ContentSection; index: number; showMedia?: boolean } = $props();
  let Content = $derived(section.component);
  let screenshot = $derived(section.screenshot || '/images/project-placeholder.svg');
</script>

<section class:hero={section.layout === 'hero'} class:project={section.layout === 'project'} class:feature={section.layout === 'feature'} class:contact={section.layout === 'contact'} id={section.id}>
  <div class="section-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>

  <div class="section-heading">
    {#if section.eyebrow}<p class="eyebrow">{section.eyebrow}</p>{/if}
    <h2>
      {#if section.layout === 'feature' && section.href}
        <a class="feature-title" href={section.href.startsWith('/') ? `${base}${section.href}` : section.href}>{section.title}</a>
      {:else}
        {section.title}
      {/if}
    </h2>
    {#if section.description}<p class="description">{section.description}</p>{/if}
  </div>

  <div class="section-content">
    {#if section.year}<p class="project-year">{section.year}</p>{/if}
    <Content />
    {#if showMedia}
      {#if section.videoSrc}
        <!-- svelte-ignore a11y_media_has_caption (Silent demos need no captions; videos with audio can supply videoCaptions.) -->
        <video
          class="project-video"
          src={section.videoSrc.startsWith('/') ? `${base}${section.videoSrc}` : section.videoSrc}
          poster={section.screenshot ? (section.screenshot.startsWith('/') ? `${base}${section.screenshot}` : section.screenshot) : undefined}
          aria-label={`${section.title} demo`}
          controls
          playsinline
          preload="metadata"
        >
          {#if section.videoCaptions}
            <track
              kind="captions"
              src={section.videoCaptions.startsWith('/') ? `${base}${section.videoCaptions}` : section.videoCaptions}
              srclang={section.videoLanguage || 'en'}
              label="Captions"
              default
            />
          {/if}
          <a href={section.videoSrc.startsWith('/') ? `${base}${section.videoSrc}` : section.videoSrc}>Download {section.title} demo</a>
        </video>
      {:else}
      <img
        class="project-screenshot"
        src={screenshot.startsWith('/') ? `${base}${screenshot}` : screenshot}
        alt={section.screenshot ? section.screenshotAlt || `${section.title} screenshot` : ''}
        width="1600"
        height="900"
        loading="lazy"
        decoding="async"
      />
      {/if}
    {/if}
    {#if section.stack?.length}
      <ul class="stack" aria-label="Technologies">
        {#each section.stack as item}<li>{item}</li>{/each}
      </ul>
    {/if}
    {#if section.href || (showMedia && section.videoUrl)}
      <div class="section-links">
        {#if section.href}
          <a class="text-link" href={section.href.startsWith('/') ? `${base}${section.href}` : section.href} download={section.download}>
            {section.linkLabel ?? 'View project'} <span aria-hidden="true">{section.download ? '↓' : '↗'}</span>
          </a>
        {/if}
        {#if showMedia && section.videoUrl}
          <a class="text-link" href={section.videoUrl} aria-label={`Watch ${section.title} demo`}>
            Watch demo <span aria-hidden="true">↗</span>
          </a>
        {/if}
      </div>
    {/if}
  </div>
</section>
