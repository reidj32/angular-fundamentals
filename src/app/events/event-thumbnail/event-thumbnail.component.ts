import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../event';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: Event;

  constructor() {}

  ngOnInit() {}

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' };
    }
    return {};
  }
}
