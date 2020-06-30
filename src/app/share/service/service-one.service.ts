import {Injectable} from '@angular/core';

@Injectable()
export class ServiceOneService {
  private count: number;

  constructor() {
    this.count = 0;
    console.log('tao them service:', new Date());
  }

  addCount() {
    this.count++;
    console.log('Count tăng lên ' + this.count);

  }
}
