import {Component} from '@angular/core';
import {ServiceOneService} from './share/service/service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Example-angular-DI-scopes';
  count: number = 0;

  constructor(private serviceOneService: ServiceOneService) {
    serviceOneService.getLogSub().subscribe(value => {
      this.count = value;
    });
  }

  clickCountRoot() {
    this.serviceOneService.addCount();
  }
}
