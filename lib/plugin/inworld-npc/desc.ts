import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    vrmSourceType: {
      desc: 'VRM source type',
    },
    vrmAssetId: {
      desc: 'VRM asset',
    },
    vrmUrl: {
      desc: 'VRM URL',
    },
    sceneId: {
      desc: 'scene Id',
    },
    characterId: {
      desc: 'character Id',
    },
    greetingMode: {
      desc: 'greeting mode',
      default: 1,
    },
    greetingMessage: {
      desc: 'greeting message',
    },
    autoFollowMode: {
      desc: 'auto follow mode',
      default: 1,
    },
    autoFollowDelay: {
      desc: 'auto follow delay in ms',
      default: 0,
    },
    idleAssetId: {
      desc: 'custom idle animation (optional)',
    },
    frontWalkAssetId: {
      desc: 'custom front walk animation (optional)',
    },
    navMeshEntityId: {
      desc: 'nav mesh used by NPC to find paths (optional)',
    },
  },
};
