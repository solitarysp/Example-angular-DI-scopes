import {Component, OnInit} from '@angular/core';
import {ServiceOneService} from '../../share/service/service-one.service';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.scss']
})
export class ScreenTwoComponent implements OnInit {
  count: number;

  constructor(private serviceOneService: ServiceOneService) {
    serviceOneService.getLogSub().subscribe(value => {
      this.count = value;
    });
    console.log('Khởi tạo ScreenTwoComponent');
  }

  ngOnInit(): void {
  }

  clickCountRoot() {
    this.serviceOneService.addCount();
  }
}
