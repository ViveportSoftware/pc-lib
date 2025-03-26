import * as pc from 'playcanvas';
import {ITask, ITaskEvents} from './ITask';

/**
 * Define ProgressBarTask Interface.
 */
export interface IProgressBarTask extends ITask {
  /**
   * @planned The current progress steps.
   */
  readonly currentProgress: number;

  /**
   * @planned The total progress steps needed to complete the task.
   */
  readonly totalProgress: number;

  /**
   * @planned Update the progress of the task.
   * @param progress - Optional progress value. If not provided, the progress is incremented by 1.
   */
  updateProgress(progress?: number): void;

  /**
   *
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof IProgressBarTaskEvents>(
    event: T,
    listener: IProgressBarTaskEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof IProgressBarTaskEvents>(
    event: T,
    listener: IProgressBarTaskEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof IProgressBarTaskEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

export interface IProgressBarTaskEvents extends ITaskEvents {
  /**
   * @planned Triggered when the progress of the task is updated.
   * @param currentProgress - The current progress of the task.
   * @param totalProgress - The total progress needed to complete the task.
   */
  progressUpdate: (currentProgress: number, totalProgress: number) => void;
}
