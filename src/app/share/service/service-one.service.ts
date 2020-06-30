import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable()
export class ServiceOneService {
  private count: number;
  private logSub: Subject<string> = new BehaviorSubject<string>('');

  constructor() {
    this.count = 0;
    console.log('tao them service:', new Date());
  }

  addCount() {
    this.count++;
    console.log('Count tăng lên ' + this.count);

  }

  getLogSub(): Observable<string> {
    return this.logSub.asObservable();
  }

  nextLogSub(value: string) {
    this.logSub.next(value);
  }

}
