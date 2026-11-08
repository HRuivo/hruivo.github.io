<script lang="ts">
  import PageView from '$lib/components/PageView.svelte';
  import type { PageSlug } from '$lib/types';

  let { data }: { data: { page: PageSlug } } = $props();
</script>

<PageView slug={data.page} />
