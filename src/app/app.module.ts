import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
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

declare let toastr: Toastr;

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AppRoutingModule
  ],
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
    DurationPipe
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventsListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
