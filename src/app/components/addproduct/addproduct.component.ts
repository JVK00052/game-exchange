import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ShopService } from '../../services/shop.service';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {
  createProductForm: FormGroup;
  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';


  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private matDialogRef: MatDialogRef<ShopService>,
    public dialog: MatDialog,
    private shopService: ShopService
    ) { }

  ngOnInit() {
    this.createProductForm = this.formBuilder.group({
      "nameOfProduct": new FormControl(),
      "typeOfProduct": new FormControl(),
      "companyName": new FormControl(),
      "priceOfProduct": new FormControl(),
      "quantity": new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.createProductForm.value)
    this.shopService.createProduct(this.createProductForm.value).subscribe(res => {
      console.log(res)
    });
    this.matDialogRef.close();
  }

}
