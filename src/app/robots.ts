import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";
import { isIndexableSiteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const indexable = isIndexableSiteUrl(portfolio.site.url);

  return {
    rules: indexable
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${portfolio.site.url}/sitemap.xml`,
    host: portfolio.site.url,
  };
}
