import {INameTag} from './interface/INameTag';

class NameTag implements INameTag {
  isVisible: boolean;
  constructor() {
    this.isVisible = true;
  }
}

export default NameTag;
