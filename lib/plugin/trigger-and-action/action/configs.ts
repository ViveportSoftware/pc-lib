import {ConfigsType} from '../../type';

export const Configs: ConfigsType = {
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
      description: 'goals trigger mode',
      select: true,
      default: 1,
    },
    {
      name: 'entityId',
      type: 'string',
      entityPicker: true,
    },
  ],
};
