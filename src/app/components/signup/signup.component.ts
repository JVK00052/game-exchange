import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users = [];
  error = '';
  username: string;
  password: string;
  isAdmin = false;

  constructor(private router: Router, private userservice: UserService, private http: HttpClient) { }

  ngOnInit() {

  }

  signup(username, password, isAdmin) {
    this.userservice.signup(username, password, isAdmin)
    .subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.error  = error;
      });
  }
}
