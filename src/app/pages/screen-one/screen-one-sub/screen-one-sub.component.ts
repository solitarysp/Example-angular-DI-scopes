import { Component, OnInit } from '@angular/core';
import {ServiceOneService} from '../../../share/service/service-one.service';

@Component({
  selector: 'app-screen-one-sub',
  templateUrl: './screen-one-sub.component.html',
  styleUrls: ['./screen-one-sub.component.scss']
})
export class ScreenOneSubComponent implements OnInit {
  count: number;

  constructor(private serviceOneService: ServiceOneService) {
    serviceOneService.getLogSub().subscribe(value => {
      this.count = value;
    });
  }

  ngOnInit(): void {
  }

  clickCountRoot() {
    this.serviceOneService.addCount();
  }
}
