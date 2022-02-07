import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Record } from './interface';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class AcceuilService {
  apiUrl = 'https://f993-2001-861-c5-f50-6c25-88e4-c82-ba80.ngrok.io';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('AcceuilService');
  }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl + '/records')
  }
}
