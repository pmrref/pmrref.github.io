import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Organization Pages publishes at the domain root, without a repository prefix.
export default defineConfig({
  site: 'https://pmrref.github.io',
  base: '/',
  output: 'static',
  prefetch: false,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'PMR Docs',
      favicon: '/bi_PMR.png',
      defaultLocale: 'root',
      locales: { root: { label: '한국어', lang: 'ko' } },
      customCss: ['./src/styles/docs.css'],
      components: {
        SiteTitle: './src/components/DocsSiteTitle.astro',
        ThemeProvider: './src/components/LightThemeProvider.astro',
        ThemeSelect: './src/components/LightThemeSelect.astro',
      },
      sidebar: [
        { label: '문서 홈', slug: 'docs' },
        ...[
          ['Getting Started', 'getting-started'],
          ['Installation', 'installation'],
          ['Configuration', 'configuration'],
          ['Architecture', 'architecture'],
          ['Programming', 'programming'],
          ['API Reference', 'api-reference'],
          ['Operations', 'operations'],
        ].map(([label, dir]) => ({ label, items: [{ autogenerate: { directory: `docs/${dir}` } }] })),
        { label: '← 제품 사이트', link: '/' },
      ],
    }),
  ],
});
