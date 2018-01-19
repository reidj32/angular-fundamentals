import { Component } from '@angular/core';

import { EventService } from '../../events';
import { Session } from '../../events/session';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string;
  foundSessions: Session[];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
