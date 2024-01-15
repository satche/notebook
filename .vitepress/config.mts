import { generateSidebar } from "vitepress-sidebar";

// Caption to image: https://stackblitz.com/edit/vite-1p5ozg?file=docs%2Findex.md,docs%2F.vitepress%2Fconfig.js
// Maybe outline should have deeper level

export default {
  title: "Notebook",
  description: "A notebook about engineering, computer science and other stuff",
  base: "/notebook/",
  srcDir: "src",
  srcExclude: ["wip/**"],
  cleanUrls: true,

  // TODO: fix bad links rewriting
  // https://vitepress.dev/guide/routing#route-rewrites

  outline: {
    level: [2, 3],
  },

  markdown: {
    math: true,
  },

  socialLinks: [
    { icon: "github", link: "https://github.com/satche" },
    { icon: "discord", link: "https://discord.com/users/623403349240446986" },
    { icon: "instagram", link: "https://instagram.com/satche.ch" },
  ],

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      {
        text: "Notes",
        items: [
          { text: "Code", link: "/code/" },
          { text: "Computer Science", link: "/computer-science/" },
          { text: "Project management", link: "/project-management/" },
          { text: "UX/UI", link: "/ux-ui/" },
        ],
      },
      { text: "About", link: "/about/" },
    ],

    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar([
      {
        documentRootPath: "src",
        scanStartPath: "code",
        resolvePath: "/code/",
        collapsed: true,
        rootGroupText: "Code",
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        manualSortFileNameByPriority: [
          "languages",
          "frameworks",
          "libraries",
          "tools",
          "glossary",
        ],
      },
      {
        documentRootPath: "src",
        useFolderLinkFromIndexFile: true,
        scanStartPath: "computer-science",
        resolvePath: "/computer-science/",
        collapsed: true,
        rootGroupText: "Computer Science",
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
      },
      {
        documentRootPath: "src",
        useFolderLinkFromIndexFile: true,
        scanStartPath: "project-management",
        resolvePath: "/project-management/",
        collapsed: true,
        rootGroupText: "Project Management",
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
      },
      {
        documentRootPath: "src",
        useFolderLinkFromIndexFile: true,
        scanStartPath: "ux-ui",
        resolvePath: "/ux-ui/",
        collapsed: true,
        rootGroupText: "UX/UI",
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
      },
      {
        documentRootPath: "src",
        useFolderLinkFromIndexFile: true,
        scanStartPath: "about",
        resolvePath: "/about/",
        collapsed: true,
        rootGroupText: "About",
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
      },
    ]),
  },
};
