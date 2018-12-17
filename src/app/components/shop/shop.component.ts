import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Products } from '../../models/products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any=[];
  nameOfProduct: string;
  typeOfProduct: string;
  companyName: string;
  priceOfProduct: string;
  quantity: string;
  constructor(private shopservice: ShopService) { }

  ngOnInit() {
   this.getProducts();

  }
  getProducts(): void {
    this.products =[];
    this.shopservice.getProducts(this.products.id).subscribe((data: any)=> {
      console.log(data)
      this.products = data
    })
  }
  deleteProducts(products: Products): void {
    if (localStorage.getItem('token')) {
      this.shopservice.deleteProducts(products).subscribe((products: any) => console.log(products))
      this.getProducts();
    } else {
      console.log('Not an authorized user.')
    }
  }
  editProducts(products: Products): void {
    if (localStorage.getItem('token')) {
      this.shopservice.editProducts(products).subscribe((products: Products) => console.log(products))
      this.getProducts();
    }
  }
  createProduct(): void {
    this.shopservice.createProducts(this.nameOfProduct, this.typeOfProduct, this.companyName, this.priceOfProduct, this.quantity)
  }
}
