import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { UserDto } from '../../../../core/models/userDto';
import { AppComponentBase } from '../../../../shared/app-component-base';

@Component({
  selector: 'app-create-or-edit-user',
  templateUrl: './create-or-edit-user.component.html',
  styleUrl: './create-or-edit-user.component.scss'
})
export class CreateOrEditUserComponent extends AppComponentBase implements OnInit {

  maxDate = new Date().toISOString().slice(0, 16);

  constructor(
    injector: Injector,
    private _userService: UserService,
  ) {
    super(injector);
    this.sharedService.toggleHeaderVisibility(true);
    this.sharedService.setBackgroundImage("url('assets/images/background/pexels-pixabay-531880.jpg')");
  }

  UserForm = new FormGroup({
    id: new FormControl(0),
    userName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl(''),
    phoneNumber: new FormControl(''),
    dateOfBirth: new FormControl(),
    gender: new FormControl(''),
    relationshipStatus: new FormControl(''),
    status: new FormControl(''),
    location: new FormControl(''),
    bio: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  ngOnInit(): void { }

  editUser(userId: number) {
    this.spinnerService.show();
    this._userService.getUserById(userId).subscribe(result => {
      this.UserForm.patchValue(result);
      this.spinnerService.hide();
    });
  }

  submitForm() {
    this.spinnerService.show();
    this.utilsServiceComponent.validateAllFields(this.UserForm);

    if (this.UserForm.invalid) {
      this.spinnerService.hide();
      this.alertService.warn('Please Enter All Required Details', '', () => {
        this.utilsServiceComponent.scrollToTop();
      });
      return;
    }

    var _data: UserDto = new UserDto();
    Object.assign(_data, this.UserForm.value);
    this._userService.createOrEditUser(_data).subscribe(result => {
      this.spinnerService.hide();
      this.alertService.success('Saved Successfully');
    },
      () => {
        this.spinnerService.hide();
        this.alertService.error('Failed to Save');
      }
    );
    // .subscribe({
    //   next: (result) => { },
    //   error: (err) => { },
    //   complete: () => { }
    // })
  }

}
