import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenOneRoutingModule } from './screen-one-routing.module';
import { ScreenOneComponent } from './screen-one.component';
import {ServiceOneService} from '../../share/service/service-one.service';


@NgModule({
  declarations: [ScreenOneComponent],
  imports: [
    CommonModule,
    ScreenOneRoutingModule
  ],
  providers : [ServiceOneService]
})
export class ScreenOneModule { }
