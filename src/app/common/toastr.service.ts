import { InjectionToken, ValueProvider } from '@angular/core';

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}

export let ToastrToken = new InjectionToken<Toastr>('toastr');

export let toastr: Toastr = window['toastr'];

export const ToastrService = <ValueProvider>{ provide: ToastrToken, useValue: toastr };
