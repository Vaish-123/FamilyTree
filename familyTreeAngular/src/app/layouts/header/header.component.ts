import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/sharedService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  isHeaderVisible: boolean = true;

  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.isHeaderVisible$.subscribe(isVisible => {
      this.isHeaderVisible = isVisible;
    });
  }

}
