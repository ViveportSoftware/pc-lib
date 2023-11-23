"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["Base"] = 0] = "Base";
    Type[Type["Echo"] = 1] = "Echo";
    /********************************
     * PlayCanvas
     ********************************/
    Type[Type["PCAppEventSubscribe"] = 100001] = "PCAppEventSubscribe";
    /********************************
     * NotificationCenter
     ********************************/
    Type[Type["NotificationCenterSubscribe"] = 200001] = "NotificationCenterSubscribe";
    Type[Type["NotificationCenterSubscribeEntityPicking"] = 200002] = "NotificationCenterSubscribeEntityPicking";
    /********************************
     * TheatreJS
     ********************************/
    Type[Type["TheatreJSSubscribe"] = 210001] = "TheatreJSSubscribe";
    Type[Type["TheatreJSSubscribeSheetEnd"] = 210002] = "TheatreJSSubscribeSheetEnd";
    /********************************
     * Entity
     ********************************/
    Type[Type["EntitySubscribeAnimationEvent"] = 300001] = "EntitySubscribeAnimationEvent";
    Type[Type["EntitySubscribeAnimationStart"] = 300002] = "EntitySubscribeAnimationStart";
    Type[Type["EntitySubscribeAnimationEnd"] = 300003] = "EntitySubscribeAnimationEnd";
    Type[Type["EntitySubscribeCollisionStart"] = 300004] = "EntitySubscribeCollisionStart";
    Type[Type["EntitySubscribeCollisionEnd"] = 300005] = "EntitySubscribeCollisionEnd";
    Type[Type["EntitySubscribeTriggerEnter"] = 300006] = "EntitySubscribeTriggerEnter";
    Type[Type["EntitySubscribeTriggerLeave"] = 300007] = "EntitySubscribeTriggerLeave";
})(Type || (exports.Type = Type = {}));
//# sourceMappingURL=type.js.map