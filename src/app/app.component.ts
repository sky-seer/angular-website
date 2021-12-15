import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMeteo'
  hidden = true

  temperatureShow () {
    this.hidden = false
  }
  temperatureHide () {
    this.hidden = true
  }
}
