import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { EventService } from './event.service';
import { Event } from './event';

@Injectable()
export class EventsListResolverService implements Resolve<Event[]> {
  constructor(private eventService: EventService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().map(events => events);
  }
}
