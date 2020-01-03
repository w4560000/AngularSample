import {
  Component, Input, SimpleChanges,
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  ContentChild, ContentChildren, ViewChild, ViewChildren, QueryList,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>Child {{ value }} {{test}}</div>`,
})
export class ChildComponent {
  @Input() value: number;
  @Input() test: number;
}

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() price: number;
  @Input() test: number = 0;

  // angular8 ContentChild & ViewChild 的 static用途為
  // ture: 只會在ngOnInit取得該element 
  // false: ContentChild element 只會在 ngAfterContentInit取得
  //        ViewChild element 只會在ngAfterViewInit取得
  @ContentChild(LifecycleHooksComponent, { static: false }) contentChild: LifecycleHooksComponent;
  @ContentChildren(LifecycleHooksComponent) contentChildren: LifecycleHooksComponent;
  @ViewChild(ChildComponent, { static: false }) viewChild: ChildComponent;
  @ViewChildren(ChildComponent) viewChildren: QueryList<ChildComponent>;

  public firstChange: boolean = true;
  public currentValue: number;
  public previousValue: number;
  public list: Array<number> = [0];


  // constructor 通常用於DI 注入Service
  constructor() { console.log('constructor finished! [1]'); }

  // 父層傳入的Input值改變時  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges finished! [2]');
    this.firstChange = changes['price'].firstChange;
    this.currentValue = changes['price'].currentValue;
    this.previousValue = changes['price'].previousValue;
  }

  // 輔助 ngOnChanges使用
  ngDoCheck() {
    /* 當Input是物件而父層只修改物件的值
       此時ngOnChanges會判斷不到有變更，因為對物件而言 reference並無改變
       ngDoCheck 可以進一步 加強判斷 
       (類似Vue watch的deep功能)
       */
    console.log('ngDoCheck finished!');
  }

  // 2 Component Init ， 此時Component與Property已經建立
  ngOnInit() {
    console.log('ngOnInit finished! [3]');
  }

  // 當該Component裡的ng-content初始完成
  ngAfterContentInit() {
    console.log('ContentChild in AfterContentInit', this.contentChild);
    console.log('ContentChildren in AfterContentInit', this.contentChildren);
  }

  ngAfterContentChecked() {
    console.log('ContentChild in AfterContentChecked', this.contentChild);
    console.log('ContentChildren in AfterContentChecked', this.contentChildren);
  }

  // 當該Component裡的子Component初始完成
  ngAfterViewInit() {
    // 在 AfterViewInit 中可以取得子元件實體
    // 使用 @ViewChild 時，永遠只會取到第一個子元件
    console.log('ViewChild in AfterViewInit', this.viewChild);
    console.log('ViewChildren in AfterViewInit', this.viewChildren);
  }

  ngAfterViewChecked() {
    // 在每次樣板上元件的變更偵測都完成後
    console.log('ViewChild in AfterViewChecked', this.viewChild);
    console.log('ViewChildren in AfterViewChecked', this.viewChildren);
  }

  // 組件銷毀，最後一個生命週期 執行時期: 跳轉到下一個Component時 該Component銷毀
  // 常用於處理取消訂閱
  ngOnDestroy() {
    console.log('Destroy Success');
  }

  create() {
    // 陣列合併
    // Spread Operator : "..." 可以將陣列展開
    // list = [0] , list.length = 1  處理完list = [ 0 , 1] 
    this.list = [...this.list, this.list.length];
    this.test = this.test + 1;
  }
}