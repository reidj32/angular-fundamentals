import { TestBed, inject } from '@angular/core/testing';

import { EventsListResolver } from './events-list-resolver.service';

describe('EventsListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsListResolver]
    });
  });

  it(
    'should be created',
    inject([EventsListResolver], (service: EventsListResolver) => {
      expect(service).toBeTruthy();
    })
  );
});
