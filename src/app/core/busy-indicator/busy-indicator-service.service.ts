import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyIndicatorServiceService {
  loadingSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private countOfRequests = 0;

  constructor() { }

  setLoading(loading: boolean): void {
    this.countOfRequests = loading ? (this.countOfRequests + 1 ) : (this.countOfRequests - 1);
    this.loadingSub$.next(this.countOfRequests > 0);
  }
}
