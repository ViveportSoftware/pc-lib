import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'inworld',
      type: 'json',
      schema: [
        {
          name: 'apiKey',
          type: 'string',
          description: 'API key',
        },
        {
          name: 'apiSecret',
          type: 'string',
          description: 'API secret',
        },
        {
          name: 'sceneId',
          type: 'string',
          description: 'scene Id',
        },
        {
          name: 'characterId',
          type: 'string',
          description: 'character Id',
        },
        {
          name: 'vrmUrl',
          type: 'string',
          description: 'VRM URL',
        },
        {
          name: 'greetingMode',
          type: 'number',
          description: 'greeting mode',
          select: true,
          default: 1,
        },
        {
          name: 'greetingMessage',
          type: 'string',
          description: 'greeting message',
        },
        {
          // old version of greetingMessage
          name: 'greetingMessageToNpc',
          type: 'string',
          description: 'greeting Message to NPC (optional)',
        },
        {
          name: 'autoFollowMode',
          type: 'number',
          description: 'auto follow mode',
          select: true,
          default: 1,
        },
        {
          name: 'autoFollowDelay',
          type: 'number',
          description: 'auto follow delay in ms',
          default: 0,
        },
        {
          name: 'idleAssetId',
          type: 'number',
          desc: 'idle animation asset (optional)',
        },
        {
          name: 'frontWalkAssetId',
          type: 'number',
          desc: 'front walk animation asset (optional)',
        },
        {
          name: 'navMeshEntityId',
          type: 'string',
          desc: 'nav mesh used by NPC to find paths (optional)',
        },
      ],
    },
  ],
};
