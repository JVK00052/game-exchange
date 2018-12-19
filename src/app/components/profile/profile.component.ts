import { Inject, OnInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment';;
import { Router } from '@angular/router';
import { AddPaymentComponent } from '../addpayment/addpayment.component';
import { UpdatePaymentComponent} from '../updatepayment/updatepayment.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  payment: any = [];
  isAdminVar: any;
  tokenVar: any;

  constructor(public dialog: MatDialog, private router: Router, private paymentservice: PaymentService) { } 


  ngOnInit() {

    this.getpayment();

    if (localStorage.getItem("isAdmin") == "true") {
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

  getpayment() {
    this.payment = [];
    this.paymentservice.getpayment(this.payment.id).subscribe((data: any) => {
      console.log(data)
      this.payment = data
    })
  }

  openDialog() {
    this.dialog.open(AddPaymentComponent);
  }

  editpayment(payment) {
    this.dialog.open(UpdatePaymentComponent, {
      data: payment

    });
    console.log(payment);
  }

  deletepayment(payment: Payment): void {
    if (localStorage.getItem('token')) {
      this.paymentservice.deletepayment(payment).subscribe((payment: any) => console.log(payment))
      this.getpayment();
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