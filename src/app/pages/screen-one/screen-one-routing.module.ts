import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScreenOneComponent} from './screen-one.component';


const routes: Routes = [{
  path: '', component: ScreenOneComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenOneRoutingModule { }
