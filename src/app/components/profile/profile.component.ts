import { Inject, OnInit, Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
// import { ProfileService } from '../../services/profile.service';
import { Payment } from '../../models/payment';
import { PaymentService } from '../../services/payment.service';
import { AddpaymentComponent } from '../addpayment/addpayment.component';
import { UpdatePaymentComponent } from '../updatepayment/updatepayment.component';

// export interface DialogData { }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  profile: any = [];

  payment: any = [];
  isAdminVar: any;
  tokenVar: any;

  constructor(private dialog: MatDialog, private router: Router, private paymentservice: PaymentService) { }

  ngOnInit() {
    this.getPayment();
     if (localStorage.getItem("isAdmin")  == "true") {
      this.isAdminVar = true
    } else {
      this.isAdminVar = false
    }

    if (localStorage.getItem('token') == null) {
      this.tokenVar = false
    } else {
      this.tokenVar = true
    }
  }

  getPayment() {
    this.payment = [];
    this.paymentservice.getPayment(this.payment.id).subscribe((data: any) => {
      console.log(data)
      this.payment = data
    })
  }

  openDialog() {
    this.dialog.open(AddPaymentComponent);
  }

  editPayment(payment) {
    this.dialog.open(UpdatePaymentComponent, {
      data: payment
      
    });
    console.log(payment);
  }
  deletePayment(payment: Payment): void {
    if (localStorage.getItem('token')) {
      this.paymentservice.deletePayment(payment).subscribe((payment: any) => console.log(payment))
      this.getPayment();
    } else {
      console.log('Not an authorized user.')
    }
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/']);
    window.alert('You have been logged out.')
  }

}