"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desc = void 0;
const type_1 = require("./type");
exports.Desc = {
    [type_1.Type.Base]: {
        sync: {
            default: true,
            desc: 'sync the trigger',
        },
        throttle: {
            default: 0,
            desc: 'throttle in ms',
        },
        actions: {
            default: [],
            array: true,
        },
    },
    [type_1.Type.PCAppEventSubscribe]: {
        stringParams: [
            {
                desc: 'notification name to subscribe',
            },
        ],
    },
    [type_1.Type.NotificationCenterSubscribe]: {
        stringParams: [
            {
                desc: 'notification name to subscribe',
            },
        ],
    },
    [type_1.Type.TheatreJSSubscribeSheetEnd]: {
        stringParams: [
            {
                desc: 'sheet name to subscribe',
            },
        ],
    },
    [type_1.Type.EntitySubscribeTriggerEnter]: {
        tagsFilter: [
            {
                desc: 'tags to filter',
            },
        ],
    },
    [type_1.Type.EntitySubscribeTriggerLeave]: {
        tagsFilter: [
            {
                desc: 'tags to filter',
            },
        ],
    },
    [type_1.Type.EntitySubscribeCollisionStart]: {
        tagsFilter: [
            {
                desc: 'tags to filter',
            },
        ],
    },
    [type_1.Type.EntitySubscribeCollisionEnd]: {
        tagsFilter: [
            {
                desc: 'tags to filter',
            },
        ],
    },
};
//# sourceMappingURL=desc.js.map