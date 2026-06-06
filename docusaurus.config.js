// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ProductHelp AI',
  tagline: 'AI-powered insights for product teams',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://001bibhu.github.io',
  baseUrl: '/my-docs-site/',

  organizationName: '001bibhu',
  projectName: 'my-docs-site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, // 🔥 disabling blog (you don’t need it now)
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/docs',
        indexPages: true,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutKeymap: 'mod+k',
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'ProductHelp AI',
        logo: {
          alt: 'ProductHelp AI',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs', // ✅ FIXED
            position: 'left',
            label: 'Documentation',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/user-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProductHelp AI`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;