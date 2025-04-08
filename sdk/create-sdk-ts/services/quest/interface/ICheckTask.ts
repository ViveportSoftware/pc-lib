import {ITask} from './ITask';

/**
 * Define CheckTask Interface.
 */
export interface ICheckTask extends ITask {
  /**
   * Check to complete the task.
   */
  check(): void;
}
