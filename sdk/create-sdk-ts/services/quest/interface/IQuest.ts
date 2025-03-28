import * as pc from 'playcanvas';
import {ITask} from './ITask';
import {ICheckTask} from './ICheckTask';
import {IProgressBarTask} from './IProgressBarTask';

/**
 * Define Quest Interface.
 */
export interface IQuest {
  /**
   * @planned The ID of the quest.
   */
  readonly id: number;

  /**
   * @planned The name of the quest.
   */
  readonly name: string;

  /**
   * @planned The description of the quest.
   */
  readonly description: string;

  /**
   * @planned Get the list of tasks in the quest.
   */
  readonly tasks: Map<number, ITask> | null;

  /**
   * @planned Whether the quest is completed.
   */
  readonly isCompleted: boolean;

  /**
   * @planned Whether the quest is active.
   */
  readonly isActive: boolean;

  /**
   * @planned Add a new check task.
   * @param {string} description - The description of the task.
   * @param {Object} [options] - Optional parameters.
   * @param {() => void} [options.onCompleted] - Callback function triggered when the task is completed.
   * @returns {ICheckTask} The check task object.
   */
  addCheckTask(
    description: string,
    options?: {
      onCompleted?: () => void;
    }
  ): ICheckTask;

  /**
   * @planned Add a new progress bar task.
   * @param {string} description - The description of the task.
   * @param {Object} [options] - Optional parameters.
   * @param {() => void} [options.onCompleted] - Callback function triggered when the task is completed.
   * @returns {IProgressBarTask} The progress bar task object.
   */
  addProgressBarTask(
    description: string,
    totalProgress: number,
    options?: {
      onCompleted?: () => void;
    }
  ): IProgressBarTask;

  /**
   * @planned Start the quest.
   * @param {number} [delay] - Delay in milliseconds.
   */
  start(delay?: number): void;

  /**
   * @planned Reset the quest.
   */
  reset(): void;

  /**
   * @planned Get a task by ID.
   * @param {number} id - Task ID.
   */
  getTaskById(id: number): ITask | null;

  /**
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof IQuestEvents>(
    event: T,
    listener: IQuestEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof IQuestEvents>(
    event: T,
    listener: IQuestEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof IQuestEvents>(event: T, ...args: any[]): pc.EventHandler;
}

export interface IQuestEvents {
  /**
   * @planned Triggered when the quest is started.
   */
  start: () => void;

  /**
   * @planned Triggered when the quest is completed.
   */
  complete: () => void;

  /**
   * @planned Triggered when the quest is updated.
   */
  update: () => void;

  /**
   * @planned Triggered when a task of the quest is completed.
   */
  'task:complete': (task: ITask) => void;

  /**
   * @planned Triggered when a {@link ICheckTask|CheckTask} of the quest is completed.
   */
  'task:check': (task: ICheckTask) => void;

  /**
   * @planned Triggered when a {@link IProgressBarTask|ProgressBar} of the quest is updated.
   */
  'task:progressUpdate': (task: IProgressBarTask) => void;
}
