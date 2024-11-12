import { Component, Injector, OnInit } from '@angular/core';
import { SharedService } from '../../shared/sharedService.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { AppComponentBase } from '../../shared/app-component-base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent extends AppComponentBase implements OnInit {

  isHeaderVisible: boolean = true;

  constructor(
    injector: Injector,
    private router: Router,
    private _authService: AuthService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.sharedService.isHeaderVisible$.subscribe(isVisible => {
      this.isHeaderVisible = isVisible;
    });
  }

  logout() {
    this.spinnerService.show();
    this._authService.logout();
    this.router.navigate(['/account/login']);
    this.alertService.info('Logged out Successfully');
    this.spinnerService.hide();
  }

}
