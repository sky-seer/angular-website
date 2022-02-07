import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private baseUrl = 'http://195.154.112.103:3000/';

  constructor(private http: HttpClient) { }
}
