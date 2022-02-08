import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  apiUrl = "http://localhost:3000/users/login";

  redirectUrl: string | null = null;

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<User[]> {
    const url = `${this.apiUrl}?login=${login}&password=${password}`;
    return this.http.get<User[]>(url).pipe(
      tap((users) => {
        console.log(users);
        if (users.length > 0) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = true;
        }
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
