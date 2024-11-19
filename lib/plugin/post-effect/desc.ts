import {Type} from './type';

export const Desc = {
  [Type.Blend]: {
    mixRatio: {
      desc: 'mix ratio',
    },
    blendMap: {
      desc: 'blend map',
    },
    default: {},
  },
  [Type.Bloom]: {
    bloomIntensity: {
      desc: 'bloom intensity',
    },
    bloomThreshold: {
      desc: 'bloom threshold',
    },
    blurAmount: {
      desc: 'blur amount',
    },
    default: {},
  },
  [Type.Bokeh]: {
    maxBlur: {
      desc: 'max blur',
    },
    aperture: {
      desc: 'aperture',
    },
    focus: {
      desc: 'focus',
    },
    default: {},
  },
  [Type.BrightnessContrast]: {
    brightness: {
      desc: 'brightness',
    },
    contrast: {
      desc: 'contrast',
    },
    default: {},
  },
  [Type.Ssao]: {
    radius: {
      desc: 'radius',
    },
    intensity: {
      desc: 'intensity',
    },
    default: {},
  },
  [Type.Sepia]: {
    amount: {
      desc: 'amount',
    },
    default: {},
  },
  [Type.Vignette]: {
    darkness: {
      desc: 'darkness',
    },
    offset: {
      desc: 'offset',
    },
    default: {},
  },
  [Type.Luminosity]: {
    default: {},
  },
  [Type.HueSaturation]: {
    hue: {
      desc: 'hue',
    },
    saturation: {
      desc: 'saturation',
    },
    default: {},
  },
  [Type.EdgeDetect]: {
    intensity: {
      desc: 'intensity',
    },
    color: {
      desc: 'color',
    },
    default: {},
  },
  [Type.Fxaa]: {
    default: {},
  },
  [Type.HorizontalTiltShift]: {
    focus: {
      desc: 'focus',
    },
    default: {},
  },
  [Type.VerticalTiltShift]: {
    focus: {
      desc: 'focus',
    },
    default: {},
  },
  [Type.MotionBlur]: {
    amount: {
      desc: 'amount',
    },
    default: {},
  },
};
