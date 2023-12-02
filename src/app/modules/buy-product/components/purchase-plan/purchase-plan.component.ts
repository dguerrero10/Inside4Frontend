import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import {
  PURCHASE_STEPS,
  PurchaseStep,
} from 'src/app/core/constants/purchase-steps';
import { BuyService } from 'src/app/core/services/buy.service';

@Component({
  selector: 'app-purchase-plan',
  templateUrl: './purchase-plan.component.html',
  styleUrls: ['./purchase-plan.component.scss'],
})
export class PurchasePlanComponent implements OnInit, OnDestroy {
  public purchaseSteps!: PurchaseStep[];
  public plan!: string;
  public interval!: string;
  public stepPosition: number = 0;

  private readonly destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private buyService: BuyService) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (params) => {
          this.plan = params['plan'] ? params['plan'] : 'professional';
          this.interval = params['interval'] ? params['interval'] : 'annually';
      });

      this.buyService.purchaseStepsListener$.pipe(takeUntil(this.destroy$))
      .subscribe(
        (purchaseSteps: PurchaseStep[]) => {
          this.purchaseSteps = purchaseSteps;
        });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
