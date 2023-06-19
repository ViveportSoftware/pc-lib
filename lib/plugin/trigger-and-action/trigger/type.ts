export enum Type {
  Echo,

  /********************************
   * PlayCanvas
   ********************************/
  /**
   * PCAppEventSubscribe
   *
   * stringParams[0]: notification name to subscribe
   */
  PCAppEventSubscribe,

  /********************************
   * NotificationCenter
   ********************************/
  /**
   * NotificationCenterSubscribe
   *
   * stringParams[0]: notification name to subscribe
   */
  NotificationCenterSubscribe,

  /**
   * NotificationCenterSubscribeEntityPicking
   */
  NotificationCenterSubscribeEntityPicking,

  /********************************
   * Entity
   ********************************/
  /**
   * EntitySubscribeAnimationEvent
   *
   * stringParams[0]: animation event name
   */
  EntitySubscribeAnimationEvent,

  /**
   * EntitySubscribeAnimationStart
   */
  EntitySubscribeAnimationStart,

  /**
   * EntitySubscribeAnimationEnd
   */
  EntitySubscribeAnimationEnd,

  /**
   * EntitySubscribeCollisionStart
   */
  EntitySubscribeCollisionStart,

  /**
   * EntitySubscribeCollisionEnd
   */
  EntitySubscribeCollisionEnd,

  /**
   * EntitySubscribeTriggerEnter
   */
  EntitySubscribeTriggerEnter,

  /**
   * EntitySubscribeTriggerLeave
   */
  EntitySubscribeTriggerLeave,
}
