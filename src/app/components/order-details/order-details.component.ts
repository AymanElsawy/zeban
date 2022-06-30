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

  orderId:string = "";
  orderDetails=[];
  orderProducts = [];
  orderTotalPrice:number = 0;


  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    for (let i in params) {
        this.orderId = this.orderId + params[i]
      }
      return this.orderId;
    });
    this.getProductDetails(this.orderId);
    this.priceInLocalCurrency(200);
    
  }

  getProductDetails(productId) { 
    this.productsService.getOrderDetails(productId).subscribe(
      (orders: any) => {
        this.orderDetails = orders;
        this.orderDetails.forEach(order => {
          order.cart.item.forEach(orderItem => {
            this.productsService.getProductDeatils(orderItem.category).subscribe(
              productData => {
                orderItem.product_details = productData;
              }
            )
          });
          console.log(this.orderDetails);
        }
        );
      }
    )
   }

  priceInLocalCurrency(price) {
   return (new Intl.NumberFormat('ar-SA-u-nu-latn', { style: 'currency', currency: 'SAR' }).format(price));
  }

  timeAgo(time) {
    moment.locale("ar")
    return moment(time).fromNow();
  }

}
