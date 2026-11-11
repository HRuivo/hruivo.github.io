<script lang="ts">
  import { base } from '$app/paths';

  const contents = [
    { id: 'overview', title: 'The production problem' },
    { id: 'architecture', title: 'System architecture' },
    { id: 'vehicle-data', title: 'Vehicle data normalization' },
    { id: 'artist-workflows', title: 'Artist and web workflows' },
    { id: 'perforce', title: 'Perforce organization' },
    { id: 'rendering', title: 'Rendering and CI/CD' },
    { id: 'contributions', title: 'My contributions' },
    { id: 'outcome', title: 'Result' }
  ];
  const technologies = ['C++', 'Python', 'Unreal Engine', 'FastAPI', 'REST APIs', 'SvelteKit', 'Bun', 'Docker (web services)', 'Perforce', 'Deadline', 'Jenkins'];
</script>

<svelte:head>
  <title>Automotive CGI Pipeline — Hugo Ruivo · Professional Case Study</title>
  <meta name="description" content="Engineering a multi-brand automotive CGI production pipeline: shared vehicle data, Unreal Engine tools, Python/FastAPI services, Perforce, Deadline, and CI/CD." />
</svelte:head>

<div class="page-layout">
  <main class="case-study">
    <header class="case-study-header">
      <a class="back-link" href={`${base}/work/`}>← Professional work</a>
      <p class="eyebrow">Digital Giant · Software architecture &amp; pipeline engineering</p>
      <h1>Engineering a Multi-Brand Automotive CGI Production Pipeline</h1>
      <p class="standfirst">Connecting vehicle data, artist-facing tools, web services, and rendering infrastructure into shared production workflows.</p>
      <p class="role">My role: Real-Time R&amp;D Lead · Architecture, tooling, and production integration</p>
      <ul class="stack" aria-label="Technologies">
        {#each technologies as technology}<li>{technology}</li>{/each}
      </ul>
    </header>

    <section id="overview" aria-labelledby="overview-title">
      <p class="eyebrow">01 · Context</p>
      <h2 id="overview-title">Different brands. Shared production tools.</h2>
      <p>Automotive brands supply vehicle assets with different source structures and import requirements. Downstream production needs a common way to work with that data, alongside reusable Unreal Engine tools and connected rendering workflows.</p>
      <p>I designed the overall pipeline architecture as part of a cross-functional production team. The work spans brand-specific imports, a common vehicle data structure, artist-facing tooling, web interfaces, render integration, source-control organization, and CI/CD.</p>
      <h3>Design constraints</h3>
      <ul>
        <li>Accommodate brand-specific source data while sharing downstream tooling.</li>
        <li>Support render initiation from both Unreal Engine and a browser.</li>
        <li>Organize shared vehicle data, reusable plugins, and project-specific work in Perforce.</li>
        <li>Connect production tooling and delivery automation across those workflows.</li>
      </ul>
    </section>

    <section id="architecture" aria-labelledby="architecture-title">
      <p class="eyebrow">02 · System view</p>
      <h2 id="architecture-title">A connected production pipeline.</h2>
      <p>Brand-specific imports converge on a common representation used by shared Unreal Engine tooling. The web components use SvelteKit and Bun with Python / FastAPI REST services. Rendering can be initiated from Unreal Engine or a browser, with Deadline and custom render plugins handling the render integration.</p>
      <figure>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex (The scrollable region needs keyboard focus for arrow-key scrolling.) -->
        <div class="diagram-scroll" role="region" aria-label="Scrollable conceptual architecture diagram" tabindex="0">
          <a href={`${base}/images/automotive-pipeline-architecture.svg`} target="_blank" rel="noreferrer" aria-label="Open the conceptual architecture diagram at full size in a new tab">
            <img src={`${base}/images/automotive-pipeline-architecture.svg`} alt="Conceptual architecture: brand-specific imports converge on common vehicle data used by Unreal tools. A separate web layer uses SvelteKit, Bun, Python, and FastAPI in Docker. Unreal and browser workflows can initiate Deadline rendering. Perforce and Jenkins support production." width="1080" height="990" />
          </a>
        </div>
        <figcaption>Simplified, sanitized conceptual architecture. Arrows show established conceptual relationships; service paths, deployment topology, and render execution details are omitted. Scroll horizontally on small screens or <a href={`${base}/images/automotive-pipeline-architecture.svg`} target="_blank" rel="noreferrer">open the full-size diagram</a>.</figcaption>
      </figure>
      <p>Docker is used to deploy the web frontend and backend. Unreal Engine and render workers are outside that container deployment scope.</p>
    </section>

    <section id="vehicle-data" aria-labelledby="vehicle-data-title">
      <p class="eyebrow">03 · Data design</p>
      <h2 id="vehicle-data-title">Normalize at the import boundary.</h2>
      <p>The input problem is brand-specific; the downstream tooling is shared. Brand-specific import and conversion logic turns those inputs into a common vehicle data structure, giving subsequent pipeline components a consistent representation to consume.</p>
      <p>This places the source-specific handling in the import stage and lets the production tools work against the shared structure. The diagram uses fictional brand labels and omits proprietary schemas, storage formats, and client data.</p>
      <figure>
        <!-- svelte-ignore a11y_no_noninteractive_tabindex (The scrollable region needs keyboard focus for arrow-key scrolling.) -->
        <div class="diagram-scroll" role="region" aria-label="Scrollable vehicle data normalization diagram" tabindex="0">
          <a href={`${base}/images/vehicle-data-normalization.svg`} target="_blank" rel="noreferrer" aria-label="Open the vehicle data normalization diagram at full size in a new tab">
            <img src={`${base}/images/vehicle-data-normalization.svg`} alt="Fictional Brand A, Brand B, and Brand C each have brand-specific import logic. All three converge on a common vehicle data structure consumed by shared downstream production tools." width="960" height="620" loading="lazy" />
          </a>
        </div>
        <figcaption>Conceptual data normalization using fictional brands. <a href={`${base}/images/vehicle-data-normalization.svg`} target="_blank" rel="noreferrer">Open the full-size diagram</a>.</figcaption>
      </figure>
    </section>

    <section id="artist-workflows" aria-labelledby="artist-workflows-title">
      <p class="eyebrow">04 · Production interfaces</p>
      <h2 id="artist-workflows-title">Tools in the engine and in the browser.</h2>
      <p>The pipeline includes shared Unreal Engine tooling, reusable plugins, and rigging tools alongside a browser interface built with SvelteKit and Bun. Python / FastAPI REST services form the web backend.</p>
      <p>I designed and integrated these connected workflows, and developed production tooling and Unreal Engine rigging tools. The web and Unreal workflows both provide entry points for render submission, so production can initiate rendering from either surface.</p>
      <p>This work builds on earlier artist-facing tools at Burrows, where I created vehicle import and configuration tools in Unreal Engine and a Houdini-backed asset pipeline for a WebGL configurator.</p>
    </section>

    <section id="perforce" aria-labelledby="perforce-title">
      <p class="eyebrow">05 · Source-control architecture</p>
      <h2 id="perforce-title">Organize what is shared and what is project-specific.</h2>
      <p>I designed the Perforce setup and stream organization around shared vehicle data, reusable Unreal Engine plugins, and project workflows. Source-control structure is part of the production architecture: teams need to work with shared foundations alongside individual project requirements.</p>
      <p>The public case study describes those responsibilities without exposing depot paths, stream names, stream types, or integration relationships.</p>
    </section>

    <section id="rendering" aria-labelledby="rendering-title">
      <p class="eyebrow">06 · Rendering &amp; delivery</p>
      <h2 id="rendering-title">Connect submission to production automation.</h2>
      <p>Render jobs can be triggered from Unreal Engine or a web page using Deadline and custom Deadline render plugins. My responsibilities include developing those plugins and integrating the rendering workflow with the wider pipeline.</p>
      <p>I also build and integrate Jenkins CI/CD workflows, using Python, shell tooling, and Unreal Engine automation tests. Docker deploys the web frontend and backend; it is separate from the Unreal and render-worker environment.</p>
    </section>

    <section id="contributions" aria-labelledby="contributions-title">
      <p class="eyebrow">07 · Ownership &amp; collaboration</p>
      <h2 id="contributions-title">My responsibilities within the team.</h2>
      <p>As Real-Time R&amp;D Lead, I work with developers and artists across architecture, implementation, and delivery. My direct responsibilities include:</p>
      <ul>
        <li>Overall software and system architecture.</li>
        <li>Perforce setup and stream design.</li>
        <li>Production tooling and Unreal Engine rigging tools.</li>
        <li>Custom Deadline render plugins.</li>
        <li>CI/CD setup and integration.</li>
      </ul>
      <p>The frontend and backend are described here as systems I designed and integrated within that collaborative work.</p>
    </section>

    <section id="outcome" aria-labelledby="outcome-title">
      <p class="eyebrow">08 · Result</p>
      <h2 id="outcome-title">A shared foundation across vehicle brands.</h2>
      <p>The pipeline provides a common downstream structure used across multiple automotive brands, connected web and Unreal render-submission workflows, and production automation supported by Perforce, Deadline, and Jenkins.</p>
      <p>It brings together the parts of software engineering I work across: data modeling, artist-facing tools, Python services, C++ / Unreal integration, source-control architecture, and delivery infrastructure.</p>
      <aside class="confidentiality" aria-label="Confidentiality note">Architecture shown is a simplified conceptual representation. Proprietary client assets, internal service details and source code are omitted.</aside>
      <div class="case-study-links">
        <a class="text-link" href={`${base}/resume/`}>View experience <span aria-hidden="true">↗</span></a>
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
  .standfirst { max-width: 690px; color: var(--ink); font-size: .95rem; line-height: 1.6; }
  .role { color: var(--muted); font-size: .7rem; line-height: 1.6; }
  section { padding: 32px 0; border-top: 1px solid var(--line); }
  section h2 { max-width: 680px; margin-bottom: 18px; font-size: clamp(1.3rem, 2.2vw, 1.8rem); }
  section h3 { margin: 24px 0 10px; font-size: .82rem; font-weight: 600; }
  section p, section li { color: #545650; font-size: .8rem; line-height: 1.75; }
  section p { max-width: 700px; margin: 0 0 14px; }
  section ul { padding-left: 20px; }
  section li { margin-bottom: 8px; }
  figure { margin: 26px 0; min-width: 0; }
  .diagram-scroll { overflow-x: auto; border: 1px solid var(--line); border-radius: 3px; background: var(--paper); }
  .diagram-scroll a { display: block; min-width: 700px; }
  .diagram-scroll img { display: block; width: 100%; height: auto; }
  figcaption { margin-top: 12px; color: var(--muted); font-size: .65rem; line-height: 1.65; }
  figcaption a { text-underline-offset: 3px; }
  .confidentiality { margin-top: 26px; padding: 18px 20px; border-left: 2px solid var(--accent); background: #f2f2ed; color: var(--muted); font-size: .72rem; line-height: 1.65; }
  .case-study-links { display: flex; flex-wrap: wrap; gap: 18px 24px; margin: 26px 0 10px; }
  a:focus-visible, .diagram-scroll:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
  @media (max-width: 650px) {
    .case-study { padding-top: 24px; }
    .case-study-header { padding-bottom: 20px; }
    .back-link { margin-bottom: 26px; }
    h1 { font-size: clamp(2rem, 8vw, 2.9rem); }
    section { padding-block: 28px; }
  }
</style>
