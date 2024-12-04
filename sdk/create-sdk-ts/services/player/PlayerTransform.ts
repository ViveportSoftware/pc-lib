import {IPlayerTransform} from './interface/IPlayerTransform';

type PlayerTransformData = IPlayerTransform;

class PlayerTransform implements IPlayerTransform {
  #position: pc.Vec3;
  #rotation: pc.Quat;
  #scale: pc.Vec3;

  constructor(data: PlayerTransformData) {
    const {position, rotation, scale} = data;

    this.#position = position;
    this.#rotation = rotation;
    this.#scale = scale;
  }

  /**
   * @type {pc.Vec3}
   */
  get position(): pc.Vec3 {
    return this.#position;
  }

  /**
   * @type {pc.Quat}
   */
  get rotation(): pc.Quat {
    return this.#rotation;
  }

  /**
   * @type {pc.Vec3}
   */
  get scale(): pc.Vec3 {
    return this.#scale;
  }
}

export default PlayerTransform;
