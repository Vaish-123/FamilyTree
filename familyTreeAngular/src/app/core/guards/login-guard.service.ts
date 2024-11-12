import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuardService implements CanActivate {

  constructor(private router: Router, private _authService: AuthService) { }

  canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
      // If the user is already authenticated, redirect them to main
      this.router.navigate(['/main']);
      return false;
    }
    // Allow access to login if not authenticated
    return true;
  }
}
