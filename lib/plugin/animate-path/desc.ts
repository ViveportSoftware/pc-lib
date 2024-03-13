import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    withPlayer: {
      default: false,
      desc: 'with player',
    },
    hidePlayer: {
      default: false,
      desc: 'hide player',
    },
    cameraEntityId: {
      desc: "camera (player's) on move entity",
    },
    cameraRotationOffset: {
      desc: 'camera rotation offset X Y',
    },
    moveEntityId: {
      desc: 'move entity id',
    },
    autoStart: {
      default: false,
      desc: 'auto start',
    },
    animateRotation: {
      desc: 'animate rotation',
    },
    animateOnce: {
      default: false,
      desc: 'animate once',
    },
    animationLoop: {
      default: false,
      desc: 'animation loop',
    },
    animationDuration: {
      desc: 'animation duration',
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
