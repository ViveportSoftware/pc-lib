"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desc = void 0;
const type_1 = require("./type");
exports.Desc = {
    [type_1.Type.Base]: {
        delay: {
            default: 0,
            desc: 'delay in ms',
        },
    },
    [type_1.Type.PCAppEventPublish]: {
        stringParams: [
            {
                desc: 'notification name to publish',
            },
        ],
    },
    [type_1.Type.NotificationCenterPublish]: {
        stringParams: [
            {
                desc: 'notification name to publish',
            },
        ],
    },
    [type_1.Type.TheatreJSPlaySheet]: {
        stringParams: [
            {
                desc: 'sheet name to play',
            },
        ],
    },
    [type_1.Type.EntityRigidbodyAddForceInPhysics]: {
        numberParams: [
            {
                desc: 'x force',
            },
            {
                desc: 'y force',
            },
            {
                desc: 'z force',
            },
        ],
    },
    [type_1.Type.EntityPlayAnimation]: {
        stringParams: [
            {
                desc: 'animate state to play',
            },
        ],
        booleanParams: [
            {
                desc: 'is transition',
            },
        ],
    },
    [type_1.Type.EntityFadeIn]: {
        numberParams: [
            {
                desc: 'duration in ms',
            },
        ],
    },
    [type_1.Type.EntityFadeOut]: {
        numberParams: [
            {
                desc: 'duration in ms',
            },
        ],
    },
    [type_1.Type.EntityPlaySound]: {
        stringParams: [
            {
                desc: 'sound name to play',
            },
        ],
    },
    [type_1.Type.InworldNpcWaitingSpeak]: {
        inworldTriggerMode: {
            desc: 'goals trigger mode',
            default: 1,
        },
        stringParams: [
            {
                desc: 'trigger content',
            },
        ],
    },
    [type_1.Type.EntityEnableByTag]: {
        tagsFilter: [
            {
                desc: 'enable entity with tag',
            },
        ],
    },
    [type_1.Type.EntityDisableByTag]: {
        tagsFilter: [
            {
                desc: 'disable entity with tag',
            },
        ],
    },
};
//# sourceMappingURL=desc.js.map