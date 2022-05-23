import { ProductsService } from './../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders;
  constructor(private http: HttpClient, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllOrders().subscribe(
      data => {
        this.orders = data;
        console.log(this.orders);
      }
    )
  }

  timeAgo(time) {
    moment.locale("ar")
    return moment(time).fromNow();
  }

}
