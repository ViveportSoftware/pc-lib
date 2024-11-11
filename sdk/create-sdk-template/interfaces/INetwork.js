/**
 * @interface
 */
class INetwork {
  /**
   * Player 的 network session ID
   * @readonly
   * @type {string}
  */
  id;

  /**
   * 當 Player 成功連線並加入 session 時觸發
   * @memberof INetwork
   * @event INetwork#joined 
   */

  /**
   * 當 Player 斷線或是離開 session 時觸發
   * @memberof INetwork
   * @event INetwork#left 
   */

  constructor(){
      if (this.constructor === INetwork) {
          throw new Error("This is an abstract class and cannot be instantiated directly.");
      }
  }
}

export default INetwork;