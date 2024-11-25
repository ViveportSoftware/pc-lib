import {Type} from './type';

export const Desc = {
  [Type.Blend]: {
    mixRatio: {
      desc: 'mix ratio',
    },
    blendMap: {
      desc: 'blend map',
    },
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
  },
  [Type.BrightnessContrast]: {
    brightness: {
      desc: 'brightness',
    },
    contrast: {
      desc: 'contrast',
    },
  },
  [Type.Ssao]: {
    radius: {
      desc: 'radius',
    },
    samples: {
      desc: 'samples',
    },
    brightness: {
      desc: 'brightness',
    },
    downscale: {
      desc: 'downscale',
    },
  },
  [Type.Sepia]: {
    amount: {
      desc: 'amount',
    },
  },
  [Type.Vignette]: {
    darkness: {
      desc: 'darkness',
    },
    offset: {
      desc: 'offset',
    },
  },
  [Type.Luminosity]: {},
  [Type.HueSaturation]: {
    hue: {
      desc: 'hue',
    },
    saturation: {
      desc: 'saturation',
    },
  },
  [Type.Fxaa]: {},
  [Type.HorizontalTiltShift]: {
    focus: {
      desc: 'focus',
    },
  },
  [Type.VerticalTiltShift]: {
    focus: {
      desc: 'focus',
    },
  },
};
