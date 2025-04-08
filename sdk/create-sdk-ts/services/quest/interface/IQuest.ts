import * as pc from 'playcanvas';
import {ITask} from './ITask';
import {ICheckTask} from './ICheckTask';
import {IProgressBarTask} from './IProgressBarTask';

/**
 * Define Quest Interface.
 */
export interface IQuest {
  /**
   * The ID of the quest.
   */
  readonly id: number;

  /**
   * The name of the quest.
   */
  readonly name: string;

  /**
   * The description of the quest.
   */
  readonly description: string;

  /**
   * Get the list of tasks in the quest.
   */
  readonly tasks: Map<number, ITask> | null;

  /**
   * Whether the quest is completed.
   */
  readonly isCompleted: boolean;

  /**
   * Whether the quest is active.
   */
  readonly isActive: boolean;

  /**
   * Add a new check task.
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
   * Add a new progress bar task.
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
   * Start the quest.
   */
  start(): void;

  /**
   * Reset the quest.
   */
  reset(): void;

  /**
   * Get a task by ID.
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
   * Triggered when the quest is started.
   */
  start: () => void;

  /**
   * Triggered when the quest is completed.
   */
  complete: () => void;

  /**
   * Triggered when the quest is updated.
   */
  update: () => void;

  /**
   * Triggered when a task of the quest is completed.
   */
  'task:complete': (task: ITask) => void;

  /**
   * Triggered when a {@link ICheckTask|CheckTask} of the quest is completed.
   */
  'task:check': (task: ICheckTask) => void;

  /**
   * Triggered when a {@link IProgressBarTask|ProgressBar} of the quest is updated.
   */
  'task:progressUpdate': (task: IProgressBarTask) => void;
}
