import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Session } from '../session';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {}

  deleteVoter(eventId: number, session: Session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    this.http
      .delete(`http://localhost:8808/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .catch(this.handleError)
      .subscribe();
  }

  addVoter(eventId: number, session: Session, voterName: string) {
    session.voters.push(voterName);

    this.http
      .post(
        `http://localhost:8808/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`,
        {},
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        }
      )
      .catch(this.handleError)
      .subscribe();
  }

  userHasVoted(session: Session, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }

  private handleError(error: HttpResponse<any>) {
    return Observable.throw(error.statusText);
  }
}
