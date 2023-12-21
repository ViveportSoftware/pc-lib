import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'array',
  schema: [
    {
      name: 'quests',
      type: 'json',
      schema: [
        {
          name: 'name',
          type: 'string',
          desc: 'Quest name',
        },
        {
          name: 'description',
          type: 'string',
          desc: 'Quest description',
        },
        {
          name: 'startAutomatically',
          type: 'boolean',
          default: false,
        },
        {
          name: 'saveUserProgress',
          type: 'boolean',
          default: false,
        },
        {
          name: 'tasksAreOrdered',
          type: 'boolean',
          default: false,
        },
        {
          name: 'celebrateOnComplete',
          type: 'boolean',
          default: false,
        },
        {
          name: 'tasksParams',
          type: 'json',
          schema: [
            {
              name: 'name',
              type: 'string',
              description: 'Task description',
            },
            {
              name: 'type',
              type: 'number',
              default: 0,
              description: 'Task type',
            },
            {
              name: 'progressSteps',
              type: 'number',
              default: 0,
            },
            {
              name: 'eventName',
              type: 'string',
              description: 'Event name',
            },
          ],
          array: true,
        },
        {
          name: 'celebrateParams',
          type: 'json',
          schema: [
            {
              name: 'delay',
              type: 'number',
              default: 0,
            },
            {
              name: 'type',
              type: 'number',
              default: 0,
            },
            {
              name: 'entityId',
              type: 'string',
            },
            {
              name: 'stringParams',
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
