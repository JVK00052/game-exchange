import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment';

@Component({
  selector: 'app-updatepayment',
  templateUrl: './updatepayment.component.html',
  styleUrls: ['./updatepayment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
  updatePaymentForm: FormGroup;
  id: number;
  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  paymentDetails: Payment;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<UpdatePaymentComponent>, public dialog: MatDialog,
    private PaymentService: PaymentService
  ) { }

  ngOnInit() {
      this.updatePaymentForm = this.formBuilder.group({
      "nameOfCompany": new FormControl(),
      "cardNumber": new FormControl(),
      "cardVerification": new FormControl(),
      "expirationDate": new FormControl(),
      "cardOwner": new FormControl(),
      });
  }


  onSubmit() {
    console.log(this.updatePaymentForm.value)
    this.PaymentService.editpayment(this.updatePaymentForm.value, this.data)
    
    this.matDialogRef.close();
  }

}
