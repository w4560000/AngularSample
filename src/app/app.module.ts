import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ChildComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksParentComponent } from './lifecycle-hooks-parent/lifecycle-hooks-parent.component'

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LifecycleHooksComponent,
    ChildComponent,
    LifecycleHooksParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
