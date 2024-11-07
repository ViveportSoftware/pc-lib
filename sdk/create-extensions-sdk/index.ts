import * as TriggerAndAction from '../../lib/plugin/trigger-and-action';
import * as Avatar from '../../lib/enums/avatar';

function enumToNumberRecord<T extends Record<string, any>>(enumObj: T): Record<string, number> {
  return Object.entries(enumObj)
    .filter((entry): entry is [string, number] => typeof entry[1] === 'number')
    .reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<string, number>
    );
}

export default class CreateExtensionsSDK {
  private TriggerType: Record<string, number>;
  private ActionType: Record<string, number>;
  private AvatarGenderType: Record<string, number>;
  prefix: Record<string, string>;

  constructor() {
    this.TriggerType = enumToNumberRecord(TriggerAndAction.Trigger.Type)
    this.ActionType = enumToNumberRecord(TriggerAndAction.Action.Type)
    this.AvatarGenderType = enumToNumberRecord(Avatar.AvatarGenderType)

    this.prefix = {
      TriggerType: 'trigger:',
      ActionType: 'action:',
    };
  }

  toTemplateLiteral() {
    return `export const TriggerTypes = {
  ${Object.entries(this.TriggerType)
    .map(([key, value]) => `${key}: '${this.prefix['TriggerType'] + value}'`)
    .join(',\n  ')}
}

export const ActionTypes = {
  ${Object.entries(this.ActionType)
    .map(([key, value]) => `${key}: '${this.prefix['ActionType'] + value}'`)
    .join(',\n  ')}
}

export const AvatarGenderType = {
  ${Object.entries(this.AvatarGenderType)
    .map(([key, value]) => `${key}: ${value}`)
    .join(',\n  ')}
}
`;
  }
}
