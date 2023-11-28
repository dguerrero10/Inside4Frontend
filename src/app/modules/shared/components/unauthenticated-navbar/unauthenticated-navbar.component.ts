import { Component } from '@angular/core';
import { Link, UNAUTHENTICATED_NAV_LINKS } from 'src/app/core/constants/links';

@Component({
  selector: 'app-unauthenticated-navbar',
  templateUrl: './unauthenticated-navbar.component.html',
  styleUrls: ['./unauthenticated-navbar.component.scss']
})
export class UnauthenticatedNavbarComponent {
  public links: Link[] = UNAUTHENTICATED_NAV_LINKS;
}
