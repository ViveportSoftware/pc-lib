import {EventHandlerMethods} from '../../../types';
import {IQuest} from './IQuest';
import {ITask} from './ITask';

/**
 * Define QuestService interface.
 */
export interface IQuestService extends EventHandlerMethods {
  /**
   * @planned Get the information of all remote players in the room.
   */
  readonly quests: Map<number, IQuest> | null;

  /**
   * @planned Add a new quest.
   * @param {string} name -
   * @param {Object} [options] - Optional parameters.
   * @param {number} [options.delay=0] -
   * @param {() => void} [options.onCompleted] - Callback function triggered when the task is completed.
   */
  addQuest(
    name: string,
    options?: {
      description?: string;
      startAutomatically?: boolean;
      onCompleted?: () => void;
    }
  ): IQuest;

  /**
   * @planned Reset all quests.
   */
  resetAllQuests(): void;

  /**
   * @planned Get a quest by ID.
   * @param {number} id - Quest ID.
   */
  getQuestById(id: number): IQuest | null;

  /**
   * @planned Get a quest by name. If there are multiple quests with the same name, the first one is returned.
   * @param {string} name - Quest name.
   */
  getQuestByName(name: string): IQuest | null;

  /**
   * Subscribe to a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  on<T extends keyof IQuestServiceEvents>(
    event: T,
    listener: IQuestServiceEvents[T]
  ): pc.EventHandle;

  /**
   * Unsubscribe from a specific event.
   * @param event - Event name.
   * @param listener - Callback function.
   */
  off<T extends keyof IQuestServiceEvents>(
    event: T,
    listener: IQuestServiceEvents[T]
  ): pc.EventHandler;

  /**
   * Send a specific event.
   * @param event - Event name
   * @param [args] - Event parameters
   */
  fire<T extends keyof IQuestServiceEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler;
}

export interface IQuestServiceEvents {
  /**
   * @planned Triggered when quests from scene settings are loaded.
   */
  load: (quests: IQuest[]) => void;

  /**
   * @planned Triggered when all quests are completed.
   */
  allQuestsComplete: () => void;

  /**
   * @planned Triggered when a quest is started.
   */
  'quest:start': (quest: IQuest) => void;

  /**
   * @planned Triggered when a quest is completed.
   */
  'quest:complete': (quest: IQuest) => void;

  /**
   * @planned Triggered when a task is completed.
   */
  'task:complete': (task: ITask) => void;

  /**
   * @planned Triggered when a check task is completed.
   */
  'task:check': (task: ITask) => void;

  /**
   * @planned Triggered when a progressBar task is updated.
   */
  'task:progressUpdate': (task: ITask) => void;
}
