export declare enum Type {
    Base = 0,
    Echo = 1,
    /********************************
     * PlayCanvas
     ********************************/
    PCAppEventPublish = 100001,
    /********************************
     * NotificationCenter
     ********************************/
    NotificationCenterPublish = 200001,
    /********************************
     * TheatreJS
     ********************************/
    TheatreJSPublish = 210001,
    TheatreJSPlaySheet = 210002,
    /********************************
     * Entity
     ********************************/
    EntityRigidbodyAddForceInPhysics = 300001,
    EntityPlayAnimation = 300002,
    EntityEnable = 300003,
    EntityDisable = 300004,
    EntityToggleEnabled = 300005,
    EntityFadeIn = 300006,
    EntityFadeOut = 300007,
    EntityPlaySound = 300008,
    EntityEnableCollision = 300009,
    EntityDisableCollision = 300010,
    EntityToggleCollision = 300011,
    InworldNpcWaitingSpeak = 300012,
    InworldNpcStopWaitingSpeak = 300013,
    EntityEnableByTag = 300014,
    EntityDisableByTag = 300015
}
export declare enum InworldTriggerMode {
    Instruction = 1,
    SayVerbatim = 2,
    TriggerName = 3
}
