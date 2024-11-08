import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../models/userDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'https://localhost:44353/api/user';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<UserDto[]> {
    return this.httpClient.get<UserDto[]>(`${this.apiUrl}/GetAllUsers`);
  }

  createOrEditUser(user: UserDto): Observable<number> {
    return this.httpClient.post<number>(`${this.apiUrl}/CreateOrEditUser`, user);
  }

}
