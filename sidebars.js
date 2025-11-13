/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/first-steps',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/welcome-system',
        'features/self-roles',
        'features/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      items: [
        'commands/introduction',
        'commands/welcome',
        'commands/self-roles',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/architecture',
        'development/contributing',
        'development/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/quick-reference',
        'reference/troubleshooting',
        'reference/faq',
      ],
    },
  ],
};

module.exports = sidebars;

