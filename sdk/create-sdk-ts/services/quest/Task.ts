import * as pc from 'playcanvas';
import {ITask, ITaskEvents} from './interface/ITask';
import {IQuest} from './interface/IQuest';
import * as TaskTypes from './enums/task';

class Task implements ITask {
  constructor() {}

  get id(): number {
    return 0;
  }

  get description(): string {
    return '';
  }

  get type(): TaskTypes.CompletionTypes {
    return TaskTypes.CompletionTypes.Check;
  }

  get quest(): IQuest {
    return {} as IQuest;
  }

  get isCompleted(): boolean {
    return false;
  }

  on<T extends keyof ITaskEvents>(
    event: T,
    listener: ITaskEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof ITaskEvents>(
    event: T,
    listener: ITaskEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof ITaskEvents>(event: T, ...args: any[]): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default Task;
