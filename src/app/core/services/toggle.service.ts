import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  private billAnnually$ = new BehaviorSubject<boolean>(false);
  public billAnnuallyListener$ = this.billAnnually$.asObservable();

  constructor() {}

  billAnnually(value: boolean) {
    this.billAnnually$.next(value);
  }
}
