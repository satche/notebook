import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import project from "./package.json";

const config: Config = {
  title: "Satche's Notebook",
  tagline: project.description,
  // favicon: 'img/favicon.ico',

  url: project.url,
  baseUrl: '/notebook/',

  organizationName: project.author,
  projectName: project.name,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            `https://github.com/${project.author}/${project.name}/tree/main/`,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './css/index.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // ["@orama/plugin-docusaurus-v3"] // wait for fix: https://github.com/askorama/orama/pull/719
  ],

  themeConfig: {
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Notebook',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: 'code', label: 'Code' },
        { to: 'engineering', label: 'Engineering' },
        { to: 'management', label: 'Management' },
        { to: 'ux', label: 'UX' },
        {
          href: `https://github.com/${project.author}/${project.name}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} -
      <a href="https://github.com/${project.author}/" target="_blank" rel="noopener">Satche</a><br/>
      Built with <a href="https://docusaurus.io" target="_blank" rel="noopener">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
