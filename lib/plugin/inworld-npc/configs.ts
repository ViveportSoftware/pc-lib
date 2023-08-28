export const Configs = {
  type: 'json',
  schema: [
    {
      name: 'inworld',
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
      ],
    },
  ],
};
