import { ProductsService } from './../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { orders } from 'src/app/models/orders';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:orders[] = [];
  constructor(private http: HttpClient, private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getAllOrders().subscribe(
      (orders:orders[]) => {
        this.orders = [];
        for (let x in orders) {
          this.orders.push(orders[x]);
        }
      }
    )
    setInterval(() => {
      this.ngOnInit();
    }, 60000)

  }



}
