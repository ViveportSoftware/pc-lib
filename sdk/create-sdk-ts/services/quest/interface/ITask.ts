import * as pc from 'playcanvas';
import {IQuest} from './IQuest';
import * as TaskTypes from '../enums/task';

/**
 * Define Task interface.
 */
export interface ITask {
  /**
   * The ID of the task.
   */
  readonly id: number;

  /**
   * The description of the task.
   */
  readonly description: string;

  /**
   * The type of the task.
   */
  readonly type: TaskTypes.CompletionTypes;

  /**
   * The parent quest of the task.
   */
  readonly quest: IQuest;

  /**
   * Whether the task is completed.
   */
  readonly isCompleted: boolean;

  /**
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
   * Triggered when the task is completed.
   */
  complete: () => void;
}
