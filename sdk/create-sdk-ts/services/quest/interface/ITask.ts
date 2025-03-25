import * as pc from 'playcanvas';
import {IQuest} from './IQuest';
import * as TaskTypes from '../enums/task';

/**
 * Define the interface of Task in Quest.
 */
export interface ITask {
  /**
   * @planned The ID of the quest.
   */
  readonly id: number;

  /**
   * @planned The description of the quest.
   */
  readonly description: string; //read only?

  /**
   * @planned The type of the task.
   */
  readonly type: TaskTypes.CompletionTypes;

  /**
   * @planned The belonging quest of the task.
   */
  readonly quest: IQuest;

  /**
   * @planned The completion status of the quest.
   */
  readonly isCompleted: boolean;

  /**
   * @planned The current progress steps on the progress bar.
   * NOTE: This property is used only when the task type is "progressBar".
   */
  readonly currentProgress?: number;

  /**
   * @planned The total progress steps needed to complete the task.
   * NOTE: This property is used only when the task type is "progressBar".
   */
  readonly totalProgress?: number; // read only?

  /**
   * @planned Check to complete the task.
   * NOTE: This method is used only when the task type is "check".
   */
  check(): void;

  /**
   * @planned Update the progress of the task.
   * @param progress - Progress value. If not provided, the progress is incremented by 1.
   * NOTE: This method is used only when the task type is "progressBar".
   */
  updateProgress(progress: number): void;

  /**
   *
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof ITaskEvents>(
    event: T,
    listener: ITaskEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof ITaskEvents>(
    event: T,
    listener: ITaskEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof ITaskEvents>(event: T, ...args: any[]): pc.EventHandler;
}

export interface ITaskEvents {
  /**
   * @planned Triggered when the task is completed.
   */
  complete: () => void;

  /**
   * @planned Triggered when the progress of the task is updated.
   * NOTE: This event is triggered when the type of the task is "progressBar".
   */
  progressUpdate: () => void;
}
