import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    moveEntityId: {
      desc: 'move entity id',
    },
    withPlayer: {
      default: false,
      desc: 'with player',
    },
    hidePlayer: {
      default: false,
      desc: 'hide player',
    },
    cameraEntityId: {
      desc: 'camera entity id',
    },
    autoStart: {
      default: false,
      desc: 'auto start',
    },
    animationLoop: {
      default: false,
      desc: 'animation loop',
    },
    animateOnce: {
      default: false,
      desc: 'animate once',
    },
    animationDuration: {
      desc: 'animation duration',
    },
    animationRotation: {
      desc: 'animation rotation',
    },
    startEvent: {
      desc: 'start event',
    },
    resumeEvent: {
      desc: 'resume event',
    },
    pauseEvent: {
      desc: 'pause event',
    },
    stopEvent: {
      desc: 'stop event',
    },
    endEvent: {
      desc: 'end event',
    },
  },
};
