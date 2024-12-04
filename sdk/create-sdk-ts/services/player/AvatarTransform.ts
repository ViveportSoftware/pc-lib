import {IAvatarTransform} from './interface/IAvatarTransform';

type AvatarTransformData = IAvatarTransform;

class AvatarTransform implements IAvatarTransform {
  #position: pc.Vec3;
  #rotation: pc.Quat;
  #scale: pc.Vec3;

  constructor(data: AvatarTransformData) {
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

export default AvatarTransform;
