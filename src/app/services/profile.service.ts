import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { APIURL } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  getprofile(profile: any): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${APIURL}/profile/getall`, httpOptions)
  }
  deleteprofile(id: any): Observable<Profile> {
    return this.http.delete<Profile>(`${APIURL}/profile/delete/${id}`, httpOptions)
  }
  editprofile(id: any): Observable<Profile> {
    return this.http.put<Profile>(`${APIURL}/profile/edit/${id}`, httpOptions)
  }
  createprofile( owner, firstName, lastName, screeName, email, phoneNumber) {
    return this.http.post<any>(`${APIURL}/profile/createnew`, {profile: {owner, firstName, lastName, screeName, email, phoneNumber}})
  }
}