import { Component } from '@angular/core';
import { SharedService } from '../../../../shared/sharedService.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  constructor(private _sharedService: SharedService) {
    this._sharedService.toggleHeaderVisibility(true);
    this._sharedService.setBackgroundImage("url('/assets/images/background/pexels-pixabay-531880.jpg')");
  }

  CreateUserForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  submitForm() {
    console.log(this.CreateUserForm.value);

  }

}
