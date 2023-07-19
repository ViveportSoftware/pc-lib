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
   * Entity
   ********************************/
  EntityRigidbodyAddForceInPhysics = 300001,
  EntityPlayAnimation = 300002,
  EntityEnable = 300003,
  EntityDisable = 300004,
  EntityToggleEnabled = 300005,
  EntityFadeIn = 300006,
  EntityFadeOut = 300007,
}
