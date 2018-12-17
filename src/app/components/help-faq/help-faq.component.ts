import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-faq',
  templateUrl: './help-faq.component.html',
  styleUrls: ['./help-faq.component.css']
})
export class HelpFaqComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    window.alert('You have been logged out.')
  }


}
