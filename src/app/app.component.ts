import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = "Nail'd It";
  data: any;
  product: []

  constructor( private products: ProductsService){}

    ngOnInit(){
      this.product.getProducts()
      .subscribe((res:any) => {
        this.data = res.product;
        console.log('this.data', this.data);
      })
    }
  }
