import { Component } from '@angular/core';
import { FamilyMember } from '../../../../shared/components/family-tree/family-tree.component';

@Component({
  selector: 'app-primary-relations',
  templateUrl: './primary-relations.component.html',
  styleUrl: './primary-relations.component.scss'
})
export class PrimaryRelationsComponent {
  familyTreeArray: FamilyMember[] = [
    {
      id: 1,
      userName: "Father Doe",
      year: "1960",
      level: 1, // Parent level
      spouseId: 2,
      childrenId: [3, 4, 5, 6],
      parentId: null,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Father",
    },
    {
      id: 2,
      userName: "Mother Doe",
      year: "1965",
      level: 1, // Parent level
      spouseId: 1,
      childrenId: [3, 4, 5, 6],
      parentId: null,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Mother",
    },
    {
      id: 3,
      userName: "John Doe",
      year: "1985",
      level: 2, // User's level
      spouseId: 4,
      childrenId: [7, 8, 9],
      parentId: 1,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "User",
    },
    {
      id: 4,
      userName: "Jane Doe",
      year: "1987",
      level: 2, // User's spouse level
      spouseId: 3,
      childrenId: [7, 8, 9],
      parentId: null,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Spouse",
    },
    {
      id: 5,
      userName: "Sibling 1",
      year: "1988",
      level: 2, // Sibling level
      spouseId: null,
      childrenId: [],
      parentId: 1,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Sibling",
    },
    {
      id: 6,
      userName: "Sibling 2",
      year: "1990",
      level: 2, // Sibling level
      spouseId: null,
      childrenId: [],
      parentId: 1,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Sibling",
    },
    {
      id: 7,
      userName: "Child 1",
      year: "2010",
      level: 3, // Child level
      spouseId: null,
      childrenId: [],
      parentId: 3,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Child",
    },
    {
      id: 8,
      userName: "Child 2",
      year: "2012",
      level: 3, // Child level
      spouseId: null,
      childrenId: [],
      parentId: 3,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Child",
    },
    {
      id: 9,
      userName: "Child 3",
      year: "2015",
      level: 3, // Child level
      spouseId: null,
      childrenId: [],
      parentId: 3,
      photoUrl: "assets/images/avatar3.jpg",
      relationType: "Child",
    },
  ];


}
