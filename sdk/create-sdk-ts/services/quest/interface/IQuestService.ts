import {EventHandlerMethods} from '../../../types';
import {IQuest} from './IQuest';

/**
 * Define QuestService interface.
 */
export interface IQuestService extends EventHandlerMethods {
  /**
   * @planned The information of all quests.
   */
  readonly quests: Map<number, IQuest> | null;

  /**
   * @planned Whether the system is ready.
   * @example
   * // The quest system might not be ready when the script is loaded.
   * if(questService.isSystemReady){
   *   console.log('Quest system is ready', questService.quests);
   * } else {
   *   questService.on('system:ready', () => {
   *     console.log('Quest system is ready', questService.quests);
   *   });
   * }
   */
  readonly isSystemReady: boolean;

  /**
   * @planned Add a new quest.
   * @param {string} name - The name of the quest.
   * @param {Object} [options] - Optional parameters.
   * @param {string} [options.description] - The description of the quest.
   * @param {() => void} [options.onCompleted] - Callback function triggered when the quest is completed.
   * @returns {IQuest} The quest object.
   * @example
   * const quest = questService.addQuest(
   *  'Quest 1',
   *  {
   *  description: 'This is a quest.',
   *  onCompleted: () => console.log('Quest 1 is completed.')
   *  }
   * );
   * quest.addCheckTask('Task 1: Move', {onCompleted: () => console.log('Task 1 is completed.')});
   * quest.addProgressBarTask('Task 2: Jump 3 times', 3, {onCompleted: () => console.log('Task 2 is completed.')});
   * quest.start();
   */
  addQuest(
    name: string,
    options?: {
      description?: string;
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
   * @returns {IQuest | null} The quest object.
   */
  getQuestById(id: number): IQuest | null;

  /**
   * @planned Get a quest by name. If there are multiple quests with the same name, the first one is returned.
   * @param {string} name - Quest name.
   * @returns {IQuest | null} The quest object.
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
   * @planned Triggered when the quest system is ready.
   * @example
   * // The quest system might not be ready when the script is loaded.
   * if(questService.isSystemReady){
   *   console.log('Quest system is ready', questService.quests);
   * } else {
   *   questService.on('system:ready', () => {
   *     console.log('Quest system is ready', questService.quests);
   *   });
   * }
   */
  'system:ready': (quests: Map<number, IQuest>) => void;

  /**
   * @planned Triggered when all quests are completed.
   */
  allQuestsComplete: () => void;

  /**
   * @planned Triggered when a quest is started.
   * @param quest - The quest object.
   */
  'quest:start': (quest: IQuest) => void;

  /**
   * @planned Triggered when a quest is updated.
   * @param quest - The quest object.
   */
  'quest:update': (quest: IQuest) => void;

  /**
   * @planned Triggered when a quest is completed.
   * @param quest - The quest object.
   */
  'quest:complete': (quest: IQuest) => void;
}
