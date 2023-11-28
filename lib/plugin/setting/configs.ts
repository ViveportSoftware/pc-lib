export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'setting',
      type: 'json',
      schema: [
        {
          name: 'occlusionCulling',
          type: 'boolean',
          default: false,
        },
      ],
    },
  ],
};
