import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "czllll",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "czllll's blog",
	// Meta property used as the default description meta property
	description: "czllll's blog",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "cn-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "cn_GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "cn-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
