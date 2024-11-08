import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '../../../../shared/app-component-base';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})

export class UserProfileComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.sharedService.toggleHeaderVisibility(true);
    this.sharedService.setBackgroundImage("url('/assets/images/background/pexels-sarimphotos-1033729.jpg')");
  }

  ngOnInit(): void {
    console.log("profile initialized");

  }

}
