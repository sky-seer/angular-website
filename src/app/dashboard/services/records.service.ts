import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Record } from './record';

@Injectable()
export class RecordsService {
  apiUrl = 'http://localhost:3000/records';

  constructor(private http: HttpClient) { }

  getRecords(limit = 1000, offset = 0): Observable<Record[]> {
    const url = `${this.apiUrl}?limit=${limit}&offset=${offset}`;

    return this.http.get<Record[]>(url);
  }
}
