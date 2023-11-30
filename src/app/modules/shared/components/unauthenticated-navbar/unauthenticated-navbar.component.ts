import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link, UNAUTHENTICATED_NAV_LINKS } from 'src/app/core/constants/links';
import { InitAuthFormService } from 'src/app/core/services/init-auth-form.service';

@Component({
  selector: 'app-unauthenticated-navbar',
  templateUrl: './unauthenticated-navbar.component.html',
  styleUrls: ['./unauthenticated-navbar.component.scss'],
})
export class UnauthenticatedNavbarComponent implements OnInit {
  public links: Link[] = UNAUTHENTICATED_NAV_LINKS;

  constructor(private router: Router, private initAuthFormService: InitAuthFormService) {}

  ngOnInit(): void {
  }

  goToAuth() {
    this.initAuthFormService.initLoginForm(false);
    this.router.navigate(['/auth']);
  }
}
