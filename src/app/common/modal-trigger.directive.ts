import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';

import { JQueryToken } from '.';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input() appModalTrigger: string;
  private element: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQueryToken) private jQuery: any) {
    this.element = ref.nativeElement;
  }

  ngOnInit(): void {
    this.element.addEventListener('click', () => {
      this.jQuery(`#${this.appModalTrigger}`).modal({});
    });
  }
}
