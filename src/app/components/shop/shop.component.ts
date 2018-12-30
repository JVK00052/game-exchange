import { Inject, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product'
import { Router } from '@angular/router';
import { AddProductComponent } from '../addproduct/addproduct.component';
import { UpdateShopComponent } from '../updateshop/updateshop.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

  currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || '';
  product: any = [];
  isAdminVar: any;
  tokenVar: any;

  constructor(private dialog: MatDialog, private router: Router, private shopservice: ShopService,) { }

  ngOnInit() {

    this.getproduct();

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
  
  getproduct() {
    this.product = [];
    this.shopservice.getProduct(this.product.id).subscribe((data: any) => {
      console.log(data)
      this.product = data
    })
  }

  openDialog() {
    this.dialog.open(AddProductComponent);
  }

  editProduct(product) {
    this.dialog.open(UpdateShopComponent, {
      data: product

    });
    console.log(product);
  }

  deleteProduct(product: Product): void {
    if (localStorage.getItem('token')) {
      this.shopservice.deleteProduct(product).subscribe((product: any) => console.log(product))
      this.getproduct();
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