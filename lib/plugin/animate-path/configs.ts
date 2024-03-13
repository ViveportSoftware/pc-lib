import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'animate-path',
      type: 'json',
      schema: [
        {
          name: 'withPlayer',
          type: 'boolean',
          default: false,
        },
        {
          name: 'hidePlayer',
          type: 'boolean',
          default: false,
        },
        {
          name: 'cameraEntityId',
          type: 'string',
          entityPicker: true,
        },
        {
          name: 'cameraRotationOffset',
          type: 'vec2',
          default: [0, 0],
        },
        {
          name: 'moveEntityId',
          type: 'string',
          entityPicker: true,
        },
        {
          name: 'autoStart',
          type: 'boolean',
          default: false,
        },
        {
          name: 'animateRotation',
          type: 'boolean',
          default: false,
        },
        {
          name: 'animateOnce',
          type: 'boolean',
          default: false,
        },
        {
          name: 'animationLoop',
          type: 'boolean',
          default: false,
        },
        {
          name: 'animationDuration',
          type: 'number',
          default: 10,
        },
        {
          name: 'startEvent',
          type: 'string',
          desc: 'start event',
        },
        {
          name: 'resumeEvent',
          type: 'string',
          desc: 'resume event',
        },
        {
          name: 'pauseEvent',
          type: 'string',
          desc: 'pause event',
        },
        {
          name: 'stopEvent',
          type: 'string',
          desc: 'stop event',
        },
        {
          name: 'endEvent',
          type: 'string',
          desc: 'end event',
        },
      ],
    },
  ],
};
