import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenTwoRoutingModule } from './screen-two-routing.module';
import { ScreenTwoComponent } from './screen-two.component';


@NgModule({
  declarations: [ScreenTwoComponent],
  imports: [
    CommonModule,
    ScreenTwoRoutingModule
  ]
})
export class ScreenTwoModule { }
