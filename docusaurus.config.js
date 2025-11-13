// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cliqqing Bot Documentation',
  tagline: 'A feature-rich Discord bot for community management',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://autokill.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cliqqing-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AutoKill', // Usually your GitHub org/user name.
  projectName: 'cliqqing-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may
  // want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/autokill/cliqqing-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Cliqqing Bot',
        logo: {
          alt: 'Cliqqing Bot Logo',
          src: 'img/logo.svg',
          href: '/docs/intro',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/AutoKill/cliqqing',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'Commands',
                to: '/docs/commands/introduction',
              },
              {
                label: 'Architecture',
                to: '/docs/development/architecture',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/autokill/cliqqing',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'License',
                href: 'https://github.com/autokill/cliqqing/blob/main/LICENSE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cliqqing. Built with Docusaurus. By AutoKill.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'typescript'],
      },
    }),
};

module.exports = config;

