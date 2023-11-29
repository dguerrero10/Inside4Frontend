import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link, UNAUTHENTICATED_NAV_LINKS } from 'src/app/core/constants/links';

@Component({
  selector: 'app-unauthenticated-navbar',
  templateUrl: './unauthenticated-navbar.component.html',
  styleUrls: ['./unauthenticated-navbar.component.scss']
})
export class UnauthenticatedNavbarComponent implements OnInit {
  public links: Link[] = UNAUTHENTICATED_NAV_LINKS;
  public showNav: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
   this.showNav = this.router.url.split("/").pop() === "auth" ? false : true;
  }

  goToAuth() {
    this.showNav = false;
    this.router.navigate(["/auth"]);
  }
}
