import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'screen-one', loadChildren: () => import ('./pages/screen-one/screen-one.module').then(value => value.ScreenOneModule)
  },
  {
    path: 'screen-two', loadChildren: () => import ('./pages/screen-two/screen-two.module').then(value => value.ScreenTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
