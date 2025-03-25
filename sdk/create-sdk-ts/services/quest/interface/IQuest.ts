import * as pc from 'playcanvas';
import {ITask} from './ITask';
import * as TaskTypes from '../enums/task';

/**
 * Define the interface of XrController.
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
   * @planned The completion status of the quest.
   */
  readonly isCompleted: boolean;

  /**
   * @planned The active status of the quest.
   */
  isActive: boolean;

  /**
   * @planned Determine whether the quest starts automatically when the player joins.
   */
  startAutomatically: boolean;

  /**
   * @planned
   * @param {TaskTypes.CompletionTypes} type - The type of the task. The asset type can be either `check` or `progressBar`.
   * @param {Object} [options] - Optional parameters.
   * @param {number} [options.delay=0] -
   * @param {() => void} [options.onCompleted] - Callback function triggered when the task is completed.
   */
  addTask( // addCheckTask / addProgressBarTask
    description: string,
    type: TaskTypes.CompletionTypes,
    options?: {
      totalProgress?: number;
      onCompleted?: () => void;
    }
  ): void;

  /**
   * @planned Start the quest.
   */
  start(): void; // is Avtive?

  /**
   * @planned Reset the quest.
   */
  reset(): void;

  /**
   * @planned Get a task by ID.
   */
  getTaskById(): ITask | null;

  /**
   * @planned Get tasks by type.
   */
  getTasksByType(): ITask[] | null;

  /**
   * @planned Get tasks by completion status.
   */
  getTasksByCompletionStatus(completed: boolean): ITask[] | null; //TODO?

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
   * @planned Triggered when the quest is completed.
   */
  complete: () => void;

  /**
   * @planned Triggered when the quest is started.
   */
  start: () => void;
}
