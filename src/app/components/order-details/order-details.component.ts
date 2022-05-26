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
  orderProducts = [];
  orderTotalPrice = 0;


  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

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
        for (let x = 0; x < this.orderDetails.length; x++) {
          this.orderProducts.push(this.orderDetails[x].cart.item);
        }
        // console.log(this.orderProducts);
        for (let z = 0; z < this.orderProducts.length; z++) {
          if (this.orderProducts[z].length > 1) {
            for (let m = 0; m < this.orderProducts[z].length; m++) {
              this.productsService.getProductDeatils(this.orderProducts[z][m].category).subscribe(
                data => {
                  this.orderProducts[z][m].new = data;
                  // console.log(this.orderProducts);
                }
              )
            }
           
          }
          this.productsService.getProductDeatils(this.orderProducts[z][0].category).subscribe(
            data => {
              this.orderProducts[z][0].new = data;
              
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
