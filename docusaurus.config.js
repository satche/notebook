// Config: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Satche's Notebook",
  tagline: "A notebook about engineering, computer science and other stuff",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  // GitHub Pages
  organizationName: "satche", // User name.
  projectName: "notebook", // Repo name.

  // Links
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Locales
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/satche/notebook/edit/main/",
          routeBasePath: "/",
          //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Notebook",
        items: [
          {
            type: "docSidebar",
            sidebarId: "code",
            position: "left",
            label: "Code",
          },
          {
            type: "docSidebar",
            sidebarId: "engineering",
            position: "left",
            label: "Engineering",
          },
          {
            type: "docSidebar",
            sidebarId: "management",
            position: "left",
            label: "Management",
          },
          {
            type: "docSidebar",
            sidebarId: "ux",
            position: "left",
            label: "UX",
          },
          { to: "/about", label: "About", position: "left" },
          {
            href: "https://github.com/satche/notebook",
            label: "GitHub",
            position: "right",
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
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} – <a href="https://github.com/satche">Satche</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
