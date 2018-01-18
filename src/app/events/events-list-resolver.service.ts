import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Event } from './event';
import { EventService } from './event.service';

@Injectable()
export class EventsListResolverService implements Resolve<Event[]> {
  constructor(private eventService: EventService) {}

  resolve() {
    return this.eventService.getEvents().map(events => events);
  }
}
