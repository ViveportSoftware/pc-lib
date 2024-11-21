import * as TriggerAndAction from '../../lib/plugin/trigger-and-action';
import * as Avatar from '../../lib/enums/avatar';
import * as Environment from '../../lib/enums/environment';

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
  prefix: Record<string, string>;

  constructor() {
    this.prefix = {
      TriggerType: 'trigger:',
      ActionType: 'action:',
    };
  }

  toTemplateLiteral() {
    return `export const TriggerTypes = {
  ${Object.entries(enumToNumberRecord(TriggerAndAction.Trigger.Type))
    .map(([key, value]) => `${key}: '${this.prefix['TriggerType'] + value}'`)
    .join(',\n  ')}
}

export const ActionTypes = {
  ${Object.entries(enumToNumberRecord(TriggerAndAction.Action.Type))
    .map(([key, value]) => `${key}: '${this.prefix['ActionType'] + value}'`)
    .join(',\n  ')}
}

export const Avatar = {
  GenderTypes: {
    ${Object.entries(enumToNumberRecord(Avatar.GenderTypes))
      .map(([key, value]) => `${key}: ${value}`)
      .join(',\n    ')}
  },
  DataTypes: {
    ${Object.entries(enumToNumberRecord(Avatar.DataTypes))
      .map(([key, value]) => `${key}: ${value}`)
      .join(',\n    ')}
  }
}

export const Environment = {
  FlyModeTypes: {
    ${Object.entries(enumToNumberRecord(Environment.FlyModeTypes))
      .map(([key, value]) => `${key}: ${value}`)
      .join(',\n    ')}
  },
  ImpostorModeTypes: {
    ${Object.entries(enumToNumberRecord(Environment.ImpostorModeTypes))
      .map(([key, value]) => `${key}: ${value}`)
      .join(',\n    ')}
  }
}
`;
  }
}
