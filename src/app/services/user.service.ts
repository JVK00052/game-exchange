import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  isAdmin: boolean;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signup(username, password, isAdmin) {
    return this.http.post<any>(`https://naildit-serverside.herokuapp.com/user/signup`, { user: { username, password, isAdmin } })
      .pipe(map(user => {
        if (user && user) {

          localStorage.setItem('token', user.sessionToken);
          console.log(user)
          console.log('You have hit this endpoint')
        }
        return user;
      }));
  }
  login(username, password, isAdmin) {
    return this.http.post<any>(`https://naildit-serverside.herokuapp.com/user/login`, { user: { username, password, isAdmin } })
      .pipe(map(user => {
        if (user && user) {

          localStorage.setItem('token', user.sessionToken);
          console.log(user)
          console.log('You have hit this endpoint')
        }
        return user;
      }));
  }
}
