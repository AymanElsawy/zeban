import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${environment.api}/category`);
  }
  getProductDeatils(id) {
    return this.http.get(`${environment.api}/category/${id}`)
  }

  getAllOrders() {
    return this.http.get(`${environment.api}/order`);
  }
  getOrderDetails(id) {
    return this.http.get(`${environment.api}/order/${id}`)
  }
}
