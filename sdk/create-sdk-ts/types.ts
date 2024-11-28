import * as pc from 'playcanvas';

type EventHandlerOn = Pick<pc.EventHandler, 'on'>;
type EventHandlerOff = Pick<pc.EventHandler, 'off'>;
type EventHandlerFire = Pick<pc.EventHandler, 'fire'>;

export type EventHandlerMethods = EventHandlerOn &
  EventHandlerOff &
  EventHandlerFire;
