"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desc = void 0;
const type_1 = require("./type");
exports.Desc = {
    [type_1.Type.Base]: {
        sceneId: {
            desc: 'scene Id',
        },
        characterId: {
            desc: 'character Id',
        },
        vrmUrl: {
            desc: 'VRM URL',
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
    },
};
//# sourceMappingURL=desc.js.map