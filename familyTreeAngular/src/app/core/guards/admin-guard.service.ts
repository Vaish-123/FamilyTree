import { Injectable } from '@angular/core';
import { CanMatch, GuardResult, MaybeAsync, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService implements CanMatch {

  constructor(private _authService: AuthService) { }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    if (this._authService.hasAdminAccess()) return true;
    else return false;
  }

}
