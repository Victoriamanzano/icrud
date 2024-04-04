import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, '');

export const INITIAL_EVENTS: EventInput[] = [{

    id: createEventId(),
    title: 'IT Academy ',
    date: TODAY_STR + 'T10:00:00',

}];

export function createEventId() {
  return String(eventGuid++);
}
