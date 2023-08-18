export enum Type {
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
  TheatreJSPublish = 21001,
  TheatreJSPlaySheet = 21002,

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
}
