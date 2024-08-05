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
   * TheatreJS
   ********************************/
  TheatreJSSubscribe = 210001,
  TheatreJSSubscribeSheetEnd = 210002,

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
  SitInSeat = 300008,

  /********************************
   * User Operation
   ********************************/
  SharePhoto = 400001,
}

export enum ExternalCreatorType {
  Base = 0,

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
