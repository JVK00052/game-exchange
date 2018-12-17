import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}
const url ='https://naildit-serverside.herokuapp.com'

@Injectable({
  providedIn: 'root'
})

export class ShopService {

  constructor(private http: HttpClient) { }

  getProduct(product: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/product/getall`, httpOptions)
  }
  deleteProduct(id: any): Observable<Product> {
    return this.http.delete<Product>(`${url}/product/delete/${id}`, httpOptions)
  }
  editProduct(id: any): Observable<Product> {
    return this.http.put<Product>(`${url}/product/edit/${id}`, httpOptions)
  }
  createProduct(nameOfProduct, typeOfProduct, companyName, priceOfProduct, quantity) {
    return this.http.post<any>(`${url}/product/createnew`, {product: {nameOfProduct, typeOfProduct, companyName, priceOfProduct, quantity}})
  }
}