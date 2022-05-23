import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderId = "";
  orderDetails;
  orderProducts;

  
  constructor(private route: ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      
      for (let i in params) {
        this.orderId = this.orderId + params[i]
      }
     
      return this.orderId;
    });

    this.productsService.getOrderDetails(this.orderId).subscribe(
      data => {
        this.orderDetails = data;
        console.log(this.orderDetails);
        this.orderProducts = this.orderDetails[0].cart.item;
        console.log(this.orderProducts);
        for (let x in this.orderProducts){
          this.productsService.getProductDeatils(this.orderProducts[x].category).subscribe(
            data => {
              this.orderProducts[x].new = data;
              console.log(this.orderProducts);
            }
          )
        }
        
      }
    )
  }

  timeAgo(time) {
    moment.locale("ar")
    return moment(time).fromNow();
  }

}
