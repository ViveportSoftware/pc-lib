import {Type} from './type';

export const Desc = {
  [Type.Base]: {
    name: {
      desc: 'Quest name',
    },
    description: {
      desc: 'Quest description',
    },
    startAutomatically: {
      desc: 'Start Automatically',
      default: false,
    },
    saveUserProgress: {
      desc: 'Save User Progress',
      default: false,
    },
    tasksAreOrdered: {
      desc: 'Tasks Are Ordered',
      default: false,
    },
    celebrateOnComplete: {
      desc: 'Celebrate On Complete',
      default: false,
    },
    tasksParams: {
      name: {
        desc: 'Task description',
      },
      type: {
        desc: 'Task type',
      },
      progressSteps: {
        desc: 'Progress Steps',
        default: 0,
      },
      eventName: {
        desc: 'Event Name',
      },
      default: [],
      array: true,
    },
    celebrateParams: {
      delay: {
        desc: 'Delay',
        default: 0,
      },
      type: {
        desc: 'Type',
      },
      entityId: {
        desc: 'Entity Id',
      },
      stringParams: {
        desc: 'String Params',
      },
      default: [],
      array: true,
    },
  },
};
