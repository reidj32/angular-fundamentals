import { InjectionToken, ValueProvider } from '@angular/core';

export let JQueryToken = new InjectionToken('jQuery');

declare let jQuery: Object;

export const JQueryService = <ValueProvider>{ provide: JQueryToken, useValue: jQuery };
