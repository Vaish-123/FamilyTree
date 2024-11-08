import { Component, Input, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SortableDirective, SortEvent } from './sortable.directive';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent<T> implements OnInit {

  @Input() data: T[] = []; // Input data array
  @Input() columns: { key: string; label: string, width: string }[] = []; // Column configuration
  private initialData: T[] = []; // Store initial data state
  private sortState: 'asc' | 'desc' | 'reset' = 'reset';

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  searchTerm: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' | '' = '';
  page: number = 1;
  pageSize: number = 5;
  filteredData$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  // Array to control which columns are visible
  visibleColumns: { [key: string]: boolean } = {};
  darkMode: boolean = false;
  bordered: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.initialData = [...this.data]; // Save the initial data
    this.filterData();
    // Initialize all columns as visible
    this.columns.forEach(column => {
      this.visibleColumns[column.key] = true;
    });
  }

  onSort({ column }: SortEvent) {
    // Reset the other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // Toggle between 'asc', 'desc', and 'reset'
    if (this.sortState === 'reset') {
      this.sortState = 'asc';
      this.sortColumn = column;
      this.sortDirection = 'asc';
    } else if (this.sortState === 'asc') {
      this.sortState = 'desc';
      this.sortDirection = 'desc';
    } else {
      this.sortState = 'reset';
      this.sortColumn = '';
      this.sortDirection = '';
      this.data = [...this.initialData]; // Reset to initial data
    }

    this.filterData();
  }

  onSearch() {
    this.filterData();
  }

  onPageChange(page: number) {
    this.page = page;
    this.filterData();
  }

  filterData() {
    let filteredData = this.data;

    // Search functionality
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filteredData = filteredData.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(term)
        )
      );
    }

    // Sorting functionality
    if (this.sortState !== 'reset' && this.sortColumn && this.sortDirection) {
      filteredData = filteredData.sort((a, b) => {
        const res = a[this.sortColumn] < b[this.sortColumn] ? -1 : 1;
        return this.sortDirection === 'asc' ? res : -res;
      });
    }

    // Pagination
    const startIndex = (this.page - 1) * this.pageSize;
    const paginatedData = filteredData.slice(startIndex, startIndex + this.pageSize);

    this.filteredData$.next(paginatedData);
  }

  exportToCSV() {
    const rows = [this.columns.map(col => col.label), ...this.data.map(item => this.columns.map(col => item[col.key]))];
    const csvContent = rows.map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  toggleColumnVisibility(columnKey: string): void {
    this.visibleColumns[columnKey] = !this.visibleColumns[columnKey];
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;  // Toggle dark mode state
  }

  toggleTableBorder() {
    this.bordered = !this.bordered;  // Toggle table-bordered state
  }

}
