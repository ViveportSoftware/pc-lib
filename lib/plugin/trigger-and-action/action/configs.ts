export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'type',
      type: 'number',
      default: 0,
      description: 'action type',
    },
    {
      name: 'booleanParams',
      type: 'boolean',
      array: true,
    },
    {
      name: 'stringParams',
      type: 'string',
      array: true,
    },
    {
      name: 'numberParams',
      type: 'number',
      array: true,
    },
  ],
};
