import { ProductsService } from './../../services/products.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = [];
  constructor(private http: HttpClient, private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getAllOrders().subscribe(
      data => {
        this.orders = [];
        for (let x in data) {
          this.orders.push(data[x]);
        }
        console.log(this.orders);
      }
    )

    setInterval(() => {

      this.ngOnInit();
    }, 60000)

  }



}
