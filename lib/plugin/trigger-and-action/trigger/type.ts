export enum Type {
  Base = 0,
  Echo = 1,

  /********************************
   * PlayCanvas
   ********************************/
  PCAppEventSubscribe = 100001,

  /********************************
   * NotificationCenter
   ********************************/
  NotificationCenterSubscribe = 200001,
  NotificationCenterSubscribeEntityPicking = 200002,

  /********************************
   * Entity
   ********************************/
  EntitySubscribeAnimationEvent = 300001,
  EntitySubscribeAnimationStart = 300002,
  EntitySubscribeAnimationEnd = 300003,
  EntitySubscribeCollisionStart = 300004,
  EntitySubscribeCollisionEnd = 300005,
  EntitySubscribeTriggerEnter = 300006,
  EntitySubscribeTriggerLeave = 300007,
}
