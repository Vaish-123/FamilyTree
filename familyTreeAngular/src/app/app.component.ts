import { Component } from '@angular/core';
import { SharedService } from './shared/sharedService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  backgroundImage: string = '';

  constructor(private _sharedService: SharedService) {
    this._sharedService.backGroundImage$.subscribe(imageUrl => this.backgroundImage = imageUrl);
  }
}
