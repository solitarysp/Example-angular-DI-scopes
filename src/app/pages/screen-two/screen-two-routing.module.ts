import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScreenTwoComponent} from './screen-two.component';


const routes: Routes = [{
  path: '', component: ScreenTwoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenTwoRoutingModule {
}
