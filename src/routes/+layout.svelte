<script lang="ts">
  import '../styles/global.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Hugo Ruivo — Senior Software Engineer · CGI Pipelines &amp; Production Systems</title>
</svelte:head>

<div class="site-shell">
  <Header />
  {@render children()}
  <Footer />
</div>
