import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '../../../../shared/app-component-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent extends AppComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.sharedService.toggleHeaderVisibility(true);
    this.sharedService.setBackgroundImage("url('/assets/images/background/pexels-eberhardgross-1624496.jpg')");
  }

  ngOnInit(): void {
    console.log("home initialized");
  }

}
