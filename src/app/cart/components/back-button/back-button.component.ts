import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizza-back-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
