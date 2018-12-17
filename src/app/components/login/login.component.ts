import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users = [];
  error = '';
  isAdmin = false;

  constructor(private router: Router, private userservice: UserService, private http: HttpClient) { }

  ngOnInit() {

  }

  login(username, password, isAdmin) {
    this.userservice.login(username, password, isAdmin)
    .subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        this.error  = error;
      });
  }
}