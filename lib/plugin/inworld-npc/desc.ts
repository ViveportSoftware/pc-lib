import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    sceneId: {
      desc: 'scene Id',
    },
    characterId: {
      desc: 'character Id',
    },
    vrmUrl: {
      desc: 'VRM URL',
    },
    greetingMessageToNpc: {
      desc: 'greeting Message to NPC (optional)',
    },
    autoFollowMode: {
      desc: 'auto follow mode',
      default: 1,
    },
    autoFollowDelay: {
      desc: 'auto follow delay in ms',
      default: 0,
    },
  },
};
