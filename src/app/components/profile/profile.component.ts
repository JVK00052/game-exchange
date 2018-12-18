import { Inject, OnInit, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';
import { Payment } from '../../models/payment';;
import { PaymentService } from '../../services/payment.service';

export interface DialogData { }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  profile: any = [];

  payment: any = [];
tokenVar: any;
  constructor(public dialog: MatDialog, private router: Router, private profileservice: ProfileService, private paymentservice: PaymentService) { }


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
    this.getprofile();
    
     if (localStorage.getItem('token') == null) {
      this.tokenVar = false
    } else {
      this.tokenVar = true
    }
  }

  getprofile() {
    this.profile = [];
    this.profileservice.getprofile(this.profile.id).subscribe((data: any) => {
      console.log(data)
      this.profile = data
    })
  }
  deleteprofile(profile: Profile): void {
    if (localStorage.getItem('token')) {
      this.profileservice.deleteprofile(profile).subscribe((profile: any) => console.log(profile))
      this.getprofile();
    } else {
      console.log('Not an authorized user.')
    }
  }
  editprofile(profile: Profile): void {
    if (localStorage.getItem('token')) {
      this.profileservice.editprofile(profile).subscribe((profile: Profile) => console.log(profile))
      this.getprofile();
    }
  }

  createprofile(owner, firstName, lastName, screenName, email, phoneNumber) {
    this.profileservice.createprofile(owner, firstName, lastName, screenName, email, phoneNumber).subscribe((profile: Profile) => console.log(profile))
  }

  getpayment() {
    this.payment = [];
    this.paymentservice.getpayment(this.payment.id).subscribe((data: any) => {
      console.log(data)
      this.payment = data
    })
  }
  deletepayment(payment: Payment): void {
    if (localStorage.getItem('token')) {
      this.paymentservice.deletepayment(payment).subscribe((payment: any) => console.log(payment))
      this.getpayment();
    } else {
      console.log('Not an authorized user.')
    }
  }
  editpayment(payment: Payment): void {
    if (localStorage.getItem('token')) {
      this.paymentservice.editpayment(payment).subscribe((payment: Payment) => console.log(payment))
      this.getpayment();
    }
  }

  createpayment(nameOfCompany, cardNumber, cardVerification, expirationDate, cardOwner) {
    this.paymentservice.createpayment(nameOfCompany, cardNumber, cardVerification, expirationDate, cardOwner).subscribe((payment: Payment) => console.log(payment))
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