import * as pc from 'playcanvas';
import Task from './Task';
import {
  IProgressBarTask,
  IProgressBarTaskEvents,
} from './interface/IProgressBarTask';
import * as TaskTypes from './enums/task';

class ProgressBarTask extends Task implements IProgressBarTask {
  constructor() {
    super();
  }

  get type(): TaskTypes.CompletionTypes {
    return TaskTypes.CompletionTypes.Check;
  }

  get currentProgress(): number {
    return 0;
  }

  get totalProgress(): number {
    return 0;
  }

  updateProgress(progress?: number): void {}

  on<T extends keyof IProgressBarTaskEvents>(
    event: T,
    listener: IProgressBarTaskEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IProgressBarTaskEvents>(
    event: T,
    listener: IProgressBarTaskEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IProgressBarTaskEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default ProgressBarTask;
