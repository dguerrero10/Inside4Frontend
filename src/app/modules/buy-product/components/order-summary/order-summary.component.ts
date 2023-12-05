import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import {
  PURCHASE_STEPS,
  PurchaseStep,
} from 'src/app/core/constants/purchase-steps';
import { BuyService } from 'src/app/core/services/buy.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  public purchaseSteps: PurchaseStep[] = [];
  public stepPosition: number = 0;
  public plan: string = '';
  public interval: string = '';
  private readonly destroy$ = new Subject<void>();

  constructor(private buyService: BuyService) {}

  ngOnInit(): void {
    this.buyService.purchaseStepsListener$
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ updatedSteps, index }) => {
        this.purchaseSteps = [...updatedSteps] ?? PURCHASE_STEPS;
        this.stepPosition = index ?? 0;
      });
    
    this.buyService.planTypeAndIntervalListener$
    .pipe(takeUntil(this.destroy$))
    .subscribe(({ plan, interval }) => {
      this.plan = plan;
      this.interval = interval;
    });
  }

  nextStep() {
    if (this.stepPosition === 2) {
      this.buyService.updatePurchaseSteps(this.purchaseSteps, 0);
    } else {
      this.buyService.updatePurchaseSteps(
        this.purchaseSteps,
        this.stepPosition + 1
      );
    }
  }

  ngOnDestroy(): void {
    this.buyService.updatePurchaseSteps(PURCHASE_STEPS, 0);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
