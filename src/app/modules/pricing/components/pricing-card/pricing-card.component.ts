import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit, OnDestroy {
  public readonly checkmark: string = '../../../../../assets/images/icons/checkmark.png';
  public billAnnually: boolean = false;
  private readonly destroy$ = new Subject<void>();

  constructor(private toggleService: ToggleService, private router: Router) {}

  ngOnInit(): void {
    this.toggleService.billAnnuallyListener$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => this.billAnnually = value);
  }

  navigateToBuyPage(plan: string) {
      const queryParams = {
        plan: plan,
        interval: this.billAnnually ? 'annually' : 'monthly'
      };
      this.router.navigate(['/buy'], { queryParams });
    }

  ngOnDestroy(): void {
    this.toggleService.billAnnually(false);
    this.destroy$.next();
    this.destroy$.complete();
  }

}
