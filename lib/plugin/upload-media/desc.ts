import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    videoSrc: {
      desc: 'video src url',
    },
    billboard: {
      desc: 'video always faces user',
    },
    controlsPanel: {
      desc: 'Toggle the visibility of the media controls.',
    },
    autoPlay: {
      desc: 'If true, the media will play when first entering the scene.',
    },
    loop: {
      desc: 'If true the media will loop indefinitely',
    },
    linkHref: {
      desc: 'Allows the video to function as a link for given url.',
    },
  },
};
