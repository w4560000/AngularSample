import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appColorful]',
    exportAs: 'colorful'
  })
  export class ColorfulDirective {
    @Input() appColorful : string;
    @HostBinding('style.color') get color() {
      console.log(this.appColorful);
      return this.appColorful || 'red';
    }

    changeColor(color : string) {
      this.appColorful = color;
    }
  }