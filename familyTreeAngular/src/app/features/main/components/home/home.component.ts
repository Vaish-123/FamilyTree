import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../shared/sharedService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {

  constructor(private _sharedService: SharedService) {
    this._sharedService.toggleHeaderVisibility(true);
    this._sharedService.setBackgroundImage("url('/assets/images/background/pexels-eberhardgross-1624496.jpg')");
  }

  ngOnInit(): void {
    console.log("home initialized");
  }

}
