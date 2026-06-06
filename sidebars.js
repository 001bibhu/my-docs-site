// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/user-guide',
        'user-guide/overview',
        'user-guide/dashboard',
        'user-guide/actions',
      ],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      items: [
        'installation-guide/installation-guide',
        'installation-guide/setup',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/release-notes',
      ],
    },
  ],
};

export default sidebars;
