import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '../../../shared/app-component-base';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})

export class LoginComponent extends AppComponentBase {

  constructor(injector: Injector, private _authService: AuthService, private router: Router) {
    super(injector);
    this.sharedService.toggleHeaderVisibility(true);
    this.sharedService.setBackgroundImage("url('assets/images/background/bg.jpg')");
  }

  userName: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  passwordIcon: string = 'bi-eye-slash';

  togglePassword(passwordInput: HTMLInputElement) {
    this.passwordVisible = !this.passwordVisible;
    this.passwordIcon = this.passwordVisible ? 'bi-eye' : 'bi-eye-slash';
    if (passwordInput) {
      passwordInput.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  login() {
    this.spinnerService.show();
    this._authService.login(this.userName, this.password).subscribe(response => {
      if (response) {
        this._authService.storeToken(response.token);
        this.router.navigate(['/main/home']);
        this.alertService.info('Login Successful');
        this.spinnerService.hide();
      }
    },
      (err) => {
        this.spinnerService.hide();
        this.alertService.error(err.error.message || "Internal Error Occurred!");
      }
    )
  }

}
