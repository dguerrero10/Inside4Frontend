import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitAuthFormService {
  private onLogin$ = new BehaviorSubject<boolean>(true);
  public onLoginListener$ = this.onLogin$.asObservable();

  constructor() {}

  initLoginForm(value: boolean) {
    this.onLogin$.next(value);
  }
}
