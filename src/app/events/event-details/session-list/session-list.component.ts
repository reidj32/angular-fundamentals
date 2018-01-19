import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Session } from '../../session';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: Session[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: Session[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  private filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter;
      });
    }
  }

  private sortSessions(sortBy: string) {
    sortBy === 'name'
      ? this.visibleSessions.sort(sortByNameAsc)
      : this.visibleSessions.sort(sortByVotesDesc);
  }
}

function sortByNameAsc(s1: Session, s2: Session) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: Session, s2: Session) {
  return s2.voters.length - s1.voters.length;
}
