import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layouts/header/header.component';
import { FamilyTreeComponent } from './components/family-tree/family-tree.component';
import { TableModule } from './components/tableComponent/table.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FamilyTreeComponent
  ],
  imports: [CommonModule, TableModule],
  exports: [HeaderComponent, FamilyTreeComponent, TableModule]
})

export class SharedModule { }
