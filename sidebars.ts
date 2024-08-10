import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  codeSidebar: [{ type: 'autogenerated', dirName: 'code' }],
  engineeringSidebar: [{ type: 'autogenerated', dirName: 'engineering' }],
  managementSidebar: [{ type: 'autogenerated', dirName: 'management' }],
  uxSidebar: [{ type: 'autogenerated', dirName: 'ux' }],
};

export default sidebars;