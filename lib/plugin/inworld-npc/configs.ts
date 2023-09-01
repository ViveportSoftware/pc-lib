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
          type: 'stringSelect',
          options: [
            {
              name: 'none',
              type: 'string',
            },
            {
              name: 'pathFinding',
              type: 'string',
            },
            {
              name: 'phaseWall',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
