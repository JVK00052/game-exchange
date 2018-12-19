import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
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
export class PaymentService {

  constructor(private http: HttpClient) { }

  getpayment(payment: any): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${APIURL}/payment/getall`, httpOptions)
  }
  deletepayment(id: any): Observable<Payment> {
    return this.http.delete<Payment>(`${APIURL}/payment/delete/${id}`, httpOptions)
  }
  editpayment(payment: any, paymentid: any) {
    return this.http.put(`${APIURL}/payment/edit/${paymentid}`, {payment}, httpOptions)
    .subscribe(() => {
      this.getpayment(paymentid)
    })
  }
  createpayment(payment: any) {
    return this.http.post<any>(`${APIURL}/payment/createnew`, {payment}, httpOptions)
  }
}
