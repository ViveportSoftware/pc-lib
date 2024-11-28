import {INameTag} from './interface/INameTag';
import * as NameTagTypes from './enums/nameTag';

class NameTag implements INameTag {
  visibility: NameTagTypes.VisibilityTypes;
  constructor() {
    this.visibility = NameTagTypes.VisibilityTypes.Auto;
  }
}

export default NameTag;
