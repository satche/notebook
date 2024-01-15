import { generateSidebar } from "vitepress-sidebar";
import imageFigures from "markdown-it-image-figures";

export default {
  title: "Notebook",
  description: "A notebook about engineering, computer science and other stuff",
  base: "/notebook/",
  srcDir: "src",
  srcExclude: ["wip/**"],
  cleanUrls: true,

  rewrites: {
    "^(?<rest>.*(?=\\/))?\\/?(?<dir>.+?)\\/\\2\\.md$": ":rest*/:dir/index.md",
  },

  outline: {
    level: [2, 3],
  },

  markdown: {
    math: true,
    
    // Image caption
    config: md => {
      md.use(imageFigures, {
        figcaption: "title",
        copyAttrs: "^class$",
      });
    },
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
        excludeFiles: ["code.md"],
        rootGroupLink: "/",
        rootGroupText: "Code",
        collapsed: true,
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        convertSameNameSubFileToGroupIndexPage: true,
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
        scanStartPath: "computer-science",
        resolvePath: "/computer-science/",
        excludeFiles: ["computer-science.md"],
        rootGroupLink: "/",
        rootGroupText: "Computer Science",
        collapsed: true,
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        convertSameNameSubFileToGroupIndexPage: true,
      },
      {
        documentRootPath: "src",
        scanStartPath: "project-management",
        resolvePath: "/project-management/",
        excludeFiles: ["project-management.md"],
        rootGroupLink: "/",
        rootGroupText: "Project Management",
        collapsed: true,
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        convertSameNameSubFileToGroupIndexPage: true,
      },
      {
        documentRootPath: "src",
        scanStartPath: "ux-ui",
        resolvePath: "/ux-ui/",
        excludeFiles: ["ux-ui.md"],
        rootGroupLink: "/",
        rootGroupText: "UX/UI",
        collapsed: true,
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        convertSameNameSubFileToGroupIndexPage: true,
      },
      {
        documentRootPath: "src",
        scanStartPath: "about",
        resolvePath: "/about/",
        excludeFiles: ["about.md"],
        rootGroupLink: "/",
        rootGroupText: "About",
        collapsed: true,
        capitalizeFirst: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        convertSameNameSubFileToGroupIndexPage: true,
      },
    ]),
  },
};
