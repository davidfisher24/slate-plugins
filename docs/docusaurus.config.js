const path = require('path');

const githubOrgUrl = 'https://github.com/udecode';
const projectName = 'plate';
const githubUrl = `${githubOrgUrl}/${projectName}`;
const domain = 'https://plate.udecode.io';
const domainExamples = '/docs/examples/introduction';
const domainAPI = 'https://plate-api.udecode.io/globals.html';
const npmOrgUrl = 'https://www.npmjs.com/package/@insendi';

const customFields = {
  title: 'Plate',
  tagline: 'Rapidly build your rich-text editor with Slate',
  copyright: `© ${new Date().getFullYear()} Ziad Beyens. All rights reserved.`,
  domain,
  githubOrgUrl,
  githubUrl,
  githubDocsUrl: `${githubOrgUrl}/docs`,
  npmCoreUrl: `${npmOrgUrl}/plate`,
  announcementBarContent: `If you like plate, give it a star on <a target="_blank" rel="noopener noreferrer" href="${githubUrl}">GitHub</a> 🎉 !️`,
};

module.exports = {
  title: customFields.title,
  tagline: customFields.tagline,
  url: customFields.domain,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'udecode', // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  customFields: { ...customFields },
  themeConfig: {
    algolia: {
      apiKey: 'bca3ec311a129061145bf733a2bda13d',
      indexName: 'plate',
    },
    // announcementBar: {
    //   id: 'github-star',
    //   content: customFields.announcementBarContent,
    // },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    googleAnalytics: {
      trackingID: 'UA-195622178-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    prism: {
      defaultLanguage: 'typescript',
      theme: require('prism-react-renderer/themes/dracula'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: 'Plate',
      logo: {
        alt: 'Plate Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          // Client-side routing, used for navigating within the website.
          // The baseUrl will be automatically prepended to this value.
          to: 'docs/',
          // To apply the active class styling on all
          // routes starting with this path.
          // This usually isn't necessary
          activeBasePath: 'docs',
          // The string to be shown.
          label: 'Docs',
          // Left or right side of the navbar.
          position: 'right',
        },
        {
          href: '/docs/playground',
          label: 'Playground',
          position: 'right',
        },
        {
          href: domainAPI,
          label: 'API',
          position: 'right',
        },
        {
          type: 'search',
          position: 'left',
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'RESOURCES',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Examples',
              to: domainExamples,
            },
            {
              label: 'API Reference',
              to: domainAPI,
            },
            {
              label: 'Releases',
              href: `${githubUrl}/releases`,
            },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'Forum & Support',
              href: `${githubUrl}/discussions`,
            },
            {
              label: 'Stargazers',
              href: `${githubUrl}/stargazers`,
            },
            {
              label: 'Slack',
              href: 'https://slate-js.slack.com/messages/slate-plugins',
            },
          ],
        },
        {
          title: 'MORE',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/zbeyens',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zbeyens',
            },
          ],
        },
      ],
      copyright: customFields.copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `${githubUrl}/edit/docs/docs`,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: githubUrl,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      path.resolve(__dirname, 'plugins/module-alias'),
      {
        alias: {
          '@insendi/editor-v2-plate': path.resolve(__dirname, '../packages/plate/src'),
          '@insendi/editor-v2-dnd': path.resolve(__dirname, '../packages/dnd/src'),
          '@insendi/editor-v2-common': path.resolve(
            __dirname,
            '../packages/common/src'
          ),
          '@insendi/editor-v2-core': path.resolve(
            __dirname,
            '../packages/core/src'
          ),
          '@insendi/editor-v2-basic-elements': path.resolve(
            __dirname,
            '../packages/elements/basic-elements/src'
          ),
          '@insendi/editor-v2-alignment': path.resolve(
            __dirname,
            '../packages/elements/alignment/src'
          ),
          '@insendi/editor-v2-alignment-ui': path.resolve(
            __dirname,
            '../packages/elements/alignment-ui/src'
          ),
          '@insendi/editor-v2-block-quote': path.resolve(
            __dirname,
            '../packages/elements/block-quote/src'
          ),
          '@insendi/editor-v2-block-quote-ui': path.resolve(
            __dirname,
            '../packages/elements/block-quote-ui/src'
          ),
          '@insendi/editor-v2-code-block': path.resolve(
            __dirname,
            '../packages/elements/code-block/src'
          ),
          '@insendi/editor-v2-code-block-ui': path.resolve(
            __dirname,
            '../packages/elements/code-block-ui/src'
          ),
          '@insendi/editor-v2-excalidraw': path.resolve(
            __dirname,
            '../packages/elements/excalidraw/src'
          ),
          '@insendi/editor-v2-heading': path.resolve(
            __dirname,
            '../packages/elements/heading/src'
          ),
          '@insendi/editor-v2-image': path.resolve(
            __dirname,
            '../packages/elements/image/src'
          ),
          '@insendi/editor-v2-image-ui': path.resolve(
            __dirname,
            '../packages/elements/image-ui/src'
          ),
          '@insendi/editor-v2-link': path.resolve(
            __dirname,
            '../packages/elements/link/src'
          ),
          '@insendi/editor-v2-link-ui': path.resolve(
            __dirname,
            '../packages/elements/link-ui/src'
          ),
          '@insendi/editor-v2-list': path.resolve(
            __dirname,
            '../packages/elements/list/src'
          ),
          '@insendi/editor-v2-list-ui': path.resolve(
            __dirname,
            '../packages/elements/list-ui/src'
          ),
          '@insendi/editor-v2-media-embed': path.resolve(
            __dirname,
            '../packages/elements/media-embed/src'
          ),
          '@insendi/editor-v2-media-embed-ui': path.resolve(
            __dirname,
            '../packages/elements/media-embed-ui/src'
          ),
          '@insendi/editor-v2-mention': path.resolve(
            __dirname,
            '../packages/elements/mention/src'
          ),
          '@insendi/editor-v2-mention-ui': path.resolve(
            __dirname,
            '../packages/elements/mention-ui/src'
          ),
          '@insendi/editor-v2-paragraph': path.resolve(
            __dirname,
            '../packages/elements/paragraph/src'
          ),
          '@insendi/editor-v2-placeholder': path.resolve(
            __dirname,
            '../packages/placeholder/src'
          ),
          '@insendi/editor-v2-table': path.resolve(
            __dirname,
            '../packages/elements/table/src'
          ),
          '@insendi/editor-v2-table-ui': path.resolve(
            __dirname,
            '../packages/elements/table-ui/src'
          ),
          '@insendi/editor-v2-tabs': path.resolve(
            __dirname,
            '../packages/elements/tabs/src'
          ),
          '@insendi/editor-v2-tabs-ui': path.resolve(
            __dirname,
            '../packages/elements/tabs-ui/src'
          ),
          '@insendi/editor-v2-basic-marks': path.resolve(

            __dirname,
            '../packages/marks/basic-marks/src'
          ),
          '@insendi/editor-v2-font': path.resolve(
            __dirname,
            '../packages/marks/font/src'
          ),
          '@insendi/editor-v2-font-ui': path.resolve(
            __dirname,
            '../packages/marks/font-ui/src'
          ),
          '@insendi/editor-v2-highlight': path.resolve(
            __dirname,
            '../packages/marks/highlight/src'
          ),
          '@insendi/editor-v2-kbd': path.resolve(
            __dirname,
            '../packages/marks/kbd/src'
          ),
          '@insendi/editor-v2-html-serializer': path.resolve(
            __dirname,
            '../packages/serializers/html-serializer/src'
          ),
          '@insendi/editor-v2-md-serializer': path.resolve(
            __dirname,
            '../packages/serializers/md-serializer/src'
          ),
          '@insendi/editor-v2-ast-serializer': path.resolve(
            __dirname,
            '../packages/serializers/ast-serializer/src'
          ),
          '@insendi/editor-v2-plate': path.resolve(__dirname, '../packages/plate/src'),
          '@insendi/editor-v2-autoformat': path.resolve(
            __dirname,
            '../packages/autoformat/src'
          ),
          '@insendi/editor-v2-break': path.resolve(
            __dirname,
            '../packages/break/src'
          ),
          '@insendi/editor-v2-find-replace': path.resolve(
            __dirname,
            '../packages/find-replace/src'
          ),
          '@insendi/editor-v2-find-replace-ui': path.resolve(
            __dirname,
            '../packages/find-replace-ui/src'
          ),
          '@insendi/editor-v2-node-id': path.resolve(
            __dirname,
            '../packages/node-id/src'
          ),
          '@insendi/editor-v2-normalizers': path.resolve(
            __dirname,
            '../packages/normalizers/src'
          ),
          '@insendi/editor-v2-reset-node': path.resolve(
            __dirname,
            '../packages/reset-node/src'
          ),
          '@insendi/editor-v2-select': path.resolve(
            __dirname,
            '../packages/select/src'
          ),
          '@insendi/editor-v2-styled-components': path.resolve(
            __dirname,
            '../packages/ui/styled-components/src'
          ),
          '@insendi/editor-v2-trailing-block': path.resolve(
            __dirname,
            '../packages/trailing-block/src'
          ),
          '@insendi/editor-v2-toolbar': path.resolve(
            __dirname,
            '../packages/ui/toolbar/src'
          ),
          '@insendi/editor-v2-test-utils': path.resolve(
            __dirname,
            '../packages/test-utils/src'
          ),
        },
      },
    ],
  ],
};
