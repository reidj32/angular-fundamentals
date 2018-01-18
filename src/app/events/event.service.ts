import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Event } from './event';
import { EVENTS } from './events';

@Injectable()
export class EventService {
  getEvents(): Observable<Event[]> {
    const subject = new Subject<Event[]>();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number): Event {
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event: Event) {
    event.id = 999;
    event.sessions = [];
    EVENTS.push(event);
  }

  updateEvent(event: Event) {
    const index = EVENTS.findIndex(x => x.id === event.id);
    EVENTS[index] = event;
  }
}
