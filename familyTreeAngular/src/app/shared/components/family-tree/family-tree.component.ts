import { Component, Input, OnInit } from '@angular/core';

export interface FamilyMember {
  id: number;            // Unique identifier for the family member
  userName: string;     // Name of the family member
  year: string;         // Year of birth or other relevant year information
  level: number;        // Level in the family tree (1 for parents, 2 for user/siblings, 3 for children, etc.)
  spouseId: number | null; // ID of the spouse (or null if no spouse)
  childrenId: number[]; // Array of IDs of the children
  parentId: number | null; // ID of the parent (or null if no parent)
  photoUrl: string;     // URL to the photo of the family member
  relationType: string; // Type of relation (e.g., User, Spouse, Father, Mother, Sibling, Child)
}

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrl: './family-tree.component.scss'
})
export class FamilyTreeComponent implements OnInit {
  @Input() familyTreeArray: FamilyMember[] = [];
  uniqueLevels: number[] = [];

  b=false

  constructor() { }

  ngOnInit() {
    this.uniqueLevels = this.getUniqueLevels();
  }

  // Function to get unique levels from family tree members
  getUniqueLevels(): number[] {
    return Array.from(new Set(this.familyTreeArray.map(member => member.level)));
  }

  // Function to get members by level
  getMembersByLevel(level: number): FamilyMember[] {
    return this.familyTreeArray.filter(member => member.level === level);
  }

}
