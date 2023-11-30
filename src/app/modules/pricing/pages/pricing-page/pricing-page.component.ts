import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/core/services/toggle.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {
  public readonly nanci: string = "../../../../../assets/images/misc/nanci-pelosi.jpg";
  public billAnnually: boolean = false;

  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    
  }

  onToggleChange(value: boolean) {
    this.billAnnually = value;
    this.toggleService.billAnnually(value);
  }

}
