<script lang="ts">
  import '../styles/global.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Software Developer — Portfolio</title>
  <meta name="description" content="Software developer building thoughtful, reliable digital products." />
</svelte:head>

<div class="site-shell">
  <Header />
  {@render children()}
  <Footer />
</div>
