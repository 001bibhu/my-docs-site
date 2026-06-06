import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docs-site/markdown-page',
    component: ComponentCreator('/my-docs-site/markdown-page', 'ff9'),
    exact: true
  },
  {
    path: '/my-docs-site/search',
    component: ComponentCreator('/my-docs-site/search', '1e4'),
    exact: true
  },
  {
    path: '/my-docs-site/docs',
    component: ComponentCreator('/my-docs-site/docs', 'cc9'),
    routes: [
      {
        path: '/my-docs-site/docs',
        component: ComponentCreator('/my-docs-site/docs', '3e4'),
        routes: [
          {
            path: '/my-docs-site/docs',
            component: ComponentCreator('/my-docs-site/docs', '762'),
            routes: [
              {
                path: '/my-docs-site/docs/installation-guide/',
                component: ComponentCreator('/my-docs-site/docs/installation-guide/', '983'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs-site/docs/installation-guide/setup',
                component: ComponentCreator('/my-docs-site/docs/installation-guide/setup', '6dc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs-site/docs/release-notes/',
                component: ComponentCreator('/my-docs-site/docs/release-notes/', '41d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs-site/docs/user-guide/',
                component: ComponentCreator('/my-docs-site/docs/user-guide/', 'd04'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs-site/docs/user-guide/actions',
                component: ComponentCreator('/my-docs-site/docs/user-guide/actions', 'b69'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs-site/docs/user-guide/dashboard',
                component: ComponentCreator('/my-docs-site/docs/user-guide/dashboard', '25d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/my-docs-site/docs/user-guide/overview',
                component: ComponentCreator('/my-docs-site/docs/user-guide/overview', 'cd1'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/my-docs-site/',
    component: ComponentCreator('/my-docs-site/', 'a12'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
