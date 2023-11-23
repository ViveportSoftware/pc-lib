"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InworldTriggerMode = exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["Base"] = 0] = "Base";
    Type[Type["Echo"] = 1] = "Echo";
    /********************************
     * PlayCanvas
     ********************************/
    Type[Type["PCAppEventPublish"] = 100001] = "PCAppEventPublish";
    /********************************
     * NotificationCenter
     ********************************/
    Type[Type["NotificationCenterPublish"] = 200001] = "NotificationCenterPublish";
    /********************************
     * TheatreJS
     ********************************/
    Type[Type["TheatreJSPublish"] = 210001] = "TheatreJSPublish";
    Type[Type["TheatreJSPlaySheet"] = 210002] = "TheatreJSPlaySheet";
    /********************************
     * Entity
     ********************************/
    Type[Type["EntityRigidbodyAddForceInPhysics"] = 300001] = "EntityRigidbodyAddForceInPhysics";
    Type[Type["EntityPlayAnimation"] = 300002] = "EntityPlayAnimation";
    Type[Type["EntityEnable"] = 300003] = "EntityEnable";
    Type[Type["EntityDisable"] = 300004] = "EntityDisable";
    Type[Type["EntityToggleEnabled"] = 300005] = "EntityToggleEnabled";
    Type[Type["EntityFadeIn"] = 300006] = "EntityFadeIn";
    Type[Type["EntityFadeOut"] = 300007] = "EntityFadeOut";
    Type[Type["EntityPlaySound"] = 300008] = "EntityPlaySound";
    Type[Type["EntityEnableCollision"] = 300009] = "EntityEnableCollision";
    Type[Type["EntityDisableCollision"] = 300010] = "EntityDisableCollision";
    Type[Type["EntityToggleCollision"] = 300011] = "EntityToggleCollision";
    Type[Type["InworldNpcWaitingSpeak"] = 300012] = "InworldNpcWaitingSpeak";
    Type[Type["InworldNpcStopWaitingSpeak"] = 300013] = "InworldNpcStopWaitingSpeak";
    Type[Type["EntityEnableByTag"] = 300014] = "EntityEnableByTag";
    Type[Type["EntityDisableByTag"] = 300015] = "EntityDisableByTag";
})(Type || (exports.Type = Type = {}));
var InworldTriggerMode;
(function (InworldTriggerMode) {
    InworldTriggerMode[InworldTriggerMode["Instruction"] = 1] = "Instruction";
    InworldTriggerMode[InworldTriggerMode["SayVerbatim"] = 2] = "SayVerbatim";
    InworldTriggerMode[InworldTriggerMode["TriggerName"] = 3] = "TriggerName";
})(InworldTriggerMode || (exports.InworldTriggerMode = InworldTriggerMode = {}));
//# sourceMappingURL=type.js.map