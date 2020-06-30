import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceOneService {
  private logSub: Subject<number> = new BehaviorSubject<number>(0);
  private count = 0;

  constructor() {
    console.log('tao them service:', new Date());
  }

  addCount() {
    this.nextLogSub(this.count++);
    console.log('Count tăng lên ' + this.count);

  }

  getLogSub(): Observable<number> {
    return this.logSub.asObservable();
  }

  nextLogSub(value: number) {
    this.logSub.next(value);
  }

}
