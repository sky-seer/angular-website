import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Record } from './record';

@Injectable()
export class RecordsService {
  apiUrl = 'https://f993-2001-861-c5-f50-6c25-88e4-c82-ba80.ngrok.io/records';

  constructor(private http: HttpClient ) { }

  getRecords(limit = 1000, offset = 0): Observable<Record[]> {
    const url = `${this.apiUrl}?limit=${limit}&offset=${offset}`;

    return this.http.get<Record[]>(url);
  }
}