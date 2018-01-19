import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../event';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Event[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
