export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'inworld',
      type: 'json',
      schema: [
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
      ],
    },
  ],
};
