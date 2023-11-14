export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'media',
      type: 'json',
      schema: [
        {
          name: 'assetId',
          type: 'number',
          default: 0,
        },
        {
          name: 'billboard',
          type: 'boolean',
          default: false,
        },
        {
          name: 'linkHref',
          type: 'string',
          default: '',
        },
        {
          name: 'linkButtonText',
          type: 'string',
          default: '',
        },
        {
          name: 'controls',
          type: 'boolean',
          default: false,
        },
        {
          name: 'autoPlay',
          type: 'boolean',
          default: false,
        },
        {
          name: 'loop',
          type: 'boolean',
          default: false,
        },
        {
          name: 'url',
          type: 'string',
          default: '',
        },
      ],
    },
  ],
};
