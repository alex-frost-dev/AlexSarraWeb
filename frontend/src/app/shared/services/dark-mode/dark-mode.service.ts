import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private darkModeKey = 'darkMode';

  constructor() {
    const saved = localStorage.getItem(this.darkModeKey);
    if (saved === 'dark') {
      this.setDarkMode(true);
    } else if (saved === 'light') {
      this.setDarkMode(false);
    }
  }

  setDarkMode(isDark: boolean) {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem(this.darkModeKey, 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem(this.darkModeKey, 'light');
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
