import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizza-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, AfterContentInit {

  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.active = true;
    }, 500);
  }
}
