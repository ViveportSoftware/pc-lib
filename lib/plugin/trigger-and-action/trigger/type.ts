export enum Type {
  Base,
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
