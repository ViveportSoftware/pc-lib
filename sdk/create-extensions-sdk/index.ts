import * as TriggerAndAction from '../../lib/plugin/trigger-and-action';

function enumToNumberRecord<T extends Record<string, any>>(
  enumObj: T
): Record<string, number> {
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

`;
  }
}
