import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { JQueryToken } from '..';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer') containerRef: ElementRef;
  // use @ViewChildren when the ref name exists for than once (e.g. *ngFor)
  // use @ContentChild(ren) when using content projection. However, the projected content must include the ref name

  constructor(@Inject(JQueryToken) private jQuery: any) {}

  ngOnInit() {}

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.jQuery(this.containerRef.nativeElement).modal('hide');
    }
  }
}
