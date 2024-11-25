import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'blend',
      type: 'json',
      desc: 'blend',
      schema: [
        {
          name: 'mixRatio',
          type: 'number',
          default: 0.5,
        },
        {
          name: 'blendMap',
          type: 'string',
        },
      ],
    },
    {
      name: 'bloom',
      type: 'json',
      desc: 'bloom',
      schema: [
        {
          name: 'bloomIntensity',
          type: 'number',
          default: 0.4,
        },
        {
          name: 'bloomThreshold',
          type: 'number',
          default: 0.8,
        },
        {
          name: 'blurAmount',
          type: 'number',
          default: 15,
        },
      ],
    },
    {
      name: 'bokeh',
      type: 'json',
      desc: 'bokeh',
      schema: [
        {
          name: 'maxBlur',
          type: 'number',
          default: 0.02,
        },
        {
          name: 'aperture',
          type: 'number',
          default: 1,
        },
        {
          name: 'focus',
          type: 'number',
          default: 1,
        },
      ],
    },
    {
      name: 'brightnessContrast',
      type: 'json',
      desc: 'brightnessContrast',
      schema: [
        {
          name: 'brightness',
          type: 'number',
          default: 0,
        },
        {
          name: 'contrast',
          type: 'number',
          default: 0,
        },
      ],
    },
    {
      name: 'ssao',
      type: 'json',
      desc: 'ssao',
      schema: [
        {
          name: 'radius',
          type: 'number',
          default: 5,
        },
        {
          name: 'samples',
          type: 'number',
          default: 2,
        },
        {
          name: 'brightness',
          type: 'number',
          default: 0.75,
        },
        {
          name: 'downscale',
          type: 'number',
          default: 1,
        },
      ],
    },
    {
      name: 'sepia',
      type: 'json',
      desc: 'sepia',
      schema: [
        {
          name: 'amount',
          type: 'number',
          default: 1,
        },
      ],
    },
    {
      name: 'vignette',
      type: 'json',
      desc: 'vignette',
      schema: [
        {
          name: 'offset',
          type: 'number',
          default: 1,
          description: 'Task description',
        },
        {
          name: 'darkness',
          type: 'number',
          default: 1,
          description: 'Task type',
        },
      ],
    },
    {
      name: 'luminosity',
      type: 'json',
      desc: 'luminosity',
      schema: [],
    },
    {
      name: 'hueSaturation',
      type: 'json',
      desc: 'hueSaturation',
      schema: [
        {
          name: 'hue',
          type: 'number',
          default: 0,
        },
        {
          name: 'saturation',
          type: 'number',
          default: 0.15,
        },
      ],
    },
    {
      name: 'fxaa',
      type: 'json',
      desc: 'fxaa',
      schema: [],
    },
    {
      name: 'horizontalTiltShift',
      type: 'json',
      desc: 'horizontalTiltShift',
      schema: [
        {
          name: 'focus',
          type: 'number',
          default: 0.35,
        },
      ],
    },
    {
      name: 'verticalTiltShift',
      type: 'json',
      schema: [
        {
          name: 'focus',
          type: 'number',
          default: 0.35,
        },
      ],
    },
  ],
};
