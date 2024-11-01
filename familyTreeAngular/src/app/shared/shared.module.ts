import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layouts/header/header.component';
import { FamilyTreeComponent } from './components/family-tree/family-tree.component';

@NgModule({
  declarations: [HeaderComponent, FamilyTreeComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FamilyTreeComponent]
})

export class SharedModule { }
