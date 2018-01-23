import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  event: Event;

  constructor(private router: Router, private eventService: EventService) {
    this.event = new Event();
    this.event.location = {
      address: null,
      city: null,
      country: null
    };
    this.event.onlineUrl = null;
  }

  ngOnInit() {}

  saveEvent() {
    if (!this.event.location.address) {
      this.event.location = null;
    }
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
