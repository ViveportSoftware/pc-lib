export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'triggers',
      type: 'json',
      schema: [
        {
          name: 'type',
          type: 'number',
          default: 0,
          description: 'trigger type',
        },
        {
          name: 'sync',
          type: 'boolean',
          default: false,
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
        {
          name: 'triggerParams',
          type: 'json',
          schema: [
            {
              name: 'type',
              type: 'number',
              default: 0,
              description: 'trigger type',
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
