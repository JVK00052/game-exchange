import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../models/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product: any=[];
  nameOfProduct: string;
  typeOfProduct: string;
  companyName: string;
  priceOfProduct: string;
  quantity: string;

constructor(private shopservice: ShopService, private router: Router) { }

  ngOnInit() {
   this.getproduct();

  }
  getproduct() {
    this.product = [];
    this.shopservice.getProduct(this.product.id).subscribe((data: any) => {
      console.log(data)
      this.product = data
    })
  }
  deleteProduct(product: Product): void {
    if (localStorage.getItem('token')) {
      this.shopservice.deleteProduct(product).subscribe((product: any) => console.log(product))
      this.getproduct();
    } else {
      console.log('Not an authorized user.')
    }
  }
  editProduct(product: Product): void {
    if (localStorage.getItem('token')) {
      this.shopservice.editProduct(product).subscribe((product: Product) => console.log(product))
      this.getproduct();
    }
  }

  createProduct(): void {
    this.shopservice.createProduct(this.nameOfProduct, this.typeOfProduct, this.companyName, this.priceOfProduct, this.quantity)
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    window.alert('You have been logged out.')
  }
}
