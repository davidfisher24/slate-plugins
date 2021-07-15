module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Slate Plugins',
      items: ['slate-plugins/introduction', 'slate-plugins/contributing'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/basic-editor',
        'getting-started/basic-plugins',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/SlatePlugins',
        'guides/store',
        'guides/styling',
        'guides/configuration',
        'guides/creating-plugins',
        'guides/multiple-editors',
      ],
      collapsed: false,
    },
    'playground',
    'insendi',
    {
      type: 'category',
      label: 'Plugins',
      items: [
        {
          type: 'category',
          label: 'Elements',
          items: [
            'plugins/alignment',
            'plugins/basic-elements',
            'plugins/excalidraw',
            'plugins/image',
            'plugins/link',
            'plugins/list',
            'plugins/media-embed',
            'plugins/mention',
            'plugins/table',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Marks',
          items: [
            'plugins/basic-marks', 
            'plugins/highlight', 
            'plugins/multi-highlight', 
            'plugins/kbd'
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Decorators',
          items: ['plugins/find-replace'],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Utils',
          items: [
            'plugins/autoformat',
            'plugins/exit-break',
            'plugins/reset-node',
            'plugins/soft-break',
            'plugins/forced-layout',
          ],
          collapsed: false,
        },
        {
          type: 'category',
          label: 'Serializing',
          items: ['plugins/serializing-html', 'plugins/serializing-md'],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/balloon-toolbar',
        'components/dnd',
        'components/placeholder',
        'components/slate-plugins',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/introduction',
        'examples/combobox',
        'examples/editable-voids',
        'examples/huge-document',
        'examples/iframe',
        'examples/preview-markdown',
      ],
      collapsed: false,
    },
    // {
    //   type: 'category',
    //   label: 'API Reference',
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Core',
    //       items: [''],
    //       collapsed: false,
    //     },
    //     // 'api/slate-plugins',
    //   ],
    //   collapsed: false,
    // },
  ],
};
