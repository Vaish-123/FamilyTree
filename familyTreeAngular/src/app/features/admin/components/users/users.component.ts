import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '../../../../shared/app-component-base';
import { UserService } from '../../../../core/services/user.service';
import { UserDto } from '../../../../core/models/userDto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent extends AppComponentBase implements OnInit {

  isActive: boolean = false;
  AllUsers: UserDto[] = [];
  columnsToDisplay = [
    { key: "name", label: "Name", width: "100px" },
    { key: "surname", label: "Surname", width: "100px" },
    { key: "userName", label: "User Name", width: "100px" },
    { key: "emailAddress", label: "Email Address", width: "100px" },
    { key: "bio", label: "Bio", width: "200px" },
    { key: "status", label: "Status", width: "100px" },
    { key: "gender", label: "Gender", width: "100px" },
    { key: "location", label: "Location", width: "100px" },
  ];

  constructor(
    injector: Injector,
    private _userService: UserService
  ) {
    super(injector);
  }

  // Sample data for testing
  columns = [
    { key: 'column1', label: 'Column 1', width: '100px' },
    { key: 'column2', label: 'Column 2', width: '100px' },
    { key: 'column3', label: 'Column 3', width: '100px' },
    { key: 'column4', label: 'Column 4', width: '100px' },
    { key: 'column5', label: 'Column 5', width: '100px' },
    { key: 'column6', label: 'Column 6', width: '100px' },
    { key: 'column7', label: 'Column 7', width: '100px' },
    { key: 'column8', label: 'Column 8', width: '100px' },
    { key: 'column9', label: 'Column 9', width: '100px' },
    { key: 'column10', label: 'Column 10', width: '100px' }
  ];

  data = [
    { column1: 'Row 1 Data', column2: 'Row 1 Data', column3: 'Row 1 Data', column4: 'Row 1 Data', column5: 'Row 1 Data', column6: 'Row 1 Data', column7: 'Row 1 Data', column8: 'Row 1 Data', column9: 'Row 1 Data', column10: 'Row 1 Data' },
    { column1: 'Row 2 Data', column2: 'Row 2 Data', column3: 'Row 2 Data', column4: 'Row 2 Data', column5: 'Row 2 Data', column6: 'Row 2 Data', column7: 'Row 2 Data', column8: 'Row 2 Data', column9: 'Row 2 Data', column10: 'Row 2 Data' },
    { column1: 'Row 3 Data', column2: 'Row 3 Data', column3: 'Row 3 Data', column4: 'Row 3 Data', column5: 'Row 3 Data', column6: 'Row 3 Data', column7: 'Row 3 Data', column8: 'Row 3 Data', column9: 'Row 3 Data', column10: 'Row 3 Data' }
  ];


  ngOnInit(): void {
    this.getAllUsers().then(() => {
      this.isActive = true;
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.spinnerService.show();
      this.AllUsers = [];
      this._userService.getAllUsers().subscribe(result => {
        if (result) {
          this.AllUsers = result;
        }
        console.log(this.AllUsers);
        this.spinnerService.hide();

        resolve(true);
      },
        (err) => {
          console.log(err);
          this.spinnerService.hide();
          this.alertService.error('Falied to Fetch');

          resolve(false);
        }
      );
    });
  }

}
