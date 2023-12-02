import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PURCHASE_STEPS, PurchaseStep } from '../constants/purchase-steps';

@Injectable({
  providedIn: 'root',
})
export class BuyService {
  private purchaseSteps$ = new BehaviorSubject<PurchaseStep[]>(PURCHASE_STEPS);
  public purchaseStepsListener$ = this.purchaseSteps$.asObservable();

  updatePurchaseSteps(updatedSteps: PurchaseStep[]): void {
    this.purchaseSteps$.next(updatedSteps);
  }
}
