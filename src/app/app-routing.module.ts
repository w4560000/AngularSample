import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { LifecycleHooksParentComponent } from './lifecycle-hooks-parent/lifecycle-hooks-parent.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'lifecyclehooksparent',
    component: LifecycleHooksParentComponent
  },
  {
    path: 'lifecyclehooks',
    component: LifecycleHooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
