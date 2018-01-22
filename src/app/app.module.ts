import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapsibleWellComponent, JQueryService, SimpleModalComponent, ToastrService } from './common';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { Error404Component } from './errors/404/404.component';
import {
  checkDirtyState,
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventService,
  EventsListComponent,
  EventsListResolverService,
  EventThumbnailComponent,
  SessionListComponent
} from './events';
import { DurationPipe } from './events/duration.pipe';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, UserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventsListResolverService,
    ToastrService,
    JQueryService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
