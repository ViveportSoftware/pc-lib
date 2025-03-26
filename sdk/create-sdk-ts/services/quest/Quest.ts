import * as pc from 'playcanvas';
import {IQuest, IQuestEvents} from './interface/IQuest';
import {ITask} from './interface/ITask';
import {ICheckTask} from './interface/ICheckTask';
import {IProgressBarTask} from './interface/IProgressBarTask';

class Quest implements IQuest {
  constructor() {}

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

  get isActive(): boolean {
    return false;
  }

  addCheckTask(
    description: string,
    options?: {
      onCompleted?: () => void;
    }
  ): ICheckTask {
    return {} as ICheckTask;
  }

  addProgressBarTask(
    description: string,
    totalProgress: number,
    options?: {
      onCompleted?: () => void;
    }
  ): IProgressBarTask {
    return {} as IProgressBarTask;
  }

  start(): void {}

  reset(): void {}

  getTaskById(): ITask | null {
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
