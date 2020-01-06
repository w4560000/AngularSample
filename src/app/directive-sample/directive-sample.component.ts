import { Component, ViewChild } from '@angular/core';
import { ColorfulDirective } from '../../directive/color.directive';

@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.scss']
})
export class DirectiveSampleComponent {

  constructor() { }

  // 確定取得的是 ColorDirective 的實體
  @ViewChild('color', { static: true }) color: ColorfulDirective;

  change() {
    console.log(this.color);
    this.color.changeColor('black');
  }
}
