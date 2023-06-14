export enum Type {
  Echo,

  /********************************
   * NotificationCenter
   ********************************/
  /**
   * NotificationCenterPublish
   *
   * stringParams[0]: notification name to publish
   */
  NotificationCenterPublish,

  /********************************
   * Entity
   ********************************/
  /**
   * EntityRigidbodyAddForceInPhysics
   *
   * numberParams[0]: x force
   * numberParams[1]: y force
   * numberParams[2]: z force
   */
  EntityRigidbodyAddForceInPhysics,

  /**
   * EntityPlayAnimation
   *
   * stringParams[0]: animate state to play
   * booleanParams[1]: is transition
   */
  EntityPlayAnimation,

  /**
   * EntityEnable
   */
  EntityEnable,

  /**
   * EntityDisable
   */
  EntityDisable,

  /**
   * EntityToggleEnabled
   */
  EntityToggleEnabled,
}
