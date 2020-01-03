import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-parent',
  templateUrl: './lifecycle-hooks-parent.component.html',
  styleUrls: ['./lifecycle-hooks-parent.component.scss']
})
export class LifecycleHooksParentComponent implements OnInit {
  value: number = 100;
  ngContentBody: number = 1;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.value += 2;
  }

  decrease() {
    this.value -= 2;
  }

  changeContentBody() {
    this.ngContentBody = this.ngContentBody + 1;
  }
}
