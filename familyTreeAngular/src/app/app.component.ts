import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from './shared/sharedService.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class AppComponent {

  backgroundImage: string = '';

  constructor(private _sharedService: SharedService) {
    this._sharedService.backGroundImage$.subscribe(imageUrl => this.backgroundImage = imageUrl);
    // if (!this.backgroundImage) this.backgroundImage = "url('/assets/images/background/pexels-pixabay-531880.jpg')"  //Default background
  }
}
