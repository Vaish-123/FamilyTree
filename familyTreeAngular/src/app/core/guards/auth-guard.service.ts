import { Injectable } from '@angular/core';
import { CanMatch, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanMatch {

  constructor(private router: Router) { }
  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return true;
    // else {
    //   this.router.navigate(['/access-denied']); // Redirect if unauthorized
    //   return false; // Deny access
    // }
  }

}
