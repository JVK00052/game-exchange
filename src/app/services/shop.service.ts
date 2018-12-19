import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { APIURL } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  constructor(private http: HttpClient) { }

  getProduct(product: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${APIURL}/product/getall`, httpOptions)
  }
  deleteProduct(id: any): Observable<Product> {
    return this.http.delete<Product>(`${APIURL}/product/delete/${id}`, httpOptions)
  }
  editProduct(id: any): Observable<Product> {
    return this.http.put<Product>(`${APIURL}/product/edit/${id}`, httpOptions)
  }
  createProduct(nameOfProduct, typeOfProduct, companyName, priceOfProduct, quantity) {
    return this.http.post<any>(`${APIURL}/product/createnew`, { product: { nameOfProduct, typeOfProduct, companyName, priceOfProduct, quantity } })
    console.log('clicked')
  }
}