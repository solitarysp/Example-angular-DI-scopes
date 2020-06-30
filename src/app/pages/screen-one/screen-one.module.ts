import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenOneRoutingModule } from './screen-one-routing.module';
import { ScreenOneComponent } from './screen-one.component';


@NgModule({
  declarations: [ScreenOneComponent],
  imports: [
    CommonModule,
    ScreenOneRoutingModule
  ]
})
export class ScreenOneModule { }
