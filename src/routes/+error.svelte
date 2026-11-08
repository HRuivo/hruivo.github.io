<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head><title>{page.status} — Portfolio</title></svelte:head>

<main class="error-page">
  <p class="eyebrow">Error {page.status}</p>
  <h1>{page.error?.message ?? 'Something went wrong'}</h1>
  <a class="text-link" href="/">Return home <span aria-hidden="true">→</span></a>
</main>
