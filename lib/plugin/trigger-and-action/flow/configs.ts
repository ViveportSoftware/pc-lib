export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'flows',
      type: 'json',
      schema: [
        {
          name: 'type',
          type: 'number',
          default: 0,
          description: 'flow type',
        },
        {
          name: 'triggerIndexes',
          type: 'number',
          description: 'selected triggers',
          array: true,
          select: true,
        },
        {
          name: 'actionParams',
          type: 'json',
          schema: [
            {
              name: 'type',
              type: 'number',
              default: 0,
              description: 'action type',
            },
            {
              name: 'delay',
              type: 'number',
              default: 0,
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
          array: true,
        },
      ],
      array: true,
    },
  ],
};
