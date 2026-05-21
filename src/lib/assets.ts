/** Resolve public asset paths for GitHub Pages base URL */
export function assetUrl(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL;
  return `${base}${clean}`;
}
