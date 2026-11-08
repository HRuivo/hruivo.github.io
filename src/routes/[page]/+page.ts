import { error } from '@sveltejs/kit';
import { pageSlugs, type PageSlug } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  if (params.page === 'intro') return { page: 'intro' as PageSlug };
  if (!pageSlugs.includes(params.page as PageSlug)) error(404, 'Page not found');
  return { page: params.page as PageSlug };
};

export const prerender = true;

export const entries = () => pageSlugs.filter((page) => page !== 'intro').map((page) => ({ page }));
