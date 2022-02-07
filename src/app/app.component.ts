import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkySeer';
  hide = true
  app = 0
  siteTheme = 'light'

  showthing () {
    this.hide = false
  }

  hidething () {
    this.hide = true
  }

  acceuil () {
    this.app = 0
  }

  temperature () {
    this.app = 1
  }

  humidite () {
    this.app = 2
  }

  testui () {
    this.app = 3
  }
}
