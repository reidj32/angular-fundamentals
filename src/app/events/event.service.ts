import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Event } from './event';
import { EVENTS } from './events';
import { Session } from './session';

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

  searchSessions(searchTerm: string): Observable<Session[]> {
    const term = searchTerm.toLocaleLowerCase();
    let results: Session[] = [];

    EVENTS.forEach(event => {
      let matchingSessions = event.sessions.filter(sessions => {
        return sessions.name.toLocaleLowerCase().indexOf(term) > -1;
      });
      matchingSessions = matchingSessions.map((session: Session) => {
        session.eventId = event.id;
        return session;
      });
      results = results.concat(matchingSessions);
    });

    return Observable.of(results).delay(100);
  }
}
