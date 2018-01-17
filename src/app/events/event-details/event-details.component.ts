import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
