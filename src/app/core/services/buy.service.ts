import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PURCHASE_STEPS, PurchaseStep } from '../constants/purchase-steps';

@Injectable({
  providedIn: 'root',
})
export class BuyService {
  private purchaseSteps$ = new BehaviorSubject<{
    updatedSteps: PurchaseStep[];
    index: number;
  }>({ updatedSteps: PURCHASE_STEPS, index: 0 });
  public purchaseStepsListener$ = this.purchaseSteps$.asObservable();

  private planTypeAndInterval$ = new BehaviorSubject<{
    plan: string;
    interval: string;
  }>({ plan: '', interval: '' });
  public planTypeAndIntervalListener$ = this.planTypeAndInterval$.asObservable();

  updatePurchaseSteps(updatedSteps: PurchaseStep[], index: number): void {
    this.purchaseSteps$.next({ updatedSteps, index });
  }

  sharePlanTypeAndInterval(plan: string, interval: string) {
    this.planTypeAndInterval$.next({ plan, interval });
  }
}
