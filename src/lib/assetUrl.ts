/** Resolve public assets against Astro's deployment base, including nested pages. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}
