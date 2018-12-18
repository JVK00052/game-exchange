import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tokenVar: any;
  constructor(private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('token') == null) {
      this.tokenVar = false
    } else {
      this.tokenVar = true
    }

  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin')
    this.router.navigate(['/']);
    window.alert('You have been logged out.')
  }

}
