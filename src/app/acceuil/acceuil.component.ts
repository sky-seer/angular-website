import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AcceuilService } from './acceuil.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
  providers: [AcceuilService]
})
export class AcceuilComponent implements OnInit  {

  title = 'acceuil';
  gateways: any;
  gatewaysID: any;
  records: any;
  recordsID: any;
  recordsSensorsID: any;
  gatewaysGateway: any;
  sensors: any;
  sensorsID: any;
  http!: HttpClient
  apiLink = 'https://f993-2001-861-c5-f50-6c25-88e4-c82-ba80.ngrok.io/'

  constructor(private accueilService: AcceuilService) { }

  ngOnInit() {
    //console.log(this.title);
    this.APIcall();
    //console.log(this.gateways);²
    //console.log(this.gatewaysID);
    console.log(this.records);
    //console.log(this.recordsID);
    //console.log(this.recordsSensorsID);
    //console.log(this.gatewaysGateway);
    //console.log(this.sensors);
    //console.log(this.sensorsID);

  }

  APIcall() {
    //this.gateways = this.http.get(this.apiLink + '/gateways');
    //this.gatewaysID = this.http.get(this.apiLink + '/gateways/:id');
    // this.records = this.http.get(this.apiLink + '/records');
    //this.recordsID = this.http.get(this.apiLink + '/records/:id');
    //this.recordsSensorsID = this.http.get(this.apiLink + '/records/sensors/:id');
    //this.gatewaysGateway = this.http.get(this.apiLink + '/gateways/:gateway');
    //this.sensors = this.http.get(this.apiLink + '/sensors');
    //this.sensorsID = this.http.get(this.apiLink + '/sensors/:id');

    this.accueilService
      .getRecords()
      .subscribe((records) => console.log(records));
  }
}
