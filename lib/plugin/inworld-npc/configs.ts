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
          name: 'greetingMessageToNpc',
          type: 'string',
          description: 'greeting Message to NPC (optional)',
        },
        {
          name: 'autoFollowMode',
          type: 'number',
          description: 'auto follow mode',
          default: 1,
          // eslint-disable-next-line prettier/prettier
          enum: [
            { 'None': 1 },
            { 'PathFinding': 2 },
            { 'PhaseWall': 3 }
          ]
        },
      ],
    },
  ],
};
