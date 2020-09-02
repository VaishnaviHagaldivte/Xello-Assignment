import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowmoreComponent } from './knowmore/knowmore.component'

const routes: Routes = [
  {
    path:'knowmore',
    component: KnowmoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
