import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss'],
})
export class GdprComponent implements OnInit {
  @Output() public closePopup = new EventEmitter<void>();
  public src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor() {}

  ngOnInit(): void {}

  public onCloseButtonClick(): void {
    this.closePopup.emit();
  }
}
