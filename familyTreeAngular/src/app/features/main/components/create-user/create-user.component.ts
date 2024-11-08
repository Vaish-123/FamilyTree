import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { UserDto } from '../../../../core/models/userDto';
import { AppComponentBase } from '../../../../shared/app-component-base';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent extends AppComponentBase {

  maxDate = new Date().toISOString().slice(0, 16);

  constructor(
    injector: Injector,
    private _userService: UserService,
  ) {
    super(injector);
    this.sharedService.toggleHeaderVisibility(true);
    this.sharedService.setBackgroundImage("url('/assets/images/background/pexels-pixabay-531880.jpg')");
  }

  CreateUserForm = new FormGroup({
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

  submitForm() {
    this.spinnerService.show();
    this.utilsServiceComponent.validateAllFields(this.CreateUserForm);

    if (this.CreateUserForm.invalid) {
      this.spinnerService.hide();
      this.alertService.warn('Please Enter All Required Details', '', () => {
        this.utilsServiceComponent.scrollToTop();
      });
      return;
    }

    var _data: UserDto = new UserDto();
    Object.assign(_data, this.CreateUserForm.value);
    console.log(_data);
    this._userService.createOrEditUser(_data).subscribe(result => {
      console.log(result);
      this.spinnerService.hide();
      this.alertService.success('Saved Successfully');
    },
      (err) => {
        console.log(err);
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
