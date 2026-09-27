import { Component, Injector, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppComponentBase } from '../../../../shared/app-component-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from '../../../../core/models/userDto';
import { UserService } from '../../../../core/services/user.service';
import { UserRelationService } from '../../../../core/services/userRelation.service';
import { UserRelationsDto } from '../../../../core/models/userRelationsDto';
import { RelationsDto } from '../../../../core/models/relationsDto';

@Component({
    selector: 'app-create-relation',
    templateUrl: './create-relation.component.html',
    styleUrl: './create-relation.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CreateRelationComponent extends AppComponentBase implements OnInit {

  allUsers: UserDto[] = [];
  relations: RelationsDto[] = [];

  constructor(
    injector: Injector,
    private _userService: UserService,
    private _userRelationService: UserRelationService
  ) {
    super(injector);
  }

  CreateRelationForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    userId: new FormControl('', Validators.required),
    relatedUserId: new FormControl('', Validators.required),
    relationId: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.spinnerService.show();
    Promise.all([this.getAllRelations(), this.getAllUsers()]).then(() => {
      this.spinnerService.hide();
    });
  }

  getAllRelations() {
    return new Promise((resolve, reject) => {
      this._userRelationService.getAllRelations().subscribe(result => {
        this.relations = result;

        resolve(true);
      });
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this._userService.getAllUsers().subscribe(result => {
        console.log(result);
        this.allUsers = result;

        resolve(true);
      });
    });
  }

  validateBothUsers() {
    var validatedValue = this.CreateRelationForm.get('userId')?.value == this.CreateRelationForm.get('relatedUserId')?.value && this.CreateRelationForm.get('userId')?.value && this.CreateRelationForm.get('relatedUserId')?.value;
    return validatedValue || false;
  }

  submitRelation() {
    this.spinnerService.show();
    var _data: UserRelationsDto = new UserRelationsDto();
    Object.assign(_data, this.CreateRelationForm.value);
    // _data.isApproved = false;
    // _data.startDate = new Date()
    // _data.endDate = new Date();
    // _data.relationId = 1
    console.log(_data);

    this._userRelationService.createOrEditRelation(_data).subscribe(() => {
      this.alertService.success('Request Submitted', 'You will recieve an email confirmation once an admin approves your request');
      this.spinnerService.hide();
    },
      () => {
        this.spinnerService.hide();
        this.alertService.error('Failed to Sumbit');
      }
    );
  }

}
