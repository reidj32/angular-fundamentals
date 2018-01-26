import { InjectionToken, ValueProvider } from '@angular/core';

export let JQueryToken = new InjectionToken('jQuery');

export let jQuery: Object = window['jQuery'];

export const JQueryService = <ValueProvider>{ provide: JQueryToken, useValue: jQuery };
