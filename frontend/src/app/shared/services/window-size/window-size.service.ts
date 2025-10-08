import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowSizeService implements OnDestroy {
  private resizeSubject = new BehaviorSubject<string>(this.detectScreenSize());
  resize$ = this.resizeSubject.asObservable();
  private subscription!: Subscription;
  private lastSavedSize!: string;

  constructor() {
    this.subscription = fromEvent(window, 'resize').subscribe(() => {
      this.resizeSubject.next(this.detectScreenSize());
    });
  }

  public detectScreenSize() {
    var sizeLabel;
    if (window.matchMedia('(min-width: 1280px)').matches) {
      sizeLabel = 'xl';
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      sizeLabel = 'lg';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      sizeLabel = 'md';
    } else if (window.matchMedia('(min-width: 640px)').matches) {
      sizeLabel = 'sm';
    } else {
      sizeLabel = 'sm';
    }
    if (this.lastSavedSize != sizeLabel) {
      console.log('Changed from', this.lastSavedSize, 'to', sizeLabel);
      this.lastSavedSize = sizeLabel;
    }
    return sizeLabel;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
