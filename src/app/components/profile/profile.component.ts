import { Inject, OnInit, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

export interface DialogData { }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  tokenVar: any;
  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog() {
    this.dialog.open(AccountDialog, {
      disableClose: true,
      panelClass: 'full-dialog'
    });
  }

  createDialog() {
    this.dialog.open(CCDialog, {
      disableClose: true,
      panelClass: 'full-dialog'
    });
  }
  ngOnInit() {

    if (localStorage.getItem('token') == null) {
      this.tokenVar = false
    } else {
      this.tokenVar = true
    }

  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/']);
    window.alert('You have been logged out.')
  }

}
@Component({
  selector: 'profile-dialog',
  templateUrl: './profile-dialog.html',
  styleUrls: ['./profile.component.css']
})

export class CCDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
}

@Component({
  selector: 'account.dialog',
  templateUrl: './account.dialog.html',
  styleUrls: ['./profile.component.css']
})

export class AccountDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
