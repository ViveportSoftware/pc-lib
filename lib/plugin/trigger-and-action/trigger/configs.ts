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
          name: 'enabled',
          type: 'boolean',
          default: true,
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
              name: 'enabled',
              type: 'boolean',
              default: true,
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
                  name: 'enabled',
                  type: 'boolean',
                  default: true,
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
              name: 'enabled',
              type: 'boolean',
              default: true,
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
              name: 'inworldAutoTrigger',
              type: 'boolean',
              description: 'auto trigger',
              default: false,
            },
            {
              name: 'entityId',
              type: 'string',
            },
            {
              name: 'questIndex',
              type: 'number',
              description: 'selected quest',
              select: true,
            },
            {
              name: 'response',
              type: 'number',
              description: 'quest response',
              select: true,
              default: 1,
            },
            {
              name: 'taskDescription',
              type: 'string',
              description: 'description',
            },
            {
              name: 'taskIndex',
              type: 'number',
              description: 'selected task',
              select: true,
            },
            {
              name: 'toastTitle',
              type: 'string',
              description: 'title',
              default: 'Completed!',
            },
            {
              name: 'toastDescription',
              type: 'string',
              description: 'description',
            },
          ],
          array: true,
        },
      ],
      array: true,
    },
  ],
};
