import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products'
import { APIURL } from '../../environments/environment.prod'

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
  products: Products[];
  private url =`${APIURL}`
  constructor(private http: HttpClient) { }

  getProducts(products: any): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.url}/product/getall`, httpOptions)
  }
  deleteProducts(id: any): Observable<Products> {
    return this.http.delete<Products>(`${this.url}/product/delete/${id}`, httpOptions)
  }
  editProducts(id: any): Observable<Products> {
    return this.http.put<Products>(`${this.url}/product/edit/${id}`, httpOptions)
  }
  createProducts(nameOfProduct, typeOfProduct, companyName, priceOfProduct, quantity) {
    return this.http.post<any>(`${this.url}/product/createnew`, {product: {nameOfProduct, typeOfProduct, companyName, priceOfProduct, quantity}})
  }
}