import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'https://localhost:44353/api/Auth';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { userName, password });
  }

  storeToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  hasAdminAccess(): boolean {
    const token = localStorage.getItem('auth_token');
    if (!token) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const hasAdminAccess = payload?.HasAdminAccess === 'true';

    return hasAdminAccess;
  }

}
