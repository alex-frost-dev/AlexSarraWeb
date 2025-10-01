import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowSizeService implements OnDestroy {
  private resizeSubject = new BehaviorSubject<string>(this.detectScreenSize());
  resize$ = this.resizeSubject.asObservable();
  private subscription!: Subscription;

  constructor() {
    this.subscription = fromEvent(window, 'resize').subscribe(() => {
      console.log('Service emits:', this.detectScreenSize());
      this.resizeSubject.next(this.detectScreenSize());
    });
  }

  public detectScreenSize() {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      return 'xl';
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      return 'lg';
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      return 'md';
    } else if (window.matchMedia('(min-width: 640px)').matches) {
      return 'sm';
    } else {
      return 'sm';
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
