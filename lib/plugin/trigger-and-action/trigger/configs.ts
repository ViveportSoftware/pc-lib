import {ConfigsType} from '../../type';

export const Configs: ConfigsType = {
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
          name: 'throttle',
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
        {
          name: 'tagsFilter',
          type: 'string',
          array: true,
          tags: true,
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
            {
              name: 'tagsFilter',
              type: 'string',
              array: true,
              tags: true,
            },
            {
              name: 'inworldTriggerMode',
              type: 'number',
              description: 'trigger goals mode',
              select: true,
              default: 1,
            },
            {
              name: 'entityId',
              type: 'string',
            },
          ],
          array: true,
        },
      ],
      array: true,
    },
  ],
};
