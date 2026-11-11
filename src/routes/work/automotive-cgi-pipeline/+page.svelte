<script lang="ts">
  import { base } from '$app/paths';

  const contents = [
    { id: 'overview', title: 'Overview' },
    { id: 'engineering-challenges', title: 'Engineering challenges' },
    { id: 'architecture', title: 'Solution architecture' },
    { id: 'contributions', title: 'My contributions' },
    { id: 'outcome', title: 'Outcome' }
  ];
  const technologies = ['C++', 'Python', 'Unreal Engine', 'FastAPI', 'REST', 'SvelteKit', 'Bun', 'Docker', 'Perforce', 'Deadline', 'Jenkins'];
</script>

<svelte:head>
  <title>Multi-Brand Automotive CGI Production Pipeline — Hugo Ruivo</title>
  <meta name="description" content="Production pipeline systems for multi-brand automotive CGI: data normalization, Unreal Engine tooling, web services, Perforce, CI/CD, and Deadline render integrations." />
</svelte:head>

<div class="page-layout">
  <main class="case-study">
    <header class="case-study-header">
      <a class="back-link" href={`${base}/work/`}>← Professional work</a>
      <p class="eyebrow">Digital Giant · Professional work</p>
      <h1>Multi-Brand Automotive CGI Production Pipeline</h1>
      <p class="role"><strong>Role:</strong> Software Architecture, Pipeline Engineering, Tool Development</p>
      <p class="role"><strong>Technologies:</strong></p>
      <ul class="stack" aria-label="Technologies">
        {#each technologies as technology}<li>{technology}</li>{/each}
      </ul>
    </header>

    <section id="overview" aria-labelledby="overview-title">
      <h2 id="overview-title">Overview</h2>
      <p>Designed and developed production pipeline systems for automotive CGI workflows supporting multiple vehicle brands.</p>
      <p>The pipeline addresses the challenge of integrating brand-specific vehicle data into a common production environment, enabling shared tooling and reusable rendering workflows across projects.</p>
      <p>The system combines Unreal Engine production tools, web-based interfaces, Python backend services, source-control infrastructure, and automated rendering.</p>
      <p>My responsibilities included system architecture, data pipeline design, tooling, Perforce stream architecture, CI/CD, Deadline render integrations, and Unreal Engine rigging tools.</p>
    </section>

    <section id="engineering-challenges" aria-labelledby="engineering-challenges-title">
      <h2 id="engineering-challenges-title">Engineering challenges</h2>
      <p>Automotive CGI production requires handling vehicle data from multiple brands, each with its own source structures and import requirements.</p>
      <p>Rather than requiring downstream tools to handle every brand-specific format independently, the pipeline converts incoming data into a common structure.</p>
      <p>This provides a consistent foundation for Unreal Engine tooling and downstream production workflows.</p>
      <p>Another challenge is providing different ways to initiate rendering work. The system supports rendering workflows initiated directly within Unreal Engine and through a web interface.</p>
    </section>

    <section id="architecture" aria-labelledby="architecture-title">
      <h2 id="architecture-title">Solution architecture</h2>
      <p>The production system consists of several interconnected areas:</p>

      <h3>Data ingestion and normalization</h3>
      <p>Brand-specific import and conversion workflows transform incoming vehicle data into a shared representation used by the rest of the pipeline.</p>

      <h3>Unreal Engine tooling</h3>
      <p>Custom Unreal Engine tools support production workflows, including vehicle rigging and rendering integration.</p>

      <h3>Web-based production interfaces</h3>
      <p>SvelteKit applications running with Bun provide browser-based access to production functionality. Python FastAPI services expose REST endpoints for integration with backend workflows.</p>

      <h3>Rendering infrastructure</h3>
      <p>Rendering can be initiated from Unreal Engine or a web application, triggering Deadline jobs through custom rendering integrations.</p>

      <h3>Infrastructure and delivery</h3>
      <p>Docker is used for deployment of web frontend and backend services. Jenkins supports CI/CD workflows, while Perforce provides source control and stream organization for shared assets, reusable plugins, and project-specific development.</p>
    </section>

    <section id="contributions" aria-labelledby="contributions-title">
      <h2 id="contributions-title">My contributions</h2>
      <ul>
        <li>Designed the overall software and pipeline architecture.</li>
        <li>Designed the shared data structure and brand-specific data conversion approach.</li>
        <li>Developed production tooling and Unreal Engine rigging tools.</li>
        <li>Designed and configured Perforce stream workflows.</li>
        <li>Implemented CI/CD automation.</li>
        <li>Developed custom Deadline render plugins.</li>
        <li>Contributed to the integration of web-based production workflows and Unreal Engine.</li>
      </ul>
    </section>

    <section id="outcome" aria-labelledby="outcome-title">
      <h2 id="outcome-title">Outcome</h2>
      <p>The resulting architecture supports automotive CGI workflows across multiple vehicle brands, using brand-specific data conversion to provide a consistent foundation for shared downstream tooling.</p>
      <p>The pipeline integrates artist-facing tools, rendering workflows, source-control organization, and production automation within a reusable technical architecture.</p>
      <div class="case-study-links">
        <a class="text-link" href={`${base}/#02-current-role`}>View experience <span aria-hidden="true">↗</span></a>
        <a class="text-link" href={`${base}/resume.pdf`} download>Download CV <span aria-hidden="true">↓</span></a>
        <a class="text-link" href={`${base}/projects/`}>Explore personal projects <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </main>

  <aside class="page-index" aria-label="On this page">
    <p>On this page</p>
    <nav>
      {#each contents as item}<a href={`#${item.id}`}>{item.title}</a>{/each}
    </nav>
  </aside>
</div>

<style>
  .case-study { min-width: 0; padding-top: 30px; }
  .case-study-header { padding: 0 0 30px; }
  .back-link { display: inline-block; margin-bottom: 32px; color: var(--muted); font-size: .68rem; text-underline-offset: 4px; }
  .case-study-header .eyebrow { color: var(--accent); }
  h1 { margin: 16px 0 22px; font-size: clamp(2rem, 4.4vw, 3.6rem); font-weight: 500; line-height: 1.08; letter-spacing: -.045em; overflow-wrap: anywhere; }
  .role { color: var(--muted); font-size: .7rem; line-height: 1.6; }
  section { padding: 32px 0; border-top: 1px solid var(--line); }
  section h2 { max-width: 680px; margin-bottom: 18px; font-size: clamp(1.3rem, 2.2vw, 1.8rem); }
  section h3 { margin: 24px 0 10px; font-size: .82rem; font-weight: 600; }
  section p, section li { color: #545650; font-size: .8rem; line-height: 1.75; }
  section p { max-width: 700px; margin: 0 0 14px; }
  section ul { padding-left: 20px; }
  section li { margin-bottom: 8px; }
  .case-study-links { display: flex; flex-wrap: wrap; gap: 18px 24px; margin: 26px 0 10px; }
  a:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
  @media (max-width: 650px) {
    .case-study { padding-top: 24px; }
    .case-study-header { padding-bottom: 20px; }
    .back-link { margin-bottom: 26px; }
    h1 { font-size: clamp(2rem, 8vw, 2.9rem); }
    section { padding-block: 28px; }
  }
</style>
