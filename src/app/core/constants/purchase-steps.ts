export interface PurchaseStep {
  stepName: string;
  completed: boolean;
}

export const PURCHASE_STEPS: PurchaseStep[] = [
  { stepName: 'Subscription', completed: false },
  { stepName: 'Billing information', completed: false },
  { stepName: 'Payment', completed: false },
];
