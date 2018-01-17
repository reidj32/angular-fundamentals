import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { EVENTS } from './events';

@Injectable()
export class EventService {
  getEvents() {
    const subject = new Subject();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}
