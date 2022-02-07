import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testui',
  templateUrl: './testui.component.html',
  styleUrls: ['./testui.component.scss']
})
export class TestuiComponent implements OnInit {

  title = 'testUI';

  constructor() { }

  ngOnInit(): void {
    this.title = 'testUI';
  }

}
