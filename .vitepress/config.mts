import { description, repository } from "../package.json";
import { generateSidebar } from "./sidebar";
import imageFigures from "markdown-it-image-figures";

const repoUrl = repository.url.replace(".git", "");

export default {
  title: "Notebook",
  description: description,
  base: "/notebook/",
  srcDir: "src",
  srcExclude: ["wip/**"],
  cleanUrls: true,

  rewrites: {
    "^(?<rest>.*(?=\\/))?\\/?(?<dir>.+?)\\/\\2\\.md$": ":rest*/:dir/index.md",
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

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      {
        text: "Notes",
        items: [
          { text: "Code", link: "/code/" },
          { text: "Engineering", link: "/engineering/" },
          { text: "Management", link: "/management/" },
          { text: "UX/UI", link: "/ux-ui/" },
        ],
      },
      { text: "About", link: "/about/" },
    ],

    socialLinks: [
      { icon: "github", link: repoUrl },
      { icon: "discord", link: "https://discord.com/users/623403349240446986" },
      { icon: "instagram", link: "https://instagram.com/satche.ch" },
    ],

    sidebar: generateSidebar(
      generateSidebarConfig([
        {
          name: "code",
          order: ["languages", "frameworks", "libraries", "tools", "glossary"],
        },
        {
          name: "engineering",
          order: ["algorithms", "search", "sort", "data-structures"],
        },
        { name: "management" },
        { name: "ux-ui" },
        { name: "about" },
      ])
    ),

    outline: {
      level: [2, 3],
    },

    editLink: {
      pattern: `${repoUrl}/edit/main/src/:path`,
      text: "Suggest a change",
    },

    lastUpdated: {
      text: "Last update: ",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

    footer: {
      message: `Released under the <a href="${repoUrl}/blob/main/LICENSE" target="_blank" rel="noopener">MIT License</a>.`,
      copyright: `Copyright © 2024 - <a href="https://github.com/satche/" target="_blank" rel="noopener">Satche</a>`,
    },
  },
};

function generateSidebarConfig(items) {
  let config = [{}];

  items.forEach(item => {
    let name = item.name;
    let itemOrder = item.order;

    let itemConfig = {
      documentRootPath: "src",
      scanStartPath: name,
      resolvePath: `/${name}/`,
      excludeFiles: [`${name}.md`],
      rootGroupLink: "/",
      rootGroupText: name.charAt(0).toUpperCase() + name.slice(1),
      collapsed: true,
      capitalizeFirst: true,
      useTitleFromFileHeading: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      convertSameNameSubFileToGroupIndexPage: true,
      folderLinkNotIncludesFileName: true,
      manualSortFileNameByPriority: itemOrder ? itemOrder : [],
    };

    config.push(itemConfig);
  });

  return config;
}
