export enum Type {
  Echo,

  /********************************
   * PlayCanvas
   ********************************/
  PCAppEventSubscribe,

  /********************************
   * NotificationCenter
   ********************************/
  NotificationCenterSubscribe,
  NotificationCenterSubscribeEntityPicking,

  /********************************
   * Entity
   ********************************/
  EntitySubscribeAnimationEvent,
  EntitySubscribeAnimationStart,
  EntitySubscribeAnimationEnd,
  EntitySubscribeCollisionStart,
  EntitySubscribeCollisionEnd,
  EntitySubscribeTriggerEnter,
  EntitySubscribeTriggerLeave,
}
