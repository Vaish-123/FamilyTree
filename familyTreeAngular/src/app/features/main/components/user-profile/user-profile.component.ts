import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/sharedService.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent implements OnInit {

  constructor(private _sharedService: SharedService) {
    this._sharedService.toggleHeaderVisibility(true);
    this._sharedService.setBackgroundImage("url('/assets/images/background/pexels-sarimphotos-1033729.jpg')");
  }

  ngOnInit(): void {
    console.log("profile initialized");

  }

}
