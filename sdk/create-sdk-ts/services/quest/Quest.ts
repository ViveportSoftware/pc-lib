import * as pc from 'playcanvas';
import {IQuest, IQuestEvents} from './interface/IQuest';
import {ITask} from './interface/ITask';
import * as TaskTypes from './enums/task';

class Quest implements IQuest {
  isActive: boolean;
  startAutomatically: boolean;

  constructor() {
    this.isActive = false;
    this.startAutomatically = false;
  }

  get id(): number {
    return 0;
  }

  get name(): string {
    return '';
  }

  get description(): string {
    return '';
  }

  get tasks(): Map<number, ITask> | null {
    return null;
  }

  get isCompleted(): boolean {
    return false;
  }

  addTask(
    description: string,
    type: TaskTypes.CompletionTypes,
    options?: {
      totalProgress?: number;
      onCompleted?: () => void;
    }
  ): ITask {
    return {} as ITask;
  }

  start(): void {}

  reset(): void {}

  getTaskById(): ITask | null {
    return null;
  }

  getTasksByType(): ITask[] | null {
    return null;
  }

  getTasksByCompletionStatus(completed: boolean): ITask[] | null {
    return null;
  }

  on<T extends keyof IQuestEvents>(
    event: T,
    listener: IQuestEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IQuestEvents>(
    event: T,
    listener: IQuestEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IQuestEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default Quest;
