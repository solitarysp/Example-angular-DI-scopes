import {Component, OnInit} from '@angular/core';
import {ServiceOneService} from '../../share/service/service-one.service';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.scss']
})
export class ScreenOneComponent implements OnInit {
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
