import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { APIURL } from '../../environments/environment.prod';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'

  })
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;

  }

  login(username: string, password: string) {
    return this.http.post<any>(`${APIURL}/user/signup`, {user: { username, password }})
    .pipe(map(user => {
      if (user && user) {
        localStorage.setItem('token', user.sessionToken);
        localStorage.setItem('user', user.user);
      }

      return user;

    }))
  }

  logout() {
    localStorage.removeItem('token')
  }
}
