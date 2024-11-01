import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private isHeaderVisibleSubject = new BehaviorSubject<boolean>(true);
  public isHeaderVisible$ = this.isHeaderVisibleSubject.asObservable();

  private backGroundImageSubject = new BehaviorSubject<string>('');
  public backGroundImage$ = this.backGroundImageSubject.asObservable();

  toggleHeaderVisibility(isVisible: boolean): void {
    this.isHeaderVisibleSubject.next(isVisible);
  }

  setBackgroundImage(imageUrl: string) {
    this.backGroundImageSubject.next(imageUrl);
  }

}
