import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table.component';
import { SortableDirective } from './sortable.directive';

@NgModule({
  declarations: [TableComponent, SortableDirective],
  imports: [CommonModule, FormsModule, NgbPaginationModule],
  exports: [TableComponent]
})

export class TableModule { }
