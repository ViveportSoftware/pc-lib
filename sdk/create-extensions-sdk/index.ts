import * as TriggerAndAction from '../../lib/plugin/trigger-and-action';
import * as Avatar from '../../lib/enums/avatar';

export default class CreateExtensionsSDK {
  private TriggerType: Record<string, number>;
  private ActionType: Record<string, number>;
  prefix: Record<string, string>;

  constructor() {
    this.TriggerType = Object.entries(TriggerAndAction.Trigger.Type)
      .filter(
        (entry): entry is [string, number] => typeof entry[1] === 'number'
      )
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, number>
      );

    this.ActionType = Object.entries(TriggerAndAction.Action.Type)
      .filter(
        (entry): entry is [string, number] => typeof entry[1] === 'number'
      )
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, number>
      );

    this.prefix = {
      TriggerType: 'trigger:',
      ActionType: 'action:',
    };

    this.generateGetters();
  }

  private generateGetters() {
    Object.keys(this.TriggerType).forEach(key => {
      Object.defineProperty(this, `getTrigger${key}`, {
        get: () => `${this.prefix['TriggerType'] + this.TriggerType[key]}`,
      });
    });

    Object.keys(this.ActionType).forEach(key => {
      Object.defineProperty(this, `getAction${key}`, {
        get: () => `${this.prefix['ActionType'] + this.ActionType[key]}`,
      });
    });
  }

  toTemplateLiteral() {
    const AvatarGenderType = Object.entries(Avatar.AvatarGenderType)
      .filter(
        (entry): entry is [string, number] => typeof entry[1] === 'number'
      )
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, number>
      );

    return `export const TriggerTypes = {
  ${Object.keys(this.TriggerType)
    .map(key => `${key}: '${(this as any)[`getTrigger${key}`]}'`)
    .join(',\n  ')}
}

export const ActionTypes = {
  ${Object.keys(this.ActionType)
    .map(key => `${key}: '${(this as any)[`getAction${key}`]}'`)
    .join(',\n  ')}
}

export const AvatarGenderType = {
  ${Object.entries(AvatarGenderType)
    .map(([key, value]) => `${key}: ${value}`)
    .join(',\n  ')}
}
`;
  }
}
