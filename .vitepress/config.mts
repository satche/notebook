import { generateSidebar } from "vitepress-sidebar";

// TODO:
// Find a way so filename with same name as folder are treated as index file
// Example: /foo/bar/bar.md = /foo/bar/index.md

// Caption to image: https://stackblitz.com/edit/vite-1p5ozg?file=docs%2Findex.md,docs%2F.vitepress%2Fconfig.js

export default {
  title: "Notebook",
  description: "A notebook about engineering, computer science and other stuff",
  base: "/notebook/",
  srcDir: "src",
  srcExclude: ["WIP/**"],
  cleanUrls: true,
  markdown: {
    math: true,
  },

  themeConfig: {
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

    outline: {
      level: 2,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/satche" },
      { icon: "discord", link: "https://discord.com/users/623403349240446986" },
      { icon: "instagram", link: "https://instagram.com/satche.ch" },
    ],

    search: {
      provider: "local",
    },
  },
};
