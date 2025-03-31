import Task from './Task';
import {ICheckTask} from './interface/ICheckTask';
import * as TaskTypes from './enums/task';

class CheckTask extends Task implements ICheckTask {
  constructor() {
    super();
  }

  get type(): TaskTypes.CompletionTypes {
    return TaskTypes.CompletionTypes.Check;
  }

  check(): void {}
}

export default CheckTask;
