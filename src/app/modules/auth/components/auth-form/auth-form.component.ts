import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { InitAuthFormService } from 'src/app/core/services/init-auth-form.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, OnDestroy {
  public hide: boolean = true;
  public onLogin!: boolean; 
  
  private readonly destroy$ = new Subject<void>();

  constructor(private initAuthFormService: InitAuthFormService) {}

  ngOnInit(): void {
    this.initAuthFormService.onLoginListener$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => this.onLogin = value);
  }

  ngOnDestroy(): void {
    this.initAuthFormService.initLoginForm(true);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
