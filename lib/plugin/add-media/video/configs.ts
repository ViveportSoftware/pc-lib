export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'video',
      type: 'json',
      schema: [
        {
          name: 'videoSrc',
          type: 'string',
          description: 'video src',
        },
        {
          name: 'billboard',
          type: 'boolean',
          default: false,
        },
        {
          name: 'controlsPanel',
          type: 'boolean',
          default: true,
        },
        {
          name: 'autoPlay',
          type: 'boolean',
          default: true,
        },
        {
          name: 'loop',
          type: 'boolean',
          default: true,
        },
        {
          name: 'linkHref',
          type: 'string',
          description: 'link href',
        },
      ],
    },
  ],
};
