import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
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
  public purchaseSteps: PurchaseStep[] = [];
  public currentStep: string = '';
  public plan: string = '';
  public interval: string = '';
  public progressBarLength: number = 34;
  public stepPosition: number = 0;

  private readonly destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private buyService: BuyService) {}

  private setProgressBarLength() {
    switch (this.stepPosition) {
      case 0:
        this.progressBarLength = 34;
        break;
      case 1:
        this.progressBarLength = 68;
        break;
      case 2:
        this.progressBarLength = 100;
        break;
    }
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.plan = params['plan'] ?? 'professional';
      this.interval = params['interval'] ?? 'annually';
      this.buyService.sharePlanTypeAndInterval(this.plan, this.interval);
    });

    this.buyService.purchaseStepsListener$
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ updatedSteps, index }) => {
        this.purchaseSteps = [...updatedSteps] ?? PURCHASE_STEPS;
        this.currentStep = index
          ? this.purchaseSteps[index]?.stepName
          : this.purchaseSteps[0]?.stepName;
        this.stepPosition = index ?? 0;
        this.setProgressBarLength();
      });
  }

  onChangePlanTypeOrInterval() {
    this.buyService.sharePlanTypeAndInterval(this.plan, this.interval);
  }

  goToStep(index: number) {
    this.currentStep = this.purchaseSteps[index]?.stepName;
    this.stepPosition = index;
    this.buyService.updatePurchaseSteps(this.purchaseSteps, this.stepPosition);
  }

  ngOnDestroy(): void {
    this.buyService.updatePurchaseSteps(PURCHASE_STEPS, 0);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
