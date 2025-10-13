import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private darkModeKey = 'dark_mode';

  constructor() {
    const saved = localStorage.getItem(this.darkModeKey);
    if (saved === 'true') {
      this.setDarkMode(true);
    } else if (saved === 'false') {
      this.setDarkMode(false);
    }
  }

  setDarkMode(isDark: boolean) {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem(this.darkModeKey, 'true');
    } else {
      html.classList.remove('dark');
      localStorage.setItem(this.darkModeKey, 'false');
    }
  }

  toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    this.setDarkMode(!isDark);
    console.log('Dark mode:', !isDark);
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
