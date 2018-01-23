import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event } from './event';
import { Session } from './session';

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8808/api/events').catch(this.handleError);
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`http://localhost:8808/api/events/${id}`).catch(this.handleError);
  }

  saveEvent(event: Event): Observable<Event> {
    return this.http
      .post('http://localhost:8808/api/events', event, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .map((res: HttpResponse<Event>) => {
        return res.body;
      })
      .catch(this.handleError);
  }

  searchSessions(searchTerm: string): Observable<Session[]> {
    return this.http.get(`http://localhost:8808/api/sessions/search?search=${searchTerm}`).catch(this.handleError);
  }

  private handleError(error: HttpResponse<any>) {
    return Observable.throw(error.statusText);
  }
}
