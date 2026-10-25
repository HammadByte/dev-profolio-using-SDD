export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function getInitials(name: string): string {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return initials || "YN";
}

/**
 * Only allow search engines to index a real HTTPS deployment.
 * Preview, local, and placeholder URLs stay out of search results.
 */
export function isIndexableSiteUrl(value: string): boolean {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();

    if (url.protocol !== "https:") return false;
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "0.0.0.0" ||
      host.endsWith(".local") ||
      host === "example.com" ||
      host.endsWith(".example.com")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
