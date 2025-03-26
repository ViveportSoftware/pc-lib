import * as pc from 'playcanvas';
import {IQuestService, IQuestServiceEvents} from './interface/IQuestService';
import {IQuest} from './interface/IQuest';

class QuestService implements IQuestService {
  private static _instance?: QuestService;

  constructor() {
    if (QuestService._instance) return QuestService._instance;
    QuestService._instance = this;
  }

  get quests(): Map<number, IQuest> | null {
    return null;
  }

  get isSystemReady(): boolean {
    return false;
  }

  addQuest(
    name: string,
    options?: {
      description?: string;
      onCompleted?: () => void;
    }
  ): IQuest {
    return {} as IQuest;
  }

  resetAllQuests(): void {}

  getQuestById(id: number): IQuest | null {
    return null;
  }

  getQuestByName(name: string): IQuest | null {
    return null;
  }

  on<T extends keyof IQuestServiceEvents>(
    event: T,
    listener: IQuestServiceEvents[T]
  ): pc.EventHandle {
    return {} as pc.EventHandle;
  }

  off<T extends keyof IQuestServiceEvents>(
    event: T,
    listener: IQuestServiceEvents[T]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }

  fire<T extends keyof IQuestServiceEvents>(
    event: T,
    ...args: any[]
  ): pc.EventHandler {
    return {} as pc.EventHandler;
  }
}

export default QuestService;
