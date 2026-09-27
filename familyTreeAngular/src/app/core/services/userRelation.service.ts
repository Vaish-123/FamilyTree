import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserRelationsDto } from "../models/userRelationsDto";
import { Observable } from "rxjs";
import { RelationsDto } from "../models/relationsDto";

@Injectable({
  providedIn: 'root'
})

export class UserRelationService {

  private apiUrl = 'https://localhost:44353/api/UserRelations';

  constructor(private httpClient: HttpClient) { }

  getAllRelations(): Observable<RelationsDto[]> {
    return this.httpClient.get<RelationsDto[]>(`${this.apiUrl}/GetAllRelations`);
  }

  createOrEditRelation(userRelation: UserRelationsDto): Observable<void> {
    return this.httpClient.post<void>(`${this.apiUrl}/CreateOrEditRelation`, userRelation);
  }

}
