"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desc = void 0;
const type_1 = require("./type");
exports.Desc = {
    [type_1.Type.Image]: {
        billboard: {
            desc: 'billboard',
        },
        linkHref: {
            desc: 'link href',
        },
        linkButtonText: {
            desc: 'link button text (8 words maximum)',
        },
    },
    [type_1.Type.Video]: {
        assetId: {
            desc: 'video asset',
        },
        billboard: {
            desc: 'billboard',
        },
        linkHref: {
            desc: 'link href',
        },
        linkButtonText: {
            desc: 'link button text (8 words maximum)',
        },
        controls: {
            desc: 'controls',
        },
        autoPlay: {
            desc: 'auto play',
        },
        loop: {
            desc: 'loop',
        },
    },
    [type_1.Type.Audio]: {
        assetId: {
            desc: 'audio asset',
        },
        controls: {
            desc: 'controls',
        },
        autoPlay: {
            desc: 'auto play',
        },
        loop: {
            desc: 'loop',
        },
    },
    [type_1.Type.PolygonStreaming]: {
        url: {
            desc: 'polygon streaming url',
        },
        // TODO: streamController and streamableModel settings
    },
};
//# sourceMappingURL=desc.js.map