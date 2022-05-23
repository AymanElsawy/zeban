import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('https://meatstoreapi.herokuapp.com/category')
  }
  getProductDeatils(id) {
    return this.http.get(`https://meatstoreapi.herokuapp.com/category/${id}`)
  }

  getAllOrders() {
    return this.http.get('https://meatstoreapi.herokuapp.com/order')
  }
  getOrderDetails(id) {
    return this.http.get(`https://meatstoreapi.herokuapp.com/order/${id}`)
  }
}
