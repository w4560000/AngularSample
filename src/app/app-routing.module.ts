import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { LifecycleHooksParentComponent } from './lifecycle-hooks-parent/lifecycle-hooks-parent.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { NgIfElseSampleComponent } from './ng-if-else-sample/ng-if-else-sample.component'

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
    path: 'directivesample',
    component: DirectiveSampleComponent
  },
  {
    path: 'ngifelsesample',
    component: NgIfElseSampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
