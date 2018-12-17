import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = "Nail'd It";
  prodData: any;
  cart: []

  constructor( private products: ProductsService){}

    ngOnInit(){
      this.products.getProducts()
      .subscribe((res:any) => {
        this.prodData = res.products;
        console.log('this.proddata', this.prodData);
      })
    }
  }
