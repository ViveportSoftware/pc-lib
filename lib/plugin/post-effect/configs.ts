import {ConfigsType} from '../type';

export const Configs: ConfigsType = {
  type: 'json',
  schema: [
    {
      name: 'PostEffect',
      description: 'Post effect',
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
              default: 0,
            },
            {
              name: 'blendMap',
              type: 'vec3',
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
              default: 0,
            },
            {
              name: 'bloomThreshold',
              type: 'number',
              default: 0,
            },
            {
              name: 'blurAmount',
              type: 'number',
              default: 0,
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
              default: 0,
            },
            {
              name: 'aperture',
              type: 'number',
              default: 0,
            },
            {
              name: 'focus',
              type: 'number',
              default: 0,
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
              default: 0,
            },
            {
              name: 'samples',
              type: 'number',
              default: 0,
            },
            {
              name: 'radius',
              type: 'number',
              default: 0,
            },
            {
              name: 'samples',
              type: 'number',
              default: 0,
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
              default: 0,
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
              type: 'string',
              default: '0',
              description: 'Task description',
            },
            {
              name: 'darkness',
              type: 'number',
              default: 0,
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
              default: 0,
            },
          ],
        },
        {
          name: 'edgeDetect',
          type: 'json',
          desc: 'edgeDetect',
          schema: [
            {
              name: 'intensity',
              type: 'number',
              default: 0,
            },
            {
              name: 'color',
              type: 'number',
              default: 0,
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
              default: 0,
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
              default: 0,
            },
          ],
        },
        {
          name: 'motionBlur',
          type: 'json',
          schema: [
            {
              name: 'amount',
              type: 'number',
              default: 0,
            },
          ],
        },
      ],
    },
  ],
};
