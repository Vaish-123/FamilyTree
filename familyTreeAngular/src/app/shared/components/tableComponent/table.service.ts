import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface SortEvent {
  column: string;
  direction: 'asc' | 'desc' | '';
}

@Injectable({ providedIn: 'root' })

export class TableService {
  private _data = new BehaviorSubject<any[]>([]);
  private _searchTerm = new Subject<string>();
  private _sortColumn = new Subject<SortEvent>();

  // Expose observable streams for the component to subscribe to
  data$ = this._data.asObservable();
  searchTerm$ = this._searchTerm.asObservable();
  sortEvent$ = this._sortColumn.asObservable();

  setData(data: any[]) {
    this._data.next(data);
  }

  set searchTerm(term: string) {
    this._searchTerm.next(term);
  }

  set sortColumn(event: SortEvent) {
    this._sortColumn.next(event);
  }

  private matches(row: any, term: string) {
    return Object.values(row).some(value =>
      value.toString().toLowerCase().includes(term.toLowerCase())
    );
  }

  private sort(data: any[], { column, direction }: SortEvent): any[] {
    if (direction === '') return data;
    return [...data].sort((a, b) => {
      const res = a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
      return direction === 'asc' ? res : -res;
    });
  }

  getData(searchTerm: string, sortEvent: SortEvent, data: any[]): any[] {
    const filteredData = searchTerm ? data.filter(row => this.matches(row, searchTerm)) : data;
    return this.sort(filteredData, sortEvent);
  }
}
