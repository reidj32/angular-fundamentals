import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404/404.component';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventService,
  EventsListComponent,
  EventsListResolverService,
  EventThumbnailComponent,
} from './events/index';
import { NavbarComponent } from './nav/navbar/navbar.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventsListResolverService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
