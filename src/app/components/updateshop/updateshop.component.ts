import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-updateshop',
  templateUrl: './updateshop.component.html',
  styleUrls: ['./updateshop.component.css']
})
export class UpdateShopComponent implements OnInit {
  updateShopForm: FormGroup;
  id: number;
  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  productDetails: Product;
  shopForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<UpdateShopComponent>, public dialog: MatDialog,
    private shopService: ShopService
  ) { }

  ngOnInit() {
      this.updateShopForm = this.formBuilder.group({
      "nameOfProduct": new FormControl(),
      "typeOfProduct": new FormControl(),
      "companyName": new FormControl(),
      "priceOfProduct": new FormControl(),
      "quantity": new FormControl(),
      });
  }


  onSubmit() {
    console.log(this.updateShopForm.value)
    this.shopService.editProduct(this.updateShopForm.value, this.data)
    
    this.matDialogRef.close();
  }

}
