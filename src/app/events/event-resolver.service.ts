import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Event } from './event';
import { EventService } from './event.service';

@Injectable()
export class EventResolver implements Resolve<Event> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id']);
  }
}
