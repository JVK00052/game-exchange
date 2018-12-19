import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment';


@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddPaymentComponent implements OnInit {
  createPaymentForm: FormGroup;
  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  payment: any = [];

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private matDialogRef: MatDialogRef<PaymentService>,
    public dialog: MatDialog,
    private PaymentService: PaymentService
    ) { }

  ngOnInit() {
    this.createPaymentForm = this.formBuilder.group({
      "nameOfCompany": new FormControl(),
      "cardNumber": new FormControl(),
      "cardVerification": new FormControl(),
      "expirationDate": new FormControl(),
      "cardOwner": new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.createPaymentForm.value)
    this.PaymentService.createpayment(this.createPaymentForm.value).subscribe(res => {
      console.log(res)
    });
    this.matDialogRef.close();
  }

}
