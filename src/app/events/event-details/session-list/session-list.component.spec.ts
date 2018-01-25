import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AuthService } from '../../../user/auth.service';
import { VoterService } from '../voter.service';
import { SessionListComponent } from './session-list.component';
import { DurationPipe } from '../../duration.pipe';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let debugElement: DebugElement;

  beforeEach(
    async(() => {
      const mockAuthService = {
        isAuthenticated: () => true,
        currentUser: { userName: 'Jim' }
      };
      const mockVoterService = {
        userHasVoted: () => true
      };

      TestBed.configureTestingModule({
        declarations: [SessionListComponent, DurationPipe],
        providers: [
          { provide: AuthService, useValue: mockAuthService },
          { provide: VoterService, useValue: mockVoterService }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initial display', () => {
    it('should have the correct session title', () => {
      component.sessions = [
        {
          id: 3,
          name: 'Session 1',
          presenter: 'Joe',
          duration: 1,
          level: 'beginner',
          abstract: 'abstract',
          voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(debugElement.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
