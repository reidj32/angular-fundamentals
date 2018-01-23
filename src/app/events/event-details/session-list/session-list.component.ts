import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { AuthService } from '../../../user/auth.service';
import { Session } from '../../session';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: Session[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: Session[] = [];

  constructor(public authService: AuthService, private voterService: VoterService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  toggleVote(session: Session) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: Session) {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
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
    sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
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
